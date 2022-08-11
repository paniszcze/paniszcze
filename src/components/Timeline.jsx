export default function Timeline({ events }) {
    return (
        <ul className="timeline">
            {events &&
                events.map((record, index) => (
                    <li className="record" key={index}>
                        <div className="opposite">{record.period}</div>
                        <div className="separator">
                            <span className="dot"></span>
                            {index !== events.length - 1 && <span className="line"></span>}
                        </div>
                        <div className="content">
                            <h4>
                                {record.position} @&nbsp;
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
