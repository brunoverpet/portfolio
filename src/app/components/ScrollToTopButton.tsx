'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 50) // bouton visible après 200px de scroll
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll 😍
    })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed z-50 bottom-6 right-6 p-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-all duration-300"
        aria-label="Remonter en haut"
      >
        <ArrowUp size={24} />
      </button>
    )
  )
}
