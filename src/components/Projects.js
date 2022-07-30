import './Projects.css';

import ProjectTile from './ProjectTile';

const projects = [
    {
        title: 'exLibris',
        img: 'exlibris',
        description: 'Online book cataloguing tool',
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase'],
        url: 'https://paniszcze.github.io/exlibris/',
        source: 'https://github.com/paniszcze/exlibris/',
        theme: { primary: '#18206f', text: '#eaeaea', highlight: '#d88373' },
    },
    {
        title: 'kībōdo',
        img: 'kiiboodo',
        description: 'Gamified typing practice of Japanese kana',
        tags: ['HTML', 'CSS', 'TypeScript', 'React'],
        url: 'https://paniszcze.github.io/kiiboodo/',
        source: 'https://github.com/paniszcze/kiiboodo/',
        theme: { primary: '#000000', text: '#ffffff', highlight: '#00ff00' },
    },
    {
        title: 'Kana Flashcards',
        img: 'kana_flashcards',
        description: 'Customizable flashcard deck for learning Japnanese kana',
        tags: ['HTML', 'CSS', 'JavaScript', 'React'],
        url: 'https://paniszcze.github.io/kana-flashcards/',
        source: 'https://github.com/paniszcze/kana-flashcards/',
        theme: { primary: '#fad4c0', text: '#704e2e', highlight: '#c23866' },
    },
];

export default function Projects() {
    return (
        <section className="projects">
            <h5>my work</h5>
            <h2>projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectTile key={index} {...project} index={index} />
                ))}
            </div>
        </section>
    );
}
