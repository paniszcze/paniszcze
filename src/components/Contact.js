import "./Contact.css";

import { FaUser, FaAt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h5>get in touch</h5>
      <h2>contact</h2>

      <form onSubmit={sendEmail}>
        <div className="contact-input">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
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
            placeholder="email address"
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
            required
          />
          <label className="contact-icon" htmlFor="message">
            <FaEnvelope />
          </label>
        </div>
        <button type="submit" className="btn">
          send message
        </button>
      </form>
    </section>
  );
}
