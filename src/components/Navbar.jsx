import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    console.log('Attempting to scroll to:', href) // Debug log
    
    // Close mobile menu immediately
    setIsOpen(false)
    
    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      const element = document.querySelector(href)
      if (element) {
        console.log('Element found, scrolling to:', element) // Debug log
        // Add offset for fixed navbar
        const navbarHeight = 64 // h-16 = 64px
        const elementPosition = element.offsetTop - navbarHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      } else {
        console.log('Element not found for:', href) // Debug log
        // Fallback: try to find by section ID without #
        const fallbackElement = document.querySelector(href.substring(1))
        if (fallbackElement) {
          console.log('Fallback element found, scrolling to:', fallbackElement) // Debug log
          const navbarHeight = 64
          const elementPosition = fallbackElement.offsetTop - navbarHeight
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        } else {
          console.log('No element found for:', href) // Debug log
        }
      }
    })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-retro-cream/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto mobile-px">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="font-pixel mobile-text-base sm:text-lg text-gray-800 hover:text-retro-muted-blue transition-colors"
            >
              {'<Hrick/>'}
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="font-retro text-sm text-gray-800 hover:text-retro-muted-blue px-3 py-2 transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="retro-button p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-retro-cream/95 backdrop-blur-sm border-t-4 border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="mobile-nav-item"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
