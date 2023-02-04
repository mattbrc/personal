import { component$ } from "@builder.io/qwik";
import { useLocation } from '@builder.io/qwik-city';
import { content } from "../../../content";

export default component$(() => {
  const location = useLocation();
  const id = parseInt(location.params.id);
  const things = content.store[id].info;

  return (
    <div class="text-gray-100 pt-20">
      <p>{location.params.id} Start Here</p>
      <p>{things}</p>
    </div>
  );
});