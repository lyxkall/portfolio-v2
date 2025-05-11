// components/Experience.jsx
import { motion } from "framer-motion"

const experiences = [
  {
    role: "Frontend Developer",
    company: "PT. Pembangkitan Jawa Bali Masdar Solar Energi",
    period: "Okt 2024 – Des 2024",
    description:
      "Internship yang bertugas membantu Staff, CSR, Maintenace, Gudang Manajement",
  },
  {
    role: "UI/UX Designer",
    company: "CV Desain Kreatif",
    period: "Mei 2021 – Des 2021",
    description:
      "Mendesain wireframe dan prototipe untuk aplikasi mobile dan website.",
  },
  // Tambahkan pengalaman lainnya di sini
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 flex w-full items-center justify-center bg-white"
    >
      <div className="mx-auto w-[90%] max-w-[1212px]">
        <motion.p6
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[40px] font-bold leading-tight tracking-tight sm:text-[48px] md:text-[60px] lg:text-[72px] text-blue-600 mb-12"
        >
          Experience 
        </motion.p6>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-blue-500">
                {exp.role}
              </h3>
              <p className="text-gray-800 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 italic">{exp.period}</p>
              <p className="mt-3 text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
