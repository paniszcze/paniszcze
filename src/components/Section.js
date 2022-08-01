export default function Section({ title, subtitle, id, children }) {
    return (
        <section id={id}>
            <header>
                {subtitle && <h5>{subtitle}</h5>}
                {title && <h2>{title}</h2>}
            </header>

            {children}
        </section>
    );
}
