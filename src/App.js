import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}