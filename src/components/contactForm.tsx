"use client";
import styles from "./contactForm.module.css";
import { useState, MouseEvent, ChangeEvent } from "react";
import { EmailData } from "@/static/emailData";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlemessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const emailData: EmailData = {
      name: name,
      email: email,
      title: title,
      message: message,
    };
    const res = await fetch("/api/contact/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });
    setFormStatus(await res.json());
    if (res.status == 200) {
      setName("");
      setEmail("");
      setTitle("");
      setMessage("");
    }
  };

  return (
    <div className={styles.contact_container}>
      <form id="contact-form">
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={handlemessageChange}
        ></textarea>
        <p className={styles.form_status}>{formStatus}</p>
        <button
          className={styles.submit_button}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
