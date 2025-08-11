import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Crect width='4' height='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="retro-window max-w-4xl mx-auto"
        >
          <div className="retro-title-bar">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 border border-gray-800"></div>
              <div className="w-3 h-3 bg-yellow-500 border border-gray-800"></div>
              <div className="w-3 h-3 bg-green-500 border border-gray-800"></div>
            </div>
            <span className="font-pixel text-xs">Hritabrata Das - Portfolio.exe</span>
            <div className="w-6"></div>
          </div>

          <div className="p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="font-pixel text-3xl md:text-5xl lg:text-6xl text-gray-800 mb-4 text-shadow">
                Hritabrata Das
              </h1>
              <p className="font-retro text-xl md:text-2xl text-retro-muted-blue mb-6">
                Full-Stack Developer | AI & ML Enthusiast
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8"
            >
              <p className="font-retro text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Passionate about building practical tech projects using Python, FastAPI, Django, MERN, and Next.js. 
                I enjoy working on AI, cloud computing, and solving real-world problems with code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <div className="flex items-center space-x-2 retro-badge">
                <Mail className="w-4 h-4" />
                <span className="font-retro">hritabratadas8@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 retro-badge">
                <Phone className="w-4 h-4" />
                <span className="font-retro">+91-9382058536</span>
              </div>
              <div className="flex items-center space-x-2 retro-badge">
                <span className="font-retro">📍 Punjab, India</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="flex justify-center space-x-4">
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

              {/* Scroll Indicator moved below buttons */}
              <motion.button
                onClick={scrollToAbout}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="retro-button p-2"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
