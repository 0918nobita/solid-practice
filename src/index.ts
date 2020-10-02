import { Component, createComponent, createSignal, onCleanup } from 'solid-js';
import { insert, render, template } from 'solid-js/dom';

const tmpl = template(`<div>Hello</div>`, 2, false);

interface Props {
    name: string;
}

const HelloMsg: Component<Props> = ({ name }: Props) => {
    const [getCount, setCount] = createSignal(0);

    const timer = setInterval(() => setCount(getCount() + 1), 1000);

    onCleanup(() => clearInterval(timer));

    const el = tmpl.cloneNode(true);

    insert(el, () => `${name} [${getCount()}]`);

    return el;
};

render(
    () => createComponent(HelloMsg, { name: 'Hello, world!' }),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('root')!
);
