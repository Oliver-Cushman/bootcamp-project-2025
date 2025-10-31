import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <h1 className={styles.page_title}>Contact Me</h1>
      <form id="contact-form">
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <input className={styles.submit_button} type="submit" />
      </form>
    </div>
  );
}
