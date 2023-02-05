import { component$ } from "@builder.io/qwik";

export default component$(() => {

  return (
    <div class="text-zinc-100">
      <div class="pb-2 text-sm text-gray-500">
        <a href="/" class="text-sm underline">Home</a> &gt; Writing
      </div>
      <p class="text-4xl font-bold">Writing</p>
      <p class="pt-5 text-xl">I enjoy researching and writing about broad health/scientific topics including energy systems, maximizing human physical potential, and more.</p>
      <p class="pt-2 text-xl">Most of my writing is published on substack for my company <a class="underline" href="https://www.instagram.com/acidgambit">Acid Gambit</a> which can be found on Substack here: <a class="underline" href="https://acidgambit.substack.com/">Link</a></p>
    </div>
  );
});