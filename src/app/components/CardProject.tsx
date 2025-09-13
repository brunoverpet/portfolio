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
  const widthToApply = isMobile ? '350' : '1381'
  const heightToApply = isMobile ? '197' : '777'

  return (
    <div className="">
      <div>
        <h3 className="">{name}</h3>
        <span className="font-light">{take}</span>
      </div>
      <video width={widthToApply} height={heightToApply} autoPlay muted loop playsInline>
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
            <Github color="#1D1D1F" strokeWidth="1" size="40" />
          </Link>

          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Tester le projet en version DEMO"
            aria-label="Tester le projet en version DEMO"
          >
            <SquareArrowOutUpRight strokeWidth="1" size="40" />
          </Link>
        </div>
        <span className="text-right">
          {version} - {date}
        </span>
      </div>
    </div>
  )
}
