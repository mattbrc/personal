import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="text-zinc-100">
      <div class="pb-2 text-sm text-gray-500">
        <a href="/" class="text-sm underline">
          Home
        </a>{" "}
        &gt; Work
      </div>
      <p class="text-4xl font-bold">Work</p>
      <p class="pt-5 text-xl">
        I'm currently an active duty Army Engineer Officer and graduate of
        Airborne and Ranger schools. Past assignments have included being a
        platoon leader in the 82nd Airborne Division and Deputy Engineer at 10th
        Special Forces Group. Prior to that, I did electromagnetic + antenna
        design work for the NSA in an R+D lab. My next and final assignment is
        in DC. Additionally, I founded a health and fitness company called Acid
        Gambit in 2020, for which now I'm developing a webapp with Nextjs +
        Supabase.
      </p>
    </div>
  );
});
