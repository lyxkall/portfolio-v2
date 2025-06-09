// components/Experience.tsx
import InfiniteScrollWrapper from "./AnimateExperience";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Internship at PT. Pembangkitan Jawa Bali Masdar Solar Energi",
    period: "Okt 2024 – Des 2024 • 3 months",
    description: "Internship Assist Staff, CSR, Maintenance, Warehouse Management",
  },
  {
    role: "Design for cover book at SMKN1 Cipeuendeuy",
    period: "Mei 2021 – Des 2021 • 3 months",
    description: "Designed book covers for school publications and events",
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="w-full mb-16 relative"
    >
      <h3 className="font-mono text-2xl font-bold text-black dark:text-white mb-8">Experience</h3>

      <InfiniteScrollWrapper speed={40} direction="right">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[33rem] snap-start bg-zinc-200 dark:bg-zinc-800 border-blue-400/30 rounded-lg p-6"
                >
            <div className="mb-2 overflow-hidden text-ellipsis">
              <h4 className="text-black dark:text-white font-medium text-sm sm:text-base whitespace-normal break-words">
                {exp.role}
              </h4>
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-1 whitespace-nowrap">{exp.period}</div>
            {exp.description && (
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-normal break-words">
                {exp.description}
              </p>
            )}
          </motion.div>
        ))}
      </InfiniteScrollWrapper>
    </motion.div>
  );
}
