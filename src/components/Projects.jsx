import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Globe, Database } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "BeatCode",
      subtitle: "Competitive Programming Platform",
      description: "Real-time 1v1 coding battles with algorithmic challenges under time pressure. Features AI-powered post-match code reviews (mock).",
      technologies: ["FastAPI", "Next.js 15", "Judge0 API", "SQLAlchemy", "WebSockets"],
      github: "https://github.com/Hrick-08/BeatCode",
      live: null,
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Writoria",
      subtitle: "Blogging Platform",
      description: "Django-based blogging system with user authentication, likes, comments, bookmarks, categories, and markdown support. Features responsive design with dark/light themes and animated backgrounds.",
      technologies: ["Django", "Python", "HTML/CSS", "JavaScript", "SQLite"],
      github: "https://github.com/Hrick-08/Writoria_Django",
      live: null,
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "ThinkBoard",
      subtitle: "MERN Note-Taking Platform",
      description: "Simple yet functional note-taking app to learn full-stack development. Features CRUD operations, organized notes, and responsive design.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "MERN stack"],
      github: "https://github.com/Hrick-08/mern-thinkboard",
      live: null,
      icon: <Database className="w-8 h-8" />
    }
  ]

  return (
    <section id="projects" className="py-20 bg-retro-light-brown/20 dark:bg-retro-dark-brown/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-4xl md:text-5xl text-gray-800 dark:text-gray-200 mb-4 text-shadow">
            Featured Projects
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
            <span className="font-pixel text-xs">Projects_Collection.exe</span>
            <div className="w-6"></div>
          </div>

          <div className="p-6">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="retro-card group"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-retro-muted-blue dark:bg-retro-dark-blue border-3 border-gray-800 dark:border-gray-200">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="font-pixel text-lg text-gray-800 dark:text-gray-200">
                          {project.title}
                        </h3>
                        <p className="font-retro text-sm text-retro-muted-blue dark:text-retro-dark-blue">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="font-retro text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-pixel text-xs text-gray-800 dark:text-gray-200 mb-2 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="retro-badge text-xs px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="retro-button flex items-center space-x-2 flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-pixel text-xs">GitHub</span>
                    </motion.a>
                    
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="retro-button-secondary flex items-center space-x-2 flex-1 justify-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-pixel text-xs">Live</span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* More Projects CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="retro-speech-bubble max-w-md mx-auto">
                <p className="font-retro text-lg text-gray-800 dark:text-gray-200 mb-4">
                  Want to see more projects?
                </p>
                <motion.a
                  href="https://github.com/Hrick-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="retro-button inline-flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
