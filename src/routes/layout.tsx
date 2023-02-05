import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <div>
      <main>
        <Header />
        <Slot />
      </main>
      <footer class="pt-[18rem]">
        <p class="text-zinc-100">Made by Matt | 2023</p>
        {/* <div class="text-zinc-100">
          <ul>
            <li>
              <a href="/docs">Docs</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="https://qwik.builder.io/">Qwik</a>
            </li>
            <li>
              <a href="https://twitter.com/QwikDev">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/BuilderIO/qwik">GitHub</a>
            </li>
            <li>
              <a href="https://qwik.builder.io/chat">Chat</a>
            </li>
          </ul>
          <div>
            <a href="https://www.builder.io/" target="_blank" class="builder">
              Made with ♡ by Builder.io
            </a>
          </div>
        </div> */}
      </footer>
    </div>
  );
});
