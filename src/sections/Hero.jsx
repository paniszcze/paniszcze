import { greetings } from '../assets/data/greetings';

import { HiOutlineLocationMarker, HiBriefcase } from 'react-icons/hi';
import { ReactComponent as HeroImg } from '../assets/images/hero.svg';

import Prompter from '../components/Prompter';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-wrapper">
                <HeroImg />
                <div className="greeting">
                    <header>
                        <h1>
                            <span className="breakable">hi!</span>
                            my name is <br /> daniel panski
                        </h1>
                        <Prompter lines={greetings} />
                    </header>
                </div>
            </div>
            <div className="info">
                <ul className="info-list">
                    <li className="info-item">
                        <HiOutlineLocationMarker /> Barcelona, Spain
                    </li>
                    <li className="info-item">
                        <HiBriefcase /> ...on the lookout!
                    </li>
                </ul>
                <div className="cta">
                    <a href="#contact" className="btn">
                        contact&nbsp;me
                    </a>
                </div>
            </div>
        </div>
    );
}
