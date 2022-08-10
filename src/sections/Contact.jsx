import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="decorator"></div>
            <header>
                <h5>get in touch</h5>
                <h2>contact</h2>
            </header>
            <ContactForm />
        </section>
    );
}
