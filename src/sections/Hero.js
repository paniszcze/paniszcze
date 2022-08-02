import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Hero() {
    return (
        <div className="hero">
            <header>
                <h1>hi!</h1>
                <h1>my name is</h1>
                <h1>daniel pański</h1>
                <h3>i make things for the web</h3>
            </header>
            <div className="info">
                <div className="location">
                    <HiOutlineLocationMarker /> Barcelona, Spain
                </div>
                <div className="cta">
                    <a href="#contact" className="btn">
                        contact me
                    </a>
                </div>
            </div>
        </div>
    );
}
