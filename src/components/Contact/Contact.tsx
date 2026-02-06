import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_js8ihk6",
        "template_2i0trch",
        formRef.current,
        "nTIgsJ294hbBd2wTT"
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        formRef.current?.reset();
      })
      .catch(() => {
        alert("Failed to send message ❌");
        formRef.current?.reset();
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let's Connect</h2>

      <div className="contact-container">

        {/* -------- Contact Info -------- */}
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>
            I'm open to collaborations, freelance work, and exciting
            opportunities. Feel free to drop a message!
          </p>

          <div className="info-item">
            📧 <a href="mailto:abdahmad0603@gmail.com">abdahmad0603@gmail.com</a>
          </div>

          <div className="info-item">
            💻 <a href="https://github.com/heyitsabd" target="_blank">
              github.com/heyitsabd
            </a>
          </div>

          <div className="info-item">
            🔗 <a href="https://linkedin.com/in/heyitsabd" target="_blank">
              linkedin.com/in/heyitsabd
            </a>
          </div>
        </div>

        {/* -------- Contact Form -------- */}
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
          />

          <button type="submit">Send Message</button>

        </form>

      </div>
    </section>
  );
};

export default Contact;
