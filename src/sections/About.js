import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiReact,
    SiNestjs,
    SiFirebase,
    SiC,
    SiGit,
} from 'react-icons/si';

export default function About() {
    return (
        <section className="about">
            <div className="portrait"></div>
            <header>
                <h5>get to know me</h5>
                <h2>about</h2>
            </header>
            <div className="description">
                <p>
                    i'm a&nbsp;technical university graduate and&nbsp;natural languages afficionado
                    with a&nbsp;passion for&nbsp;developping things for&nbsp;the&nbsp;web.
                    i&nbsp;love creating practical applications centered around stunning user
                    experience.
                </p>
                <p>
                    my interest in&nbsp;web goes back to&nbsp;late 2000s, when as
                    a&nbsp;sixth-grader i&nbsp;used to&nbsp;make basic html websites about
                    dinosaurs. even though i&nbsp;didn't pursue a&nbsp;career in&nbsp;IT (nor
                    paleontology), after over a&nbsp;decade of&nbsp;university education
                    and&nbsp;diverse professional experience, i&nbsp;have come full circle
                    to&nbsp;rediscover my passion for&nbsp;programming. with&nbsp;dinosaurs
                    or&nbsp;not &mdash; i'm making my way into the&nbsp;world of&nbsp;web
                    development.
                </p>
                <p>
                    i've recently relocated to&nbsp;Barcelona and&nbsp;am looking for&nbsp;new
                    opportunities in&nbsp;this city. if&nbsp;you're interested in&nbsp;working
                    together, don't hesitate to&nbsp;<a href="#contact">contact me</a>.
                </p>
                <p>here's some tech i'm familiar with:</p>
                <div className="skills">
                    <SiHtml5 />
                    <SiCss3 />
                    <SiSass />
                    <SiJavascript />
                    <SiTypescript />
                    <SiReact />
                    <SiNodedotjs />
                    <SiNestjs />
                    <SiFirebase />
                    <SiC />
                    <SiGit />
                </div>
            </div>
        </section>
    );
}
