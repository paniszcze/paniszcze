export default function Prompter({ lines }) {
    return (
        <h3>
            {lines[0].slice(0, -1)}
            <span className="current">{lines[0].slice(-1)}</span>
        </h3>
    );
}
