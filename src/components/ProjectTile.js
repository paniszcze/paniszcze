import './ProjectTile.css';

import { FiCode, FiExternalLink } from 'react-icons/fi';

export default function ProjectTile({ title, img, description, tags, url, source, theme, index }) {
    const isReversed = index % 2 !== 0;

    return (
        <div className={`project-item-wrapper${isReversed ? ' reversed' : ''}`}>
            <div className="project-preview">
                <img
                    src={require('../assets/images/' + img + '_screenshot.png')}
                    alt={`${title} screenshot`}
                />
            </div>
            <div
                className="project-item"
                style={{
                    backgroundColor: theme.primary,
                    color: theme.text,
                }}>
                <div className="project-description">
                    <div className="project-logo">
                        <img src={require('../assets/images/' + img + '.svg')} alt={`${title} logo`} />
                    </div>
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
                        alt="view source code">
                        <FiCode />
                    </a>
                    <a
                        style={{ color: theme.highlight }}
                        href={url}
                        rel="noreferrer"
                        target="_blank"
                        aly="view live demo">
                        <FiExternalLink />
                    </a>
                </div>
            </div>
        </div>
    );
}
