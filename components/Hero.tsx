'use client'

import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Particles from './Particles'
import { Scada } from 'next/font/google'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 px-4 lg:px-8 overflow-hidden"
    >
      <Particles />
      
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? 'visible' : 'hidden'}
      >
        <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 items-center">
          {/* LEFT: text / intro */}
          <div className="text-center lg:text-left space-y-8">
            {/* <motion.div variants={itemVariants}>
              <motion.span
                className="inline-block px-4 py-2 rounded-full glass text-sm font-semibold text-primary-300 mb-2"
                whileHover={{ scale: 1.05 }}
              >
                👋 Welcome to my Portfolio
              </motion.span>
            </motion.div> */}

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              <span >Full Stack Developer</span>
              <span className="block md:inline md:ml-3 text-3xl md:text-4xl lg:text-5xl mt-2 md:mt-0 text-[rgb(224,17,149)]">
                & DevOps Engineer
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              Crafting scalable web applications and robust infrastructure solutions
              <span className="block mt-2 text-[rgb(224,17,149)]">
                with cutting-edge technologies & modern DevOps practices
              </span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgb(224,17,149)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 glass text-white border-2 border-primary-500/50 rounded-xl font-semibold text-lg transition-all hover-glow"
               >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.a>
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 glass text-white border-2 border-primary-500/50 rounded-xl font-semibold text-lg transition-all hover-glow"
              >
                <FaDownload className="mr-2" />
                View Resume
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6 pt-4"
            >
              {[
                { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FaEnvelope, href: 'mailto:manojthakurkkr@gmail.com', label: 'Email' },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== 'Email' ? '_blank' : undefined}
                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white  transition-colors hover-glow cursor-pointer"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          {/* RIGHT: highlight card / stats so the side isn't empty */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-strong rounded-3xl p-6 backdrop-blur-xl border border-white/10 shadow-2xl shadow-[0_10px_30px_-5px_rgba(224,17,149,0.2)]"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[rgb(224,17,149)] mb-4">
                Profile Snapshot
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                Full Stack & DevOps Engineer
              </h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span className="font-semibold text-primary-300 text-color">9+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span>Primary Stack</span>
                  <span className="font-semibold text-primary-300 text-color">Php · React · Node · AWS</span>
                </div>
                <div className="flex justify-between">
                  <span>Focus</span>
                  <span className="font-semibold text-primary-300 text-color">Scalability & CI/CD</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
                  Core Skills
                </p>
                <div className="flex flex-wrap gap-2 ">
                  {['Php','Laravel','React', 'Node.js', 'Docker', 'Kubernetes', 'AWS'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
{/* 
        <div className="mt-10 flex justify-center lg:justify-start">
          <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center space-x-2">
            <FaArrowDown size={20} className="animate-bounce" />
            <span className="text-sm">Scroll to learn more</span>
          </a>
        </div> */}
      </motion.div>
    </section>
  )
}