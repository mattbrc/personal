import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { content } from "../../../content";

export default component$(() => {
  const location = useLocation();
  const id = parseInt(location.params.id);
  const things = content.store[id].info;
  const heading = content.store[id].heading;

  return (
    <div class="text-zinc-100">
      <div class="pb-2 text-sm text-gray-500">
        <a href="/" class="text-sm underline">
          Home
        </a>{" "}
        &gt; {heading}
        <a>{id}</a>
      </div>
      <p class="text-4xl font-bold">{heading}</p>
      <p class="pt-5 text-xl">{things}</p>
    </div>
  );
});
