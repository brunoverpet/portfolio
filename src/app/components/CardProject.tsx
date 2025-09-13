'use client'

import { Github, SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import { useIsMobile } from '@/app/components/IsMobile'

interface CardProjectInterface {
  name: string
  take: string
  src: string
  version: string
  date: string
  projectLink: string
  githubLink: string
}

export default function CardProject({
  name,
  take,
  version,
  date,
  src,
  projectLink,
  githubLink,
}: CardProjectInterface) {
  const isMobile = useIsMobile()

  return (
    <div className="">
      <div>
        <h3 className="xl:text-5xl">{name}</h3>
        <span className="font-light xl:text-xl">{take}</span>
      </div>
      <video
        className={`w-full aspect-video ${isMobile ? 'max-w-[350px]' : ''} mx-auto`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>

      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-x-3">
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Lien externe vers le projet Github"
            aria-label="Lien externe vers le projet Github"
          >
            <div className="flex gap-x-1 text-xl items-center">
              <SquareArrowOutUpRight strokeWidth="1" size="40" />
              <span className="hidden xl:block">Voir le code</span>
            </div>
          </Link>

          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Tester le projet en version DEMO"
            aria-label="Tester le projet en version DEMO"
          >
            <div className="flex gap-x-1 text-xl items-center">
              <Github color="#1D1D1F" strokeWidth="1" size={40} />
              <span className="hidden xl:block">Tester le projet</span>
            </div>
          </Link>
        </div>
        <span className="text-right xl:text-2xl">
          {version} - {date}
        </span>
      </div>
    </div>
  )
}
