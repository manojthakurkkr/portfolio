'use client'

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaServer,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiRedis,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'React', icon: FaReact, level: 90, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, level: 85, color: 'text-gray-300' },
      { name: 'TypeScript', icon: SiTypescript, level: 88, color: 'text-blue-400' },
      { name: 'JavaScript', icon: SiJavascript, level: 90, color: 'text-yellow-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: 'text-cyan-300' },
    ],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 88, color: 'text-green-400' },
      { name: 'Express.js', icon: SiExpress, level: 85, color: 'text-gray-300' },
      { name: 'Python', icon: FaPython, level: 82, color: 'text-yellow-400' },
      { name: 'REST APIs', icon: FaServer, level: 90, color: 'text-purple-400' },
      { name: 'GraphQL', icon: FaServer, level: 80, color: 'text-pink-400' },
    ],
  },
  {
    title: 'Database & Caching',
    icon: '💾',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 85, color: 'text-green-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 88, color: 'text-blue-400' },
      { name: 'Redis', icon: SiRedis, level: 80, color: 'text-red-400' },
      { name: 'Database Design', icon: FaDatabase, level: 85, color: 'text-blue-300' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Docker', icon: FaDocker, level: 88, color: 'text-blue-400' },
      { name: 'Kubernetes', icon: SiKubernetes, level: 80, color: 'text-blue-500' },
      { name: 'AWS', icon: FaAws, level: 85, color: 'text-orange-400' },
      { name: 'Terraform', icon: SiTerraform, level: 82, color: 'text-purple-400' },
      { name: 'Jenkins', icon: SiJenkins, level: 78, color: 'text-blue-300' },
      { name: 'GitHub Actions', icon: SiGithubactions, level: 85, color: 'text-gray-300' },
      { name: 'Git', icon: FaGitAlt, level: 90, color: 'text-orange-500' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-color text-sm font-semibold mb-4">
            Skills & Technologies
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span>Technical</span>
            <span className="md:ml-3 text-white">Expertise</span>
          </h2>
          <div className="w-32 h-1 bg-navbar from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <div className="w-32 h-1 bg-skills from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for full-stack development and DevOps
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-strong rounded-3xl p-8 hover:shadow-2xl hover:shadow-[0_10px_30px_-5px_rgba(224,17,149,0.2)] transition-all group"
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-3xl mr-4 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/60 border border-white/10 text-sm text-gray-100"
                    >
                      <Icon className={`${skill.color} text-lg`} />
                      <span>{skill.name}</span>
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}