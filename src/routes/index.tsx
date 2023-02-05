import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';
import List from '../components/list/list';

export const Button = component$(() => {
  return <button onClick$={() => console.log('click')}>Click me</button>;
});

export default component$(() => {
  return (
    <div>
      <List />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Matt Wilder',
  meta: [
    {
      name: 'description',
      content: 'Matt Wilder Personal Site',
    },
  ],
};
