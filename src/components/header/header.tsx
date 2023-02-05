import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header>
      <div class="grid place-items-center py-5">
        <img class="inline object-cover w-24 h-24 rounded-full" src="public/conair.png" alt="Profile image"/>
        <h1 class="text-gray-500 text-2xl font-bold py-2 hover:text-zinc-100">
          Matt Wilder
        </h1>
      </div>
    </header>
  );
});
