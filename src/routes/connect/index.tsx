import { component$ } from "@builder.io/qwik";

export default component$(() => {
 
  return (
    <div class="text-gray-500">
      <div class="pb-2 text-sm text-gray-500">
        <a href="/" class="text-sm underline">Home</a> / Connect
      </div>
      <p class="text-4xl font-bold text-zinc-100">Connect</p>
      <ul>
        <li class="pt-5 underline py-1 hover:text-zinc-100">
          <a href="https://github.com/mattbrc">Github</a>
        </li>
        <li class="underline py-1 hover:text-zinc-100">
          <a href="https://twitter.com/acidgambit_">Twitter</a>
        </li>
        <li class="underline py-1 hover:text-zinc-100">
          <a href="https://www.linkedin.com/in/mattwilder1/">LinkedIn</a>
        </li>
        <li class="underline py-1 hover:text-zinc-100">
          <a href="https://www.instagram.com/themattbrc">Instagram</a>
        </li>
      </ul>
    </div>
  );
});