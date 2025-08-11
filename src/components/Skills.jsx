import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      skills: ["Python", "JavaScript", "C++", "Java", "HTML5", "CSS3"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Frameworks & Libraries",
      skills: ["FastAPI", "Flask", "Django", "React", "Express.js", "TailwindCSS", "Bootstrap", "MERN stack", "REST API development"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Data & AI",
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Azure", "Vercel", "Railway", "Render", "JWT Authentication", "WebSockets", "API Integration", "Responsive UI/UX", "Cloud Deployment"]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-4xl md:text-5xl text-gray-800 dark:text-gray-200 mb-4 text-shadow">
            Skills & Technologies
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
            <span className="font-pixel text-xs">Skills_Database.sys</span>
            <div className="w-6"></div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="retro-card"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-retro-muted-blue dark:bg-retro-dark-blue border-3 border-gray-800 dark:border-gray-200 mr-3">
                      {category.icon}
                    </div>
                    <h3 className="font-pixel text-xl text-gray-800 dark:text-gray-200">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="retro-badge font-retro text-sm"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Level Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="font-pixel text-2xl text-gray-800 dark:text-gray-200 mb-6 text-center">
                Proficiency Levels
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-retro text-sm">Python</span>
                      <span className="font-pixel text-xs">90%</span>
                    </div>
                    <div className="retro-loading-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="retro-loading-segment"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-retro text-sm">JavaScript</span>
                      <span className="font-pixel text-xs">85%</span>
                    </div>
                    <div className="retro-loading-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="retro-loading-segment"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-retro text-sm">React</span>
                      <span className="font-pixel text-xs">80%</span>
                    </div>
                    <div className="retro-loading-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="retro-loading-segment"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-retro text-sm">FastAPI</span>
                      <span className="font-pixel text-xs">85%</span>
                    </div>
                    <div className="retro-loading-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="retro-loading-segment"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-retro text-sm">Django</span>
                      <span className="font-pixel text-xs">75%</span>
                    </div>
                    <div className="retro-loading-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        viewport={{ once: true }}
                        className="retro-loading-segment"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-retro text-sm">Cloud Deployment</span>
                      <span className="font-pixel text-xs">70%</span>
                    </div>
                    <div className="retro-loading-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        transition={{ duration: 1, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="retro-loading-segment"
                      />
                    </div>
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

export default Skills
