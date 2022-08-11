import { projects } from '../assets/data/projects';

import ProjectList from '../components/ProjectList';

export default function Projects() {
    return (
        <section className="projects">
            <header>
                <h5>featured works</h5>
                <h2>projects</h2>
            </header>
            <ProjectList projects={projects} />
        </section>
    );
}
