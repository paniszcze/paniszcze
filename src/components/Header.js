import "./Header.css";

import Socials from "./Socials";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>
          hi! my name is <span>daniel pański</span>
        </h1>
        <h2>
          i'm a technical university graduate and natural languages afficionado
          excited to learn new things along his career path
        </h2>
        <div className="cta">
          <a href="#contact" className="btn">
            contact me
          </a>
        </div>

        <Socials />
      </div>
    </header>
  );
}
