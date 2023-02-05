import { component$ } from "@builder.io/qwik";
import { useLocation } from '@builder.io/qwik-city';
import { content } from "../../../content";

export default component$(() => {
  const location = useLocation();
  const id = parseInt(location.params.id);
  const things = content.store[id].info;
  const heading = content.store[id].heading;

  return (
    <div class="text-gray-100">
      <p class="text-4xl font-bold">{location.params.id} {heading}</p>
      <p class="pt-5">{things}</p>
    </div>
  );
});