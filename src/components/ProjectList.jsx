import ProjectTile from './ProjectTile';

export default function ProjectList({ projects }) {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <ProjectTile key={index} {...project} index={index} />
            ))}
        </div>
    );
}
