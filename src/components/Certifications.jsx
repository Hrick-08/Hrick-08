import { motion } from 'framer-motion'
import { Award, ExternalLink, Building2, GraduationCap } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft AI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      link: "https://www.credly.com/badges/6455ba0b-6457-48ab-b33a-7490785ca1cb/linked_in_profile",
      icon: <Building2 className="w-6 h-6" />,
      description: "Fundamental knowledge of AI concepts and Microsoft AI services"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      link: "https://www.credly.com/badges/da97194b-1180-465d-bd80-0f6759628284/linked_in_profile",
      icon: <Building2 className="w-6 h-6" />,
      description: "Core Azure services, security, privacy, compliance, and trust"
    },
    {
      title: "Design Thinking Specialization",
      issuer: "University of Virginia",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/TS4012GW0MI3",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Complete specialization in design thinking methodology and innovation"
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Microsoft",
      date: "2024",
      link: "https://www.credly.com/badges/cd3d17b0-0436-4814-9b3d-81a001e661e3/linked_in_profile",
      icon: <Building2 className="w-6 h-6" />,
      description: "Basic cybersecurity concepts and Microsoft security solutions"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-retro-light-brown/20 dark:bg-retro-dark-brown/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-4xl md:text-5xl text-gray-800 dark:text-gray-200 mb-4 text-shadow">
            Certifications
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
            <span className="font-pixel text-xs">Certifications_Collection.cert</span>
            <div className="w-6"></div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="retro-card"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-retro-muted-blue dark:bg-retro-dark-blue border-3 border-gray-800 dark:border-gray-200">
                        {cert.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-pixel text-lg text-gray-800 dark:text-gray-200">
                          {cert.title}
                        </h3>
                        <motion.a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-1 bg-retro-dusty-pink dark:bg-retro-dark-pink border-2 border-gray-800 dark:border-gray-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4 text-retro-muted-blue dark:text-retro-dark-blue" />
                          <span className="font-retro text-sm text-gray-600 dark:text-gray-400">
                            {cert.issuer}
                          </span>
                        </div>
                        <span className="font-retro text-sm text-gray-600 dark:text-gray-400">
                          {cert.date}
                        </span>
                      </div>
                      
                      <p className="font-retro text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certification Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="retro-card text-center">
                  <div className="font-pixel text-3xl text-gray-800 dark:text-gray-200 mb-2">
                    {certifications.length}
                  </div>
                  <div className="font-retro text-sm text-gray-600 dark:text-gray-400">
                    Total Certifications
                  </div>
                </div>
                <div className="retro-card text-center">
                  <div className="font-pixel text-3xl text-gray-800 dark:text-gray-200 mb-2">
                    3
                  </div>
                  <div className="font-retro text-sm text-gray-600 dark:text-gray-400">
                    Microsoft Certifications
                  </div>
                </div>
                <div className="retro-card text-center">
                  <div className="font-pixel text-3xl text-gray-800 dark:text-gray-200 mb-2">
                    1
                  </div>
                  <div className="font-retro text-sm text-gray-600 dark:text-gray-400">
                    University Specialization
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Continuous Learning Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="retro-speech-bubble max-w-2xl mx-auto">
                <h3 className="font-pixel text-lg text-gray-800 dark:text-gray-200 mb-3">
                  Continuous Learning Journey
                </h3>
                <p className="font-retro text-sm text-gray-600 dark:text-gray-400 mb-4">
                  I'm constantly expanding my knowledge through certifications and courses. 
                  Currently focusing on advanced AI/ML concepts and cloud architecture.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="retro-badge">
                    <span className="font-pixel text-xs">AI/ML</span>
                  </div>
                  <div className="retro-badge">
                    <span className="font-pixel text-xs">Cloud</span>
                  </div>
                  <div className="retro-badge">
                    <span className="font-pixel text-xs">Security</span>
                  </div>
                  <div className="retro-badge">
                    <span className="font-pixel text-xs">Design</span>
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

export default Certifications
