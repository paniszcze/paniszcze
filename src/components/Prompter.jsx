import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

const DELAY_START = 1200;
const DELAY_PAUSE = 1000;
const DELAY_NEXT = 3000;
const DELAY_TYPE = 70;
const DELAY_ERASE = 60;

export default function Prompter({ lines }) {
    const [display, setDisplay] = useState('');
    const [index, setIndex] = useState(0);
    const [delay, setDelay] = useState(DELAY_START);
    const [shouldErase, setShouldErase] = useState(false);

    useInterval(() => {
        const line = lines[index];
        const len = display.length;

        switch (delay) {
            case DELAY_START:
            case DELAY_PAUSE:
                setDelay(DELAY_TYPE);
                break;
            case DELAY_NEXT:
                setDelay(DELAY_ERASE);
                break;
            case DELAY_TYPE:
            case DELAY_ERASE:
            default:
                break;
        }

        if (shouldErase) {
            if (len > 0) {
                // erase while there's still some text left
                setDisplay((d) => line.slice(0, len - 1));
            } else {
                // get the next line when done and switch off erasing mode
                setIndex((i) => (i === lines.length - 1 ? 0 : i + 1));
                setShouldErase(false);
                setDelay(DELAY_START);
            }
        } else {
            if (line.length > len) {
                // put char if the line is still not finished
                setDisplay((d) => line.slice(0, len + 1));
                // pause on punctuation marks ('.!?') not at the end of the line
                if (len !== line.length - 1 && /[.!?]/.test(line[len])) {
                    setDelay(DELAY_PAUSE);
                }
            } else {
                // start erasing once the line is finished
                setShouldErase(true);
                setDelay(DELAY_NEXT);
            }
        }
    }, delay);

    const lastWord = display.split(' ').pop();

    return (
        <h3>
            {`${display.split(' ').slice(0, -1).join(' ')} `}
            <span className="last-word">
                {lastWord.slice(0, -1)}
                <span className="current-char">{display ? lastWord.slice(-1) : '  '}</span>
            </span>
        </h3>
    );
}
