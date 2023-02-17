import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const test = process.env.test;
  console.log(test);
  return (
    <div class="text-zinc-100">
      <div class="pb-2 text-sm text-gray-500">
        <a href="/" class="text-sm underline">
          Home
        </a>{" "}
        &gt; Strava
      </div>
      <p class="text-4xl font-bold">WIP</p>
    </div>
  );
});
