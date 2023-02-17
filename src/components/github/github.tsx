import { component$, useResource$, Resource, useStore } from "@builder.io/qwik";

export default component$(() => {
  const github = useStore({
    org: "mattbrc",
  });

  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    track(() => github.org);
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return getRepositories(github.org, controller);
  });

  console.log("Render");
  return (
    <div>
      <p class="py-5 text-xl font-bold">
        Additional Repos (mapped from github api)
      </p>
      <div>
        <Resource
          value={reposResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(repos) => (
            <div class="grid grid-cols-2">
              {repos.map((repo, index) => (
                <li
                  class="text-sm underline py-1"
                  style={`grid-row: ${
                    Math.floor(index / 2) + 1
                  }; grid-column: ${(index % 2) + 1};`}
                >
                  <a href={`https://github.com/${github.org}/${repo}`}>
                    {repo}
                  </a>
                </li>
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
});

export async function getRepositories(
  username: string,
  controller?: AbortController
): Promise<string[]> {
  console.log("Fetch", `https://api.github.com/users/${username}/repos`);
  const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
    signal: controller?.signal,
  });
  console.log("Fetch resolved");
  const json = await resp.json();
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : Promise.reject(json);
}
