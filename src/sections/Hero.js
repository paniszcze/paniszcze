import { HiOutlineLocationMarker, HiBriefcase } from 'react-icons/hi';
import HeroImage from '../assets/images/hero.png';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-wrapper">
                <div className="portrait">
                    <img src={HeroImage} alt="my pixel portrait" />
                </div>
                <div className="greeting">
                    <header>
                        <h1>
                            hi! <br />
                            my name is <br /> daniel panski
                        </h1>
                        <h3>i make things for the web</h3>
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
                        contact me
                    </a>
                </div>
            </div>
        </div>
    );
}
