import Socials from '../components/Socials';

export default function Footer() {
    return (
        <footer>
            <Socials />
            <p>
                built by{' '}
                <a
                    href="https://github.com/paniszcze/paniszcze.github.io"
                    rel="noreferrer"
                    target="_blank">
                    paniszcze
                </a>
                , 2022
            </p>
        </footer>
    );
}
