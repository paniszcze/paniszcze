import "./Socials.css";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="socials">
      <ul>
        <li>
          <a href="https://linkedin.com" rel="noreferrer" target="_blank">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/paniszcze"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}
