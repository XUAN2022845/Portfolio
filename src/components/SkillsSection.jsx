import { useState } from "react";
import { cn } from "@/lib/utils";

export const SkillsSection = () => {
  const [activeSection, setActiveSection] = useState("Programming Languages");

  const skills = {
    "Programming Languages": [
      { name: "Python", level: 70 },
      { name: "Java", level: 85 },
      { name: "C++", level: 70 },
    ],
    frontend: [
      { name: "HTML/CSS", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 75 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
    ],
    tools: [
      { name: "Git/GitHub", level: 80 },
      { name: "VS Code", level: 85 },

    ],
  };

  const categories = ["Programming Languages", "frontend", "backend", "tools"];

  return (
    <section
      id="skills"
      className="py-24 px-4 flex flex-col items-center justify-center bg-secondary/30 min-h-screen"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* 🔘 Switch Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveSection(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm md:text-base",
                activeSection === category
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 🧠 Active Table */}
        <div className="w-full flex justify-center">
          <SkillTable
            title={formatTitle(activeSection)}
            skills={skills[activeSection]}
          />
        </div>
      </div>
    </section>
  );
};

// 🧩 Helper Function to Format Titles
const formatTitle = (key) => {
  switch (key) {
    case "Programming Languages":
      return "Programming Languages";
    case "frontend":
      return "Frontend";
    case "backend":
      return "Backend";
    case "tools":
      return "Tools";
    default:
      return "";
  }
};

// 🪄 Skill Table Component
const SkillTable = ({ title, skills }) => (
  <div className="bg-card rounded-lg shadow p-6 w-full sm:w-[90%] md:w-[80%] transition-all duration-500">
    <h3 className="text-2xl font-semibold text-primary mb-4">{title}</h3>
    <table className="w-full border-collapse text-sm sm:text-base">
      <thead>
        <tr className="bg-secondary/40 text-center">
          <th className="p-3 font-medium">Skill</th>
          <th className="p-3 font-medium w-1/3">Level</th>
        </tr>
      </thead>
      <tbody>
        {skills.map((skill, i) => (
          <tr
            key={i}
            className="border-b border-border hover:bg-secondary/20 transition-colors"
          >
            <td className="p-3">{skill.name}</td>
            <td className="p-3">
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.2s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
