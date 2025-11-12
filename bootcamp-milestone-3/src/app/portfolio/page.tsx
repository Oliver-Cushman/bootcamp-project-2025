import styles from "./page.module.css";
import PortfolioProject from "@/components/portfolioProject";
import Portfolio, { ProjectData } from "@/database/portfolioSchema";
import connectDB, { checkCollections } from "@/database/db";

async function getProjects() {
  await connectDB();
  try {
    // await checkCollections();
    console.log("Model collection name:", Portfolio.collection.name);
    // query for all projects and sort by id
    const projects = await Portfolio.find().orFail();
    // send a response as the projects as the message
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className={styles.portfolio_container}>
      <h1 className={styles.page_title}>Portfolio</h1>
      <div className={styles.projects}>
        {projects
          ? projects.map((project) => {
              let props: ProjectData = {
                title: project.title,
                description: project.description,
                image: project.image,
                imageAlt: project.imageAlt,
                link: project.link,
                id: project.id,
              };
              return <PortfolioProject key={project.id} {...props} />;
            })
          : null}
      </div>
    </div>
  );
}
