import { experience } from '../assets/data/experience';

export default function Timeline() {
    return (
        <ul className="timeline">
            {experience &&
                experience.map((record, index) => (
                    <li className="record" key={index}>
                        <div className="opposite">{record.period}</div>
                        <div className="separator">
                            <span className="dot"></span>
                            {index !== experience.length - 1 && <span className="line"></span>}
                        </div>
                        <div className="content">
                            <h4>
                                {record.position} @{' '}
                                {record.url ? (
                                    <a href={record.url} rel="noreferrer" target="_blank">
                                        {record.company}
                                    </a>
                                ) : (
                                    record.company
                                )}
                            </h4>
                            {!!record.description && <p>{record.description}</p>}
                            {record.tasks.length !== 0 && (
                                <ul>
                                    {record.tasks.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
        </ul>
    );
}
