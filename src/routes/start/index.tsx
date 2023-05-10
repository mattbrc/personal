import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="text-zinc-100">
      <div class="pb-2 text-sm text-gray-500">
        <a href="/" class="text-sm underline hover:text-zinc-100">
          Home
        </a>{" "}
        <span>&gt; Start Here</span>
      </div>
      <p class="text-4xl font-bold">Start Here</p>
      <p class="pt-5 text-xl">
        "Why yes, that is Nicolas Cage in Con Air. While my hair is objectively
        better (maybe I'm biased), it is a nice psuedonymous placeholder rather
        than splatter my beautiful face across the internet. I'm excited by
        making cool things and the intersection of strength training, speed, and
        endurance. This site aims to share some of the things I like doing, have
        done, and want to do. Built with qwik, typescript, + tailwindcss"
      </p>
    </div>
  );
});
