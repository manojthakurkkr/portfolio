'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa'
import Image from 'next/image';

const projects = [
  {
    title: 'Global Talent Development Platform',
    description:
      'Developed a global platform that enables upskilling, coaching, and mentoring for talent development.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
    github: '#',
    demo: 'https://we-ace.com',
    gradient: 'from-purple-500 to-pink-500',
    icon: FaRocket,
  },
  {
    title: 'Lister Pros',
    description:
      'Web application for managing property photography clients with an admin panel for streamlined operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Tailwind'],
    github: '#',
    demo: 'https://listerpros.com',
    gradient: 'from-cyan-500 to-blue-500',
    icon: FaCode,
  },
  {
    title: 'Skkouting',
    description:
      'Job portal web application to manage job listings, candidates, and employer interactions efficiently.',
    technologies: ['Next.js', 'Express', 'PostgreSQL', 'Redis', 'AWS'],
    github: '#',
    demo: 'https://skkouting.com',
    gradient: 'from-blue-500 to-indigo-500',
    icon: FaRocket,
  },
  {
    title: 'Velocifund',
    description:
      'Web application providing comprehensive financial services to customers with secure workflows.',
    technologies: ['React', 'Node.js', 'MySQL', 'Docker', 'Nginx'],
    github: '#',
    demo: 'https://skkouting.com/',
    gradient: 'from-amber-500 to-red-500',
    icon: FaCode,
  },
  {
    title: 'Lucy',
    description:
      'Fully functional shopping cart website with complete management via a user-friendly admin panel.',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Tailwind'],
    github: '#',
    demo: 'http://lucy.ng',
    image: '/images/lucy.png',
    icon: FaRocket,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-color text-sm font-semibold mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span>Featured</span>
            <span className="md:ml-3 text-white">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-navbar from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Showcasing full-stack development and DevOps expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="glass-strong rounded-3xl overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-[0_10px_30px_-5px_rgba(224,17,149,0.2)] transition-all">
                  {/* Header with gradient */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-black/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative z-10"
                    >
                      {/* <Icon className="text-white text-6xl opacity-80" /> */}
                      <img src={project.image}
          alt={project.title}
          className="object-cover" />
                    </motion.div>
                    <motion.div
                      className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-2xl">{index + 1}</span>
                    </motion.div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[rgb(224,17,149)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 glass text-xs rounded-full text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-4 border-t border-white/10">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-gray-400 hover:text-white transition-colors group/link"
                      >
                        <FaGithub className="mr-2 group-hover/link:rotate-12 transition-transform" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-gray-400 hover:text-white transition-colors group/link"
                      >
                        <FaExternalLinkAlt className="mr-2 group-hover/link:rotate-12 transition-transform" />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}