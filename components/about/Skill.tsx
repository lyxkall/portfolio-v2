// components/Skill.tsx
import { motion } from "framer-motion";
import { FiCode, FiLayers, FiMonitor, FiSmartphone } from "react-icons/fi";

const skills = [
  {
    category: "Frontend",
    icon: <FiMonitor className="text-whihe-400 text-xl" />,
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS/SCSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    category: "Mobile",
    icon: <FiSmartphone className="text-white-400 text-xl" />,
    items: [
      { name: "React Native", level: 70 },
      { name: "Flutter", level: 65 },
    ],
  },
  {
    category: "Design",
    icon: <FiLayers className="text-white-400 text-xl" />,
    items: [
      { name: "Figma", level: 85 },
      { name: "Canva", level: 75 },
    ],
  },
  {
    category: "Lainnya",
    icon: <FiCode className="text-white-400 text-xl" />,
    items: [
      { name: "Public Speaking", level: 70 },
      { name: "sosialtion", level: 65 },
      { name: "Video Edit", level: 55 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-sm text-gray-300">{name}</span>
        <span className="font-mono text-xs text-white-400">{level}%</span>
      </div>
      <div className="w-full bg-zinc-300/10 rounded-full h-1.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="h-1.5 rounded-full bg-gradient-to-r from-blue-200 to-blue-600"
        />
      </div>
    </div>
  );
};

export default function Skill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="w-full mb-16"
    >
      <h3 className="font-mono text-2xl font-bold text-white-400 mb-8">
        Skills
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-800 border border-blue-400/30 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              {skillCategory.icon}
              <h4 className="font-mono text-white-400">{skillCategory.category}</h4>
            </div>
            {skillCategory.items.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}