import { projects } from '../assets/data/projects';

import ProjectTile from './ProjectTile';

export default function ProjectList() {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <ProjectTile key={index} {...project} index={index} />
            ))}
        </div>
    );
}
