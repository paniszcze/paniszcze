import "./Projects.css";

import { FiCode, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "exLibris",
    img: "exlibris",
    description: "Online book cataloguing tool",
    tags: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    url: "https://paniszcze.github.io/exlibris/",
    source: "https://github.com/paniszcze/exlibris/",
    theme: { primary: "#18206f", text: "#eaeaea", highlight: "#d88373" },
  },
  {
    title: "kībōdo",
    img: "kiiboodo",
    description: "Gamified typing practice of Japanese kana",
    tags: ["HTML", "CSS", "TypeScript", "React"],
    url: "https://paniszcze.github.io/kiiboodo/",
    source: "https://github.com/paniszcze/kiiboodo/",
    theme: { primary: "#000000", text: "#ffffff", highlight: "#00ff00" },
  },
  {
    title: "Kana Flashcards",
    img: "kana_flashcards",
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
          ({ title, img, description, tags, url, source, theme }, index) => (
            <div className="project-item-wrapper" key={index}>
              <div
                className="project-item"
                style={{
                  backgroundColor: theme.primary,
                  color: theme.text,
                  alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
                  textAlign: index % 2 === 0 ? "left" : "right",
                }}
              >
                <div className="project-description">
                  <div
                    className="project-logo"
                    style={{
                      justifyContent:
                        index % 2 === 0 ? "flex-start" : "flex-end",
                    }}
                  >
                    <img
                      src={require("../assets/" + img + ".svg")}
                      alt={`${title} logo`}
                    />
                  </div>
                  <p>{description}</p>
                </div>
                <ul
                  className="tag-list"
                  style={{
                    justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                  }}
                >
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
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
