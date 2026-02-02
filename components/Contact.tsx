'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, text: 'Manoj Kumar', link: 'mailto:manojthakurkkr@gmail.com', color: 'text-pink-400' },
    { icon: FaPhone, text: '+91 9802222667', link: 'tel:+919802222667', color: 'text-cyan-400' },
    { icon: FaMapMarkerAlt, text: '#2419/6 Jyoti Nagar Kurukshetra, Haryana India', link: null, color: 'text-purple-400' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/manojthakurkkr/', label: 'LinkedIn', gradient: 'from-blue-500 to-blue-600' },
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub', gradient: 'from-gray-600 to-gray-700' },
    { icon: FaEnvelope, url: 'mailto:manojthakurkkr@gmail.com', label: 'Email', gradient: 'from-pink-500 to-rose-500' },
  ]

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
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
            Get In Touch
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span>Let's Work Together</span>
          </h2>
          <div className="w-32 h-1 bg-navbar from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-strong rounded-3xl p-6 h-full w-full max-w-full flex flex-col">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6 mb-8 flex-1">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start group cursor-pointer min-w-0"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-navbar from-primary-500 to-accent-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <Icon className={`text-white text-xl`} />
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg text-gray-300 hover:text-white transition-colors break-words min-w-0"
                        >
                          {info.text}
                        </a>
                      ) : (
                        <span className="text-lg text-gray-300 break-words min-w-0">{info.text}</span>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              <div className="border-t border-white/10 pt-8">
                <h4 className="text-xl font-bold text-white mb-4">Connect with me</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target={social.label !== 'Email' ? '_blank' : undefined}
                        rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.15, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-14 h-14 rounded-xl bg-navbar flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all`}
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-gray-500  focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-gray-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-gray-500  focus:border-transparent outline-none transition-all"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-gray-500  outline-none transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                        : 'bg-red-500/20 border border-red-500/50 text-red-400'
                    }`}
                  >
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgb(224,17,149)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-navbar to-accent-500 text-white rounded-xl font-semibold text-lg shadow-2xl shadow-[0_10px_30px_-5px_rgba(224,17,149,0.2)] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}