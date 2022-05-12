import "./Projects.css";

import { FiCode, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "exLibris",
    logo: "exlibris",
    description: "Online book cataloguing tool",
    tags: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    url: "https://paniszcze.github.io/exlibris/",
    source: "https://github.com/paniszcze/exlibris/",
    theme: { primary: "#18206f", text: "#eaeaea", highlight: "#d88373" },
  },
  {
    title: "kībōdo",
    logo: "kiiboodo",
    description: "Gamified typing practice of Japanese kana",
    tags: ["HTML", "CSS", "TypeScript", "React"],
    url: "https://paniszcze.github.io/kiiboodo/",
    source: "https://github.com/paniszcze/kiiboodo/",
    theme: { primary: "#000000", text: "#ffffff", highlight: "#00ff00" },
  },
  {
    title: "Kana Flashcards",
    logo: "kana_flashcards",
    description: "Customizable flashcard deck for learning Japnanese kana",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    url: "https://paniszcze.github.io/kana-flashcards/",
    source: "https://github.com/paniszcze/kana-flashcards/",
    theme: { primary: "#fad4c0", text: "#704e2e", highlight: "#c23866" },
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h5>my work</h5>
      <h2>projects</h2>
      <div className="project-list">
        {projects.map(
          ({ title, logo, description, tags, url, source, theme }, index) => (
            <article
              key={index}
              className="project-item"
              style={{ backgroundColor: theme.primary, color: theme.text }}
            >
              <div className="project-description">
                <img
                  src={require("../assets/" + logo + ".svg")}
                  alt={`${title} logo`}
                  className="project-logo"
                />
                <p>{description}</p>
              </div>
              <ul className="tag-list">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="external-links">
                <a
                  style={{ color: theme.highlight }}
                  href={source}
                  rel="noreferrer"
                  target="_blank"
                  alt="view source code"
                >
                  <FiCode />
                </a>
                <a
                  style={{ color: theme.highlight }}
                  href={url}
                  rel="noreferrer"
                  target="_blank"
                  aly="view live demo"
                >
                  <FiExternalLink />
                </a>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}
