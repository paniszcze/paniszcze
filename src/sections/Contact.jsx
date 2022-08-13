import { useState } from 'react';
import { AxiosContext } from '../contexts/AxiosContext';

import ContactForm from '../components/ContactForm';
import StatusMonitor from '../components/StatusMonitor';

export default function Contact() {
    const [isPending, setIsPending] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    return (
        <section className="contact" id="contact">
            <AxiosContext.Provider
                value={{
                    isPending,
                    setIsPending,
                    response,
                    setResponse,
                    error,
                    setError,
                }}>
                <header>
                    <h5>get in touch</h5>
                    <h2>contact</h2>
                </header>
                <ContactForm />
                <StatusMonitor />
            </AxiosContext.Provider>
        </section>
    );
}
