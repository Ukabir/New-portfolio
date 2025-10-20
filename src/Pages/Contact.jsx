import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import "../Styles/contact.css";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const sendEmail = (e) => {
    setLoad(true)
    e.preventDefault();

    emailjs.sendForm(
      "service_xa2ivd7",    // replace with your EmailJS service ID
      "template_u477yw4",   // replace with your EmailJS template ID
      e.target,
      "ti16suquODdfzS2zW"     // replace with your EmailJS public key
    ).then(
      (result) => {
        toast.success("Message sent successfully!");
        setLoad(false)
        e.target.reset();
      },
      (error) => {
        toast.error("Failed to send message, please try again." + error.text);
        setLoad(false)
      }
    );
  };

  return (
    <section className="section sectL" data-aos="zoom-in">
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

      <form className="contact-2" onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button disabled={load} id="btn" type="submit">{load ? "Loading..." : "Send Message"}</button>
      </form>
    <ToastContainer />
    </section>
  );
};

export default Contact;
