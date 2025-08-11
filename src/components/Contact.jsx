import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent! (This is a demo - no actual email will be sent)')
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hritabratadas8@gmail.com",
      link: "mailto:hritabratadas8@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-9382058536",
      link: "tel:+919382058536"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Punjab, India",
      link: null
    }
  ]

  return (
    <section id="contact" className="mobile-py">
      <div className="max-w-7xl mx-auto mobile-px">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mobile-mb"
        >
          <h2 className="font-pixel mobile-text-4xl sm:text-5xl text-gray-800 dark:text-gray-200 mb-4 text-shadow">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-retro-muted-blue dark:bg-retro-dark-blue mx-auto border-2 border-gray-800 dark:border-gray-200"></div>
        </motion.div>

        <div className="mobile-form-grid">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="retro-window">
              <div className="retro-title-bar">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 border border-gray-800"></div>
                  <div className="w-3 h-3 bg-yellow-500 border border-gray-800"></div>
                  <div className="w-3 h-3 bg-green-500 border border-gray-800"></div>
                </div>
                <span className="font-pixel text-xs">Contact_Info.txt</span>
                <div className="w-6"></div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="font-pixel mobile-text-xl sm:text-2xl text-gray-800 dark:text-gray-200 mb-4 sm:mb-6">
                  Let's Connect!
                </h3>
                
                <p className="font-retro mobile-text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                  I'm always interested in new opportunities, collaborations, or just a friendly chat about technology. 
                  Feel free to reach out through any of the channels below.
                </p>

                <div className="mobile-contact-info">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="p-2 bg-retro-muted-blue dark:bg-retro-dark-blue border-3 border-gray-800 dark:border-gray-200">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-pixel mobile-text-sm text-gray-800 dark:text-gray-200">
                          {info.label}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-retro mobile-text-sm text-retro-muted-blue dark:text-retro-dark-blue hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-retro mobile-text-sm text-gray-600 dark:text-gray-400">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 sm:mt-8">
                  <h4 className="font-pixel mobile-text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-4">
                    Follow Me
                  </h4>
                  <div className="mobile-button-group">
                    <motion.a
                      href="https://github.com/Hrick-08"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="retro-button flex items-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/hritabrata-das-913460326/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="retro-button-secondary flex items-center space-x-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="retro-window">
              <div className="retro-title-bar">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 border border-gray-800"></div>
                  <div className="w-3 h-3 bg-yellow-500 border border-gray-800"></div>
                  <div className="w-3 h-3 bg-green-500 border border-gray-800"></div>
                </div>
                <span className="font-pixel text-xs">Contact_Form.exe</span>
                <div className="w-6"></div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="font-pixel mobile-text-xl sm:text-2xl text-gray-800 dark:text-gray-200 mb-4 sm:mb-6">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-pixel mobile-text-sm text-gray-800 dark:text-gray-200 mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="retro-input w-full"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="font-pixel mobile-text-sm text-gray-800 dark:text-gray-200 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="retro-input w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="font-pixel mobile-text-sm text-gray-800 dark:text-gray-200 mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="retro-input w-full"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="font-pixel mobile-text-sm text-gray-800 dark:text-gray-200 mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="retro-input w-full resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="retro-button w-full flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Response Time Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="retro-speech-bubble max-w-md mx-auto">
            <p className="font-retro mobile-text-lg text-gray-800 dark:text-gray-200">
              💬 I typically respond within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
