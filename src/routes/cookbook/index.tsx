import { component$ } from "@builder.io/qwik";

export default component$(() => {

  return (
    <div class="text-zinc-100">
      <div class="pb-2 text-sm text-gray-500">
        <a href="/" class="text-sm underline">Home</a> &gt; Cookbook
      </div>
      <p class="text-4xl font-bold">Cookbook</p>
      <p class="pt-5 text-xl">Solidity</p>
      <p>Frontend</p>
      <p>...</p>
    </div>
  );
});