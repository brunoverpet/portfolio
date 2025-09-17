import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

// ==============================================
// MODIFICATION DE VOTRE COMPOSANT TypingText
// ==============================================

export default function TypingText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTyping(true)
        } else {
          setIsTyping(false)
          setDisplayedText('')
          setIndex(0)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isTyping) return
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, 100) // Légèrement plus rapide
      return () => clearTimeout(timeout)
    }
  }, [index, isTyping, text])

  return (
    <motion.h2
      ref={ref}
      className="text-center font-bold xl:text-3xl"
      style={{ minHeight: '2.5rem' }}
      // AJOUT : Animation d'apparition du conteneur
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* MODIFICATION : Chaque lettre apparaît avec une micro-animation */}
      {displayedText.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      {/* MODIFICATION : Curseur avec animation plus fluide */}
      {isTyping && index < text.length && (
        <motion.span
          className="ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </motion.h2>
  )
}
