import { motion } from 'framer-motion'
import { User, Code, Brain, Cloud } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building complete web applications with modern technologies"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML Enthusiast",
      description: "Exploring machine learning and artificial intelligence applications"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing",
      description: "Deploying and managing applications on cloud platforms"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Creating practical solutions for real-world challenges"
    }
  ]

  return (
    <section id="about" className="mobile-py bg-retro-light-brown/20 dark:bg-retro-dark-brown/20">
      <div className="max-w-7xl mx-auto mobile-px">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mobile-mb"
        >
          <h2 className="font-pixel mobile-text-4xl sm:text-5xl text-gray-800 dark:text-gray-200 mb-4 text-shadow">
            About Me
          </h2>
          <div className="w-24 h-1 bg-retro-muted-blue dark:bg-retro-dark-blue mx-auto border-2 border-gray-800 dark:border-gray-200"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="retro-window"
          >
            <div className="retro-title-bar">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 border border-gray-800"></div>
                <div className="w-3 h-3 bg-yellow-500 border border-gray-800"></div>
                <div className="w-3 h-3 bg-green-500 border border-gray-800"></div>
              </div>
              <span className="font-pixel text-xs">About_Hritabrata.txt</span>
              <div className="w-6"></div>
            </div>

            <div className="p-4 sm:p-6">
              <p className="font-retro mobile-text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                I'm a CSE (AI & ML) student at Chitkara University passionate about building practical tech projects 
                using Python, FastAPI, Django, MERN, and Next.js. I enjoy working on AI, cloud computing, and solving 
                real-world problems with code.
              </p>
              
              <p className="font-retro mobile-text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                I've developed competitive programming platforms, blogging systems, and productivity tools while 
                constantly improving my technical and problem-solving skills. My goal is to create innovative 
                solutions that make a difference in people's lives.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="retro-badge text-center">
                  <div className="font-pixel mobile-text-sm">Projects</div>
                  <div className="font-retro mobile-text-lg">10+</div>
                </div>
                <div className="retro-badge text-center">
                  <div className="font-pixel mobile-text-sm">Technologies</div>
                  <div className="font-retro mobile-text-lg">15+</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="retro-card text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-retro-muted-blue dark:bg-retro-dark-blue border-3 border-gray-800 dark:border-gray-200">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-pixel mobile-text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-2">
                  {feature.title}
                </h3>
                <p className="font-retro mobile-text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="retro-window">
            <div className="retro-title-bar">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 border border-gray-800"></div>
                <div className="w-3 h-3 bg-yellow-500 border border-gray-800"></div>
                <div className="w-3 h-3 bg-green-500 border border-gray-800"></div>
              </div>
              <span className="font-pixel text-xs">Achievements.log</span>
              <div className="w-6"></div>
            </div>

            <div className="p-4 sm:p-6">
              <h3 className="font-pixel mobile-text-xl sm:text-2xl text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 text-center">
                Achievements & Recognition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="retro-speech-bubble">
                  <p className="font-retro mobile-text-base sm:text-lg">
                    🏆 Won multiple intra-college technical and non-technical events
                  </p>
                </div>
                <div className="retro-speech-bubble">
                  <p className="font-retro mobile-text-base sm:text-lg">
                    🎯 Actively participated in coding contests, debates, and cultural programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
