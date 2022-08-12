import { useState } from 'react';
import axios from 'axios';

import { FaUser, FaAt, FaEnvelope } from 'react-icons/fa';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isPending, setIsPending] = useState(false);

    axios.interceptors.request.use(
        function (config) {
            setIsPending(true);
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
    axios.interceptors.response.use(
        function (response) {
            setIsPending(false);
            return response;
        },
        function (error) {
            setIsPending(false);
            return Promise.reject(error);
        }
    );

    const sendEmail = (e) => {
        // prevent page refresh
        e.preventDefault();
        // send request
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios
            .post('https://formsubmit.co/ajax/fcbd5982c19a580e2a116c6d12c1c8d9', {
                name: name,
                email: email,
                message: message,
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        // reset form inputs
        [setName, setEmail, setMessage].forEach((f) => f(''));
    };

    return (
        <form onSubmit={sendEmail}>
            <div className="contact-input">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label className="contact-icon" htmlFor="name">
                    <FaUser />
                </label>
            </div>
            <div className="contact-input">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label className="contact-icon" htmlFor="email">
                    <FaAt />
                </label>
            </div>
            <div className="contact-input">
                <textarea
                    name="message"
                    id="message"
                    rows="7"
                    placeholder="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <label className="contact-icon" htmlFor="message">
                    <FaEnvelope />
                </label>
            </div>
            <button
                type="submit"
                className={`btn${isPending ? ' disabled' : ''}`}
                disabled={isPending}>
                send
            </button>
        </form>
    );
}
