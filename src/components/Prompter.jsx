import { greetings } from '../assets/data/greetings';

export default function Prompter() {
    return (
        <h3>
            {greetings[0].slice(0, -1)}
            <span className="current">{greetings[0].slice(-1)}</span>
        </h3>
    );
}
