import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../Styles/contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="section sectL" data-aos="zoom-in">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="contact-1">
              <h2>Contact Me</h2>
              <div>
                <h4>EMAIL</h4>
                <p>kayteedberserker@gmail.com</p>
              </div>
              <div>
                <h4>PHONE NO</h4>
                <p>09159153951</p>
                <p>08062255406 / Whatsapp</p>
              </div>
              <div>
                <h3>LOCATION</h3>
                <p>Ibadan, Oyo state</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-12 col-md-8">
            <form
              action="https://formspree.io/f/mayrelzr"
              method="POST"
              className="contact-2"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button id="btn" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
