import { experience } from '../assets/data/experience';

import Timeline from '../components/Timeline';

export default function Experience() {
    return (
        <section className="experience">
            <header>
                <h5>tech experience</h5>
                <h2>career</h2>
            </header>
            <Timeline events={experience} />
        </section>
    );
}
