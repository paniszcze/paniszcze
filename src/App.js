import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Socials from './components/Socials';

export default function App() {
    return (
        <div className="app">
            <Hero />

            <About />
            <Experience />
            <Projects />
            <Contact />

            <Socials />
        </div>
    );
}