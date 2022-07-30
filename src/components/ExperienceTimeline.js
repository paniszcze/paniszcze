import { experience } from '../assets/data/experience';

export default function ExperienceTimeline() {
    return <div>{experience && experience.map((item) => <div>{item}</div>)}</div>;
}
