import { component$ } from "@builder.io/qwik";
// import Github from "../../components/github/github";

export default component$(() => {
  return (
    <div class="text-zinc-100">
      <div class="pb-2 text-sm text-gray-500">
        <a href="/" class="text-sm underline hover:text-zinc-100">
          Home
        </a>{" "}
        <span>&gt; Projects</span>
      </div>
      <p class="text-3xl font-bold">Projects</p>
      <div class="pt-5 text-xl">
        <p>
          I'm obsessed with learning new technologies and improving my skills in
          current tech. I currently enjoy working with React + TRPC, next,
          drizzle, and planetscale.
        </p>
        <ul class="list-outside list-disc ml-6 text-zinc-100 font-medium">
          <li class="py-2">
            <p>
              <a class="underline" href="https://github.com/mattbrc/personal">
                This Website:
              </a>{" "}
              Built with qwik, typescript, tailwindcss.
            </p>
          </li>
          <li class="py-2">
            <p>
              <a class="underline" href="https://app.acidgambit.com/">
                Gambit Training App:
              </a>{" "}
              Built with next/react, daisyUI, formik/yup, tailwindcss, and
              supabase (beta).
            </p>
          </li>
          <li class="py-2">
            <p>
              <a href="https://www.instagram.com/acidgambit" class="underline">
                Acid Gambit:
              </a>{" "}
              Founded company focused on providing training resources for
              athletes who want to improve their performance. It includes an app
              with training plans, wellness tracking, nutrition, and more. I've
              also grown the instagram to over 11k followers.
            </p>
          </li>
          <li class="py-2">
            <p>
              <a href="https://github.com/mattbrc/gastimate" class="underline">
                Gastimate:
              </a>{" "}
              A method of computing gas cost in USD for foundry users. Convert
              estimated function gas usage to 'USD'. Written in solidity.
            </p>
          </li>
          <li class="py-2">
            <p>
              Project Golden Ratio: an undeployed ERC4626 vault, controller, and
              yield strategy written in solidity.
            </p>
          </li>
          <li class="py-2">
            <p>
              <a
                class="underline"
                href="https://github.com/mattbrc/sudoswap-vis"
              >
                SudoAMM Vis:
              </a>{" "}
              Visualization using the Graph, React, and Apollo for sudoswap.
            </p>
          </li>
          <li class="py-2">
            <p>
              <a href="https://github.com/mattbrc/lens-stani" class="underline">
                Lens Auth:
              </a>{" "}
              Simple authorization tool for lens protocol to verify specific
              .lens accounts. Created in response to{" "}
              <a
                href="https://twitter.com/StaniKulechov/status/1534587764708196353"
                class="underline"
              >
                @StaniKulechov
              </a>{" "}
              in less than 24hrs. Live deployment{" "}
              <a
                class="underline"
                href="https://lens-stani-krc8ez0b3-acid-gambit.vercel.app/"
              >
                here
              </a>
              .
            </p>
          </li>
          <li class="py-2">
            <p>
              Easy CAS: Electrical Eng capstone; campus wide access control and
              class accountability using school wifi, raspberry pi, magstripe
              readers, and student ID cards.
            </p>
          </li>
          <li class="py-2">
            <p>
              I briefly worked for the NSA where I researched electromagnetic
              theory, design, and fabrication of rectangular micro-strip
              antennas using HFSS, AutoCad, and 3D-etching at the University of
              Maryland LPS and Fort Meade. I also developed internal tooling
              using Python to increase antenna design efficiency and reduce
              testing time.
            </p>
          </li>
        </ul>
      </div>
      {/* <Github /> */}
    </div>
  );
});
