import { component$, useSignal, $, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="text-gray-500 text-4xl font-bold">
      <ul>
        <li class="hover:text-zinc-100">
          <div>
            <a href="/start">Start Here</a>
          </div>
        </li>
        <li class="hover:text-zinc-100">
          <div>
            <a href="/faster">Faster, Stronger</a>
          </div>
        </li>
        <li class="hover:text-zinc-100">
          <div>
            <a href="/connect">Connect</a>
          </div>
        </li>
        <li class="hover:text-zinc-100">
          <div>
            <a href="/projects">Projects</a>
          </div>
        </li>
        {/* <li class="hover:text-zinc-100">
          <div>
            <a href="/02">Reading</a>
          </div>
        </li> */}
        {/* <li class="hover:text-zinc-100">
          <div>
            <a href="/training">Training</a>
          </div>
        </li> */}
        <li class="hover:text-zinc-100">
          <div>
            <a href="/writing">Writing</a>
          </div>
        </li>
        <li class="hover:text-zinc-100">
          <div>
            <a href="/work">Work</a>
          </div>
        </li>
      </ul>
    </div>
  );
});

interface IProps {
  title: string;
}

export const CollapsiblePanel = component$(({ title }: IProps) => {
  const collapsed = useSignal(true);

  const toggle = $(() => {
    collapsed.value = !collapsed.value;
  });

  return (
    <div class="collapsible hover:text-zinc-100">
      <header onClick$={toggle}>{title}</header>
      <section hidden={collapsed.value} class="text-zinc-100">
        <Slot />
      </section>
    </div>
  );
});
