import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <div>
      <main>
        <Header />
        <Slot />
      </main>
      <footer class="pt-[16rem]">
        <p class="text-zinc-100">Made by Matt | 2023</p>
      </footer>
    </div>
  );
});
