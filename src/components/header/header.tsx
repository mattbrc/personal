import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header>
      <div class="grid place-items-center py-5">
        <a href="/">
          <img
            class="inline object-cover w-24 h-24 rounded-full"
            src="https://i.imgur.com/zN2G2K6.png"
            alt="Profile image"
          />
        </a>
        <a href="/">
          <h1 class="text-gray-500 text-2xl font-bold py-2 hover:text-zinc-100">
            Matt Wilder
          </h1>
        </a>
      </div>
    </header>
  );
});
