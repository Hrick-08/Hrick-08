import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "B.E. in Computer Science & Engineering (AI/ML)",
      institution: "Chitkara University",
      location: "Punjab, India",
      period: "Ongoing",
      status: "current",
      description: "Pursuing Computer Science with specialization in Artificial Intelligence and Machine Learning. Learning advanced concepts in AI, ML, data structures, algorithms, and software engineering."
    },
    {
      degree: "CISCE Curriculum",
      institution: "The G.V.E.A.",
      location: "Balurghat, West Bengal",
      period: "Completed",
      status: "completed",
      description: "Completed secondary education with focus on science and mathematics. Developed strong foundation in problem-solving and analytical thinking."
    }
  ]

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-4xl md:text-5xl text-gray-800 dark:text-gray-200 mb-4 text-shadow">
            Education
          </h2>
          <div className="w-24 h-1 bg-retro-muted-blue dark:bg-retro-dark-blue mx-auto border-2 border-gray-800 dark:border-gray-200"></div>
        </motion.div>

        <div className="retro-window">
          <div className="retro-title-bar">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 border border-gray-800"></div>
              <div className="w-3 h-3 bg-yellow-500 border border-gray-800"></div>
              <div className="w-3 h-3 bg-green-500 border border-gray-800"></div>
            </div>
            <span className="font-pixel text-xs">Education_History.dat</span>
            <div className="w-6"></div>
          </div>

          <div className="p-6">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="retro-card"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-retro-muted-blue dark:bg-retro-dark-blue border-3 border-gray-800 dark:border-gray-200">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-pixel text-lg text-gray-800 dark:text-gray-200">
                          {edu.degree}
                        </h3>
                        <span className={`font-pixel text-xs px-2 py-1 ${
                          edu.status === 'current' 
                            ? 'bg-green-500 text-white border border-gray-800' 
                            : 'bg-retro-light-brown dark:bg-retro-dark-brown border-2 border-gray-800 dark:border-gray-200'
                        }`}>
                          {edu.status === 'current' ? 'ONGOING' : 'COMPLETED'}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4 text-retro-muted-blue dark:text-retro-dark-blue" />
                          <span className="font-retro text-sm text-gray-600 dark:text-gray-400">
                            {edu.institution}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4 text-retro-muted-blue dark:text-retro-dark-blue" />
                          <span className="font-retro text-sm text-gray-600 dark:text-gray-400">
                            {edu.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-retro-muted-blue dark:text-retro-dark-blue" />
                          <span className="font-retro text-sm text-gray-600 dark:text-gray-400">
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      
                      <p className="font-retro text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="retro-speech-bubble">
                <h3 className="font-pixel text-lg text-gray-800 dark:text-gray-200 mb-3">
                  Academic Focus
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-pixel text-sm text-gray-800 dark:text-gray-200 mb-2">
                      Current Studies
                    </h4>
                    <ul className="font-retro text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Artificial Intelligence & Machine Learning</li>
                      <li>• Data Structures & Algorithms</li>
                      <li>• Software Engineering</li>
                      <li>• Database Management Systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-pixel text-sm text-gray-800 dark:text-gray-200 mb-2">
                      Key Achievements
                    </h4>
                    <ul className="font-retro text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Active participation in coding contests</li>
                      <li>• Technical event organization</li>
                      <li>• Academic excellence recognition</li>
                      <li>• Leadership in student activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
