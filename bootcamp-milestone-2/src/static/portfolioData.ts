export type Project = {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  link: string;
  id: string;
};

const projects: Project[] = [
  {
    title: "FRC Robot Software",
    image: "/hugo.jpeg",
    imageAlt: "hugo",
    description:
      "This is software for FRC Team 4738's 2025 robot, Hugo the Hippo. I programmed motors, sensors, subsystems, and most manual and autonomous functions of the robot. I also drove it at competitions!",
    link: "https://github.com/Patribots4738/Reefscape2025",
    id: "project1",
  },
  {
    title: "PHHS Study",
    image: "/phhs-study.jpg",
    imageAlt: "phhsstudy",
    description:
      "This is a flashcard study site specifically for courses at my old high school.",
    link: "https://github.com/PHHS-CS-Club/PHHS-Study",
    id: "project2",
  },
  {
    title: "Robot Scouting Website",
    image: "/scouting-website.jpg",
    imageAlt: "scouting-website",
    description:
      "This is a mobile-intended website that allows members of FRC Team 4738 to evaluate robots at competition.",
    link: "https://github.com/Oliver-Cushman/ScoutingWebsite",
    id: "project3",
  },
  {
    title: "Personal Website",
    image: "/home-page.jpg",
    imageAlt: "homepage",
    description:
      "This is a website that expresses who I am and what I do. You are there right now!",
    link: "https://github.com/Oliver-Cushman/bootcamp-project-2025",
    id: "project4",
  },
];

export default projects;
