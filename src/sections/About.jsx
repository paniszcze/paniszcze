import { ReactComponent as DinoRider } from '../assets/images/dino.svg';
import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiReact,
    SiFirebase,
    SiC,
    SiGit,
} from 'react-icons/si';

export default function About() {
    return (
        <section className="about">
            <div className="portrait">
                <div className="tile"></div>
                <DinoRider />
            </div>
            <header>
                <h5>get to know me</h5>
                <h2>about</h2>
            </header>
            <div className="description">
                <p>
                    i'm a&nbsp;technical university graduate and&nbsp;natural languages aficionado
                    with a&nbsp;passion for&nbsp;developing practical applications centered around
                    a&nbsp;stunning user experience.
                </p>
                <p>
                    my interest in&nbsp;writing code manifested in&nbsp;the late 2000s when as
                    a&nbsp;sixth-grader i&nbsp;used to&nbsp;make basic html websites about
                    dinosaurs. even though i&nbsp;didn't pursue a&nbsp;career in&nbsp;IT (nor
                    paleontology), after over a&nbsp;decade of&nbsp;university education
                    and&nbsp;diverse professional experience, i&nbsp;have come full circle
                    to&nbsp;rediscover my passion for&nbsp;programming.
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
                    <SiFirebase />
                    <SiC />
                    <SiGit />
                </div>
            </div>
        </section>
    );
}
