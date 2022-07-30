import './App.css';

import Hero from './components/Hero';
import Section from './components/Section';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';
import Socials from './components/Socials';

export default function App() {
    return (
        <div className="app">
            <Hero />

            <Section title="about" subtitle="get to know me">
                <About />
            </Section>
            <Section title="career" subtitle="relevant experience">
                <ExperienceTimeline />
            </Section>
            <Section title="projects" subtitle="featured works">
                <ProjectList />
            </Section>
            <Section title="contact" subtitle="get in touch" id="contact">
                <ContactForm />
            </Section>

            <Socials />
        </div>
    );
}
