import './Hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <h1>hi!</h1>
            <h1>
                my name is <span>daniel pański</span>
            </h1>
            <h2>i make things for the web</h2>
            <div className="cta">
                <a href="#contact" className="btn">
                    contact me
                </a>
            </div>
        </div>
    );
}
