export type ResumeEntryData = {
  title: string;
  category?: string;
  subtitles?: string[];
  points?: string[];
};

export type ResumeSectionData = {
  title: string;
  entries: ResumeEntryData[];
};

const sections: ResumeSectionData[] = [
  {
    title: "Education",
    entries: [
      {
        title: "Bachelor of Computer Science",
        subtitles: [
          "California Polytechnic State University San Luis Obispo",
          "Expected Graduation Date: June 2029",
        ],
      },
      {
        title: "Coursework",
        points: [
          "Fundamentals of Computer Science (equivalent)",
          "Introduction to Computing (equivalent)",
          "Data Structures",
        ],
      },
    ],
  },
  {
    title: "Skills",
    entries: [
      {
        title: "Programming Languages:",
        points: ["Java", "C++", "C#", "HTML", "CSS", "Python"],
      },
      {
        title: "Software Tools:",
        points: ["Visual Studio Code", "Git", "REST API", "JSON", "Firebase"],
      },
    ],
  },
  {
    title: "Projects:",
    entries: [
      {
        title: "FRC Reefscape Robot Software",
        category: "Robotics Team Project",
        subtitles: [
          "Languages and Tools Utilized:",
          "Java, WPILib, Phoenix API, Limelight, PathPlanner, AdvantageKit",
        ],
        points: [
          "Full-stack robot control application for a robot that plays the FRC 2025 game, Reefscape",
          "Controls motors with PID algorithms running on data from encoders and cameras",
          "Autonomous functionality in gameplay using position localization with computer vision pipelines",
          "Realtime and post-match data logging for easy debugging",
        ],
      },
      {
        title: "FRC Scouting App",
        category: "Robotics Team Project",
        subtitles: [
          "Languages and Tools Utilized:",
          "JavaScript, React, Firebase, JSON",
        ],
        points: [
          "Mobile-intended web application for evaluating robots at competition",
          "Custom React-based widgets",
          "Clean and simple UI for ease-of-use at competition",
          "Data storage in JSON-like structure in Firebase",
        ],
      },
      {
        title: "PatriDashboard",
        category: "Robotics Team Project",
        subtitles: [
          "Languages and Tools Utilized:",
          "TypeScript, React, Electron, NetworkTables",
        ],
        points: [
          "Custom React-based web dashboard made for tuning constants in robot software",
          "Updating values in dashboard updates constants in running robot program",
          "Dashboard connects to the same network as the robot using NetworkTables 4 protocol",
          "Makes it extremely easy to tune constants",
        ],
      },
      {
        title: "PHHS Study",
        category: "Computer Science Club Project",
        subtitles: [
          "Languages and Tools Utilized:",
          "JavaScript, React, Firebase",
        ],
        points: [
          "Flashcard website specialized for courses at our own high school",
          "Flashcard decks, users, and user progress on flashcard decks stored in Firebase",
          "Users authenticated with Firebase",
          "Clean frontend UI for simplicity",
        ],
      },
    ],
  },
  {
    title: "Experience",
    entries: [
      {
        title: "Robotics Team Programmer & Driver",
        points: [
          "Wrote majority of robot code in 2025 season and contributed significantly in 2024 season",
          "Motor controls, sensor data handling, subsystem programming, driver control programming and autonomous control programming",
          "Frontend for internal robot evaluation apps",
          "Drove robot at competitions including world championship in 2025 season",
        ],
      },
      {
        title: "Computer Science Club Member",
        points: [
          "Worked on flashcard website",
          "Participated in programming competitions",
        ],
      },
    ],
  },
];

export default sections;
