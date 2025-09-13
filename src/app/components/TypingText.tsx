import { useEffect, useRef, useState } from 'react'

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
          // Reset pour rejouer l'animation quand on revient
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
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [index, isTyping, text])

  return (
    <h2 ref={ref} className="text-center font-bold xl:text-3xl">
      {displayedText}
      {isTyping && index < text.length && <span className="animate-blink">|</span>}
    </h2>
  )
}
