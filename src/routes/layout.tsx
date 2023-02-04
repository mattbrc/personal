import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <main>
        <Slot />
      </main>
      <footer class="pt-[16rem]">
        <p class="text-zinc-100">Made by Matt | 2023</p>
      </footer>
    </div>
  );
});
