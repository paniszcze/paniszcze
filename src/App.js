import './App.css';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

export default function App() {
    return (
        <div className="app">
            <Header />
            <About />
            <Projects />
            <ContactForm />
        </div>
    );
}
