import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

export default function Socials() {
    return (
        <div className="socials">
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/daniel-pański-558497247/"
                        rel="noreferrer"
                        target="_blank">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/paniszcze" rel="noreferrer" target="_blank">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.codewars.com/users/paniszcze"
                        rel="noreferrer"
                        target="_blank">
                        <SiCodewars />
                    </a>
                </li>
            </ul>
        </div>
    );
}
