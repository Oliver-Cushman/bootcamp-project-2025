import projects from "@/static/portfolioData";
import styles from "./page.module.css";
import PortfolioProject from "@/components/portfolioProject";

export default function Portfolio() {
  return (
    <div className={styles.portfolio_container}>
      <h1 className={styles.page_title}>Portfolio</h1>
      <div className={styles.projects}>
        {projects.map((project) => (
          <PortfolioProject key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
