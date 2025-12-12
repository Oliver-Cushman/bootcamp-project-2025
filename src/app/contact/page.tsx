import ContactForm from "@/components/contactForm";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <h1 className={styles.page_title}>Contact Me</h1>
      <ContactForm />
    </div>
  );
}
