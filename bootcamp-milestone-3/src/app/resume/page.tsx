import styles from "./page.module.css";
import ResumeSection from "@/components/resumeSection";
import sections from "@/static/resumeData";

export default function Resume() {
  return (
    <div className={styles.resume_container}>
      <h1 className={styles.page_title}>Resume</h1>
      <a className={styles.download_btn} href="/OliverCushman.pdf" download>
        <p>Download</p>
      </a>
      <div className={styles.resume}>
        {sections.map((section, i) => (
          <ResumeSection
            key={i}
            title={section.title}
            entries={section.entries}
          />
        ))}
      </div>
    </div>
  );
}
