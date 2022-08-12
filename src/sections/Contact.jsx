import { useState } from 'react';
import { AxiosContext } from '../contexts/AxiosContext';

import ContactForm from '../components/ContactForm';

export default function Contact() {
    const [isPending, setIsPending] = useState(false);

    return (
        <section className="contact" id="contact">
            <AxiosContext.Provider value={{ isPending, setIsPending }}>
                <header>
                    <h5>get in touch</h5>
                    <h2>contact</h2>
                </header>
                <ContactForm />
                <div className="monitor"></div>
            </AxiosContext.Provider>
        </section>
    );
}
