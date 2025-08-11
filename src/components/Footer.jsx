import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-retro-light-brown dark:bg-retro-dark-brown border-t-4 border-gray-800 dark:border-gray-200">
      <div className="max-w-7xl mx-auto mobile-px py-8 sm:py-12">
        <div className="retro-window">
          <div className="retro-title-bar">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 border border-gray-800"></div>
              <div className="w-3 h-3 bg-yellow-500 border border-gray-800"></div>
              <div className="w-3 h-3 bg-green-500 border border-gray-800"></div>
            </div>
            <span className="font-pixel text-xs">Footer_Info.sys</span>
            <div className="w-6"></div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Quick Info */}
              <div>
                <h3 className="font-pixel mobile-text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
                  Hritabrata Das
                </h3>
                <p className="font-retro mobile-text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  Full-Stack Developer passionate about creating innovative solutions with modern technologies.
                </p>
                <div className="flex items-center space-x-2 mobile-text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-retro">📍 Punjab, India</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-pixel mobile-text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'].map((link) => (
                    <li key={link}>
                      <motion.button
                        onClick={() => {
                          const element = document.querySelector(`#${link.toLowerCase()}`)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                        whileHover={{ x: 4 }}
                        className="font-retro mobile-text-sm text-gray-600 dark:text-gray-400 hover:text-retro-muted-blue dark:hover:text-retro-dark-blue transition-colors"
                      >
                        {link}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Social */}
              <div>
                <h3 className="font-pixel mobile-text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
                  Connect
                </h3>
                <div className="space-y-3">
                  <motion.a
                    href="mailto:hritabratadas8@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 font-retro mobile-text-sm text-gray-600 dark:text-gray-400 hover:text-retro-muted-blue dark:hover:text-retro-dark-blue transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>hritabratadas8@gmail.com</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/Hrick-08"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 font-retro mobile-text-sm text-gray-600 dark:text-gray-400 hover:text-retro-muted-blue dark:hover:text-retro-dark-blue transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com/in/hritabrata-das-913460326/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 font-retro mobile-text-sm text-gray-600 dark:text-gray-400 hover:text-retro-muted-blue dark:hover:text-retro-dark-blue transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-gray-800 dark:border-gray-200 my-6 sm:my-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="font-retro mobile-text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
                © {currentYear} Hritabrata Das. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-2 font-retro mobile-text-sm text-gray-600 dark:text-gray-400">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500" />
                </motion.div>
                <span>using React & Vite</span>
              </div>
            </div>

            {/* Tech Stack Badge */}
            <div className="mt-6 text-center">
              <div className="mobile-badge-group justify-center">
                {['React', 'Vite', 'TailwindCSS', 'Framer Motion'].map((tech) => (
                  <span
                    key={tech}
                    className="retro-badge text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
