import { Component, createSignal, onCleanup } from 'solid-js';
import { render } from 'solid-js/dom';
import h from 'solid-js/h';

interface Props {
    name: string;
}

const HelloMsg: Component<Props> = ({ name }) => {
    const [getCount, setCount] = createSignal(0);

    const timer = setInterval(() => setCount(getCount() + 1), 1000);

    onCleanup(() => clearInterval(timer));

    return (
        <div>
            Hello, {name}! [{getCount()}]
        </div>
    );
};

render(
    () => <HelloMsg name="SolidJS" />,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('root')!
);
