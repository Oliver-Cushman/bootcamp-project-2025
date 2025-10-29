import { Project } from "@/static/portfolioData";
import styles from "./portfolioProject.module.css";

export default function PortfolioProject(props: Project) {
    return (
        <a className={styles.project_details} href={props.link} id={props.id}>
          <img
            className={styles.project_image}
            src={props.image}
            alt={props.imageAlt}
          />
          <h2>{props.title}</h2>
          <p>
            {props.description}
          </p>
        </a>
    )
}