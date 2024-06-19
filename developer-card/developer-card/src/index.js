import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { name: "HTML", level: "intermediate", color: "#2662EA" },
  { name: "CSS", level: "beginner", color: "#EFD81D" },
  { name: "JavaScript", level: "advanced", color: "#C3DCAF" },
  { name: "React", level: "advanced", color: "#E84F33" },
  { name: "Java", level: "intermediate", color: "#60DAFB" },
  { name: "Git and Github", level: "intermediate", color: "limegreen" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="me.jpg" alt="Avatar" className="avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1 className="h1">Marwan Mohamed</h1>
      <p className="body">
        Front-end developer and student at the German University in Cairo. When
        not coding or studying, I enjoy playing video games, watching Netflix
        shows, or training at the gym.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.name}</span>
      <span>
        {skill.level === "advanced"
          ? "🔥"
          : skill.level === "intermediate"
          ? "👍"
          : "👶"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
