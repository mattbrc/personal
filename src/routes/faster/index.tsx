import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="text-zinc-100">
      <div class="pb-2 text-sm text-gray-500">
        <a href="/" class="text-sm underline">
          Home
        </a>{" "}
        &gt; Faster, Stronger
      </div>
      <p class="text-4xl font-bold">Faster, Stronger</p>
      <p class="pt-5 text-xl">
        Bigger, Faster, Stronger was a 2008 documentary about the pervasive use
        of steroids in sports, particularly in bodybuilding. I have always been
        interested in what it takes to be faster and stronger, but at a lean
        body fat percentage all while completely natural. I enjoy refining
        methods to maximize my strength, speed, endurance, and physique while
        balancing work, life, and sleep at the same time. Working to be just a
        little bit faster and a little bit stronger each day gives me a goal to
        strive for every day, regardless of what else is happening in life. The
        happy side effects are the elevated mood, boost in productivity, and
        stress management I think we all could benefit from.
      </p>
    </div>
  );
});
