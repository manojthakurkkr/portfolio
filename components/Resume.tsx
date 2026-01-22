"use client";

import { motion } from "framer-motion";
import {
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaCalendarAlt,
} from "react-icons/fa";

const experience = [
  {
    title: "Sr. Software Engineer (Web)",
    company: "Northcap Services Pvt Ltd",
    period: "August 2023 - October 2024",
    location: "Gurugram, Haryana",
    responsibilities: [
      "Managed client communications to gather project requirements and specifications",
      "Enhanced code efficiency and optimized queries to improve project performance",
    ],
  },
  {
    title: "Software Engineer (Web)",
    company: "Zeal Soft Systems Pvt Ltd",
    period: "March 2021 - March 2023",
    location: "Mohali, Punjab",
    responsibilities: [
      "Analyzed and developed front-end systems utilizing server-side technologies",
      "Optimized existing code to enhance response time and overall performance",
    ],
  },
  {
    title: "PHP Developer",
    company: "Stackance Pvt Ltd",
    period: "March 2018 - February 2021",
    location: "Chandigarh",
    responsibilities: [
      "Developed and maintained new and existing websites and web applications",
      "Ensured optimal functionality and performance across projects",
    ],
  },
  {
    title: "PHP Developer",
    company: "Rexweb Solutions",
    period: "August 2015 - February 2018",
    location: "Mohali, Punjab",
    responsibilities: [
      "Interpreted client requirements and defined functional specifications",
      "Led client meetings to clarify expectations and managed a development team to meet goals",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications",
    school: "IK Gujral Punjab Technical University",
    period: "2021 - 2023",
    description: "Specialized in Software Engineering and Distributed Systems",
  },
];

const certifications = [
  "AWS Certified Solutions Architect - Professional",
  "Certified Kubernetes Administrator (CKA)",
  "Docker Certified Associate",
  "Terraform Associate Certification",
];

export default function Resume() {
  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-color text-sm font-semibold mb-4"
          >
            Resume
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span>Work Experience & Education</span>
          </h2>
          <div className="w-32 h-1 bg-navbar from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgb(224,17,149)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-navbar from-primary-500 to-accent-500 text-white rounded-xl font-semibold text-lg shadow-2xl  transition-all"
          >
            <FaDownload className="mr-2" />
            Download Resume (PDF)
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-navbar from-primary-500 to-accent-500 flex items-center justify-center mr-4">
                <FaBriefcase className="text-white text-xl" />
              </div>
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-2xl p-6 relative pl-12 border-l-4 border-transparent hover:rgb(224,17,149) transition-all hover:shadow-2xl group"
              >
                <div className="absolute left-0 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-navbar from-primary-500 to-accent-500 group-hover:scale-150 transition-transform"></div>
                <div className="flex flex-wrap items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[rgb(224,17,149)] transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-[rgb(224,17,149)] font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{exp.period}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="text-gray-300 flex items-start"
                    >
                      <span className="text-[rgb(224,17,149)] mr-3 mt-1.5">
                        ▹
                      </span>
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="glass-strong rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-navbar from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4"
                >
                  <h4 className="text-lg font-bold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-color font-semibold mb-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-2 flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {edu.period}
                  </p>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications
            <div className="glass-strong rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-navbar from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                  <FaCertificate className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certification</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 flex items-start group cursor-pointer"
                  >
                    <span className="text-color mr-3 mt-1 group-hover:scale-150 transition-transform">
                      ✓
                    </span>
                    <span className="group-hover:text-white transition-colors">
                      {cert}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
