import { component$, useSignal, $, Slot } from '@builder.io/qwik';

export default component$(() => {

  return (
    <div class="text-gray-500 text-4xl font-bold">
        <ul>
          <li class="hover:text-zinc-100">
              <div>
                {/* <p>00. start</p> */}
                <a href="/00">Start Here</a>
              </div>
          </li>
          <li class="hover:text-zinc-100">
              <div>
                <a href="/01">About</a>
              </div>
          </li>
          <li class="hover:text-zinc-100">
              <div>
                {/* <p>00. start</p> */}
                <a href="/02">Faster, Stronger</a>
              </div>
          </li>
          <li class="hover:text-zinc-100">
              <div>
                <a href="/03">Reading</a>
              </div>
          </li>
          <li class="hover:text-zinc-100">
              <div>
                {/* <p>00. start</p> */}
                <a href="/04">Writing</a>
              </div>
          </li>
          <li class="hover:text-zinc-100">
              <div>
                <a href="/05">Work</a>
              </div>
          </li>
          <li class="hover:text-zinc-100">
              <div>
                <a href="/06">Projects</a>
              </div>
          </li>
          <li class="hover:text-zinc-100">
              <div>
                {/* <p>00. start</p> */}
                <a href="/connect">Connect</a>
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
      <header onClick$={toggle}>
        {title}
      </header>
      <section hidden={collapsed.value} class="text-zinc-100">
        <Slot />
      </section>
    </div>
  );
});