import styles from "./resumeSection.module.css";
import { ResumeSectionData } from "@/static/resumeData";
import ResumeEntry from "./resumeEntry";

export default function ResumeSection(props: ResumeSectionData) {
  return (
    <section className={styles.section}>
      <h2 className={styles.section_title}>{props.title}</h2>
      {props.entries.map((entry, i) => (
        <ResumeEntry key={i} {...entry} />
      ))}
    </section>
  );
}
