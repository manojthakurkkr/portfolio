'use client'

import { motion } from 'framer-motion'
import { FaCode, FaServer, FaCloud, FaRocket } from 'react-icons/fa'

const features = [
  {
    icon: FaCode,
    title: 'Full Stack Development',
    description: 'Building end-to-end solutions with modern frameworks and technologies',
    gradient: 'from-primary-500 to-primary-700',
  },
  {
    icon: FaServer,
    title: 'Backend Architecture',
    description: 'Designing scalable and efficient server-side systems',
    gradient: 'from-accent-500 to-accent-700',
  },
  {
    icon: FaCloud,
    title: 'Cloud Infrastructure',
    description: 'Deploying and managing applications on cloud platforms',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaRocket,
    title: 'DevOps Automation',
    description: 'Streamlining deployment and operations with CI/CD pipelines',
    gradient: 'from-cyan-500 to-blue-500',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
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
            About Me
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span>Building Digital</span>
            <span className="md:ml-3 text-white">Experiences</span>
          </h2>
          <div className="w-32 h-1 bg-navbar from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Hello, I'm a{' '}
                <span className='text-color'>Full Stack Developer</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                With a passion for creating innovative web applications and optimizing
                development workflows, I bring together expertise in both software development
                and DevOps practices to deliver exceptional results.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in building scalable, high-performance applications using modern
                technologies while ensuring seamless deployment and infrastructure management.
                My holistic approach allows me to understand the entire software development
                lifecycle, from concept to deployment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6 group cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Design and develop full-stack web applications',
              'Implement CI/CD pipelines and automate deployments',
              'Build and manage cloud infrastructure',
              'Optimize application performance and scalability',
              'Architect microservices and distributed systems',
              'Implement monitoring and logging solutions',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="w-6 h-6 rounded-full bg-navbar from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-300 text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}