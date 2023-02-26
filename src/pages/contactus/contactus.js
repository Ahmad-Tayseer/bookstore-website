import "./contactus.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import Cover from "../../components/cover/cover";
import image from "./asset3.jpg";
import ContactForm from "../../components/contact/contactForm";
import ContactInfo from "../../components/contact/contactInfo";

export default function Contact() {
  const page = "Contact";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function submitHandeler(e) {
    e.preventDefault();

    if (name === "" || email === "" || subject === "" || message === "") {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Your should enter all data, please try again.",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      await axios
        .post("http://localhost:5000/contacts", {
          name: name,
          email: email,
          subject: subject,
          message: message,
        })
        .then((res) => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Message sent successfully.",
            showConfirmButton: false,
            timer: 2500,
          });
        })
        .catch((err) => {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Error in sending message!",
            showConfirmButton: false,
            timer: 2500,
          });
        });
      e.target.reset();
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }

  return (
    <div className="contactDiv">
      <Cover label={page} img={image} />
      <div className="contactBg">
        <ContactForm
          submitHandeler={submitHandeler}
          setName={setName}
          setEmail={setEmail}
          setSubject={setSubject}
          setMessage={setMessage}
        />
        <ContactInfo />
      </div>
    </div>
  );
}
