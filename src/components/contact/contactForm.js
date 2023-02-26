import { IoIosMail } from "react-icons/io";

export default function ContactForm({
  submitHandeler,
  setName,
  setEmail,
  setSubject,
  setMessage,
}) {
  return (
    <section id="contact">
      <div className="sectionheader">
        <h1>Get in touch</h1>
      </div>
      <article>
        <p>
          Feel free to contact us anytime, we will be glad to hear from you.
        </p>

        <label for="checkcontact" className="contactbutton">
          <IoIosMail className="mail" />
        </label>
        <input id="checkcontact" type="checkbox" />

        <form onSubmit={submitHandeler} method="post" className="contactform">
          <p className="input_wrapper">
            <input
              type="text"
              name="name"
              id="contact_nom"
              onChange={(e) => setName(e.target.value)}
            />
            <label for="contact_nom">NAME</label>
          </p>
          <p className="input_wrapper">
            <input
              type="text"
              name="email"
              id="contact_email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="contact_email">EMAIL</label>
          </p>
          <p className="input_wrapper">
            <input
              type="text"
              name="subject"
              id="contact_sujet"
              onChange={(e) => setSubject(e.target.value)}
            />
            <label for="contact_sujet">SUBJECT</label>
          </p>
          <p className="textarea_wrapper">
            <textarea
              name="message"
              id="contact_message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </p>
          <p className="submit_wrapper">
            <input type="submit" value="SUBMIT" />
          </p>
        </form>
      </article>
    </section>
  );
}
