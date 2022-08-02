import { experience } from '../assets/data/experience';

export default function Timeline() {
    return <div>{experience && experience.map((item) => <div>{item}</div>)}</div>;
}
