import CardProject from '@/app/components/CardProject'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import ScrollToTopButton from '@/app/components/ScrollToTopButton'

export default function Home() {
  return (
    <div className="">
      <ScrollToTopButton />
      <span className="font-light text-sm xl:text-xl">FR / ORL — 2025</span>

      <div className="mt-16 flex justify-center">
        <video
          className="w-[350px] h-[197px] xl:w-[1000px] xl:h-[563px]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/intro.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la balise vidéo.
        </video>
      </div>

      <div className="mt-16 xl:mt-0">
        <h1 className="mb-5 font-sans font-black text-4xl text-center xl:text-9xl">BRUNO VERPET</h1>
        <div className="text-right">
          <span className="block font-light xl:hidden">SWIPE DOWN</span>
          <span className="hidden xl:block font-light xl:text-xl">SCROLL TO CONTINUE</span>
        </div>
      </div>

      <div className="mt-64 mb-52 xl:mt-80">
        <h2 className="text-center font-bold xl:text-3xl">Scène 01 - PROJETS</h2>
        <div className="mt-24 mb-52 xl:mt-80">
          <CardProject
            name="Plan A - Streamly"
            take="Take Final"
            date="Août 2025"
            version="1.0"
            projectLink="https://streamly.codehive.fr/"
            githubLink="https://github.com/brunoverpet/streamly"
            src="/streamly_desktop.mp4"
          />
        </div>
        <span className="block font-light text-center xl:text-2xl xl:mb-96">CUT TO NEXT SCENE</span>
        <span className="hidden xl:block font-light text-right xl:text-2xl">
          SCROLL TO CONTINUE
        </span>
        <div className="mt-24 mb-52">
          <CardProject
            name="Plan B - Portail Client"
            take="Take 2"
            date="Août 2024"
            version="2.0"
            projectLink="https://portal-demo.codehive.fr/"
            githubLink="https://github.com/brunoverpet/portail-creanova"
            src="/creanova_desktop.mp4"
          />
        </div>
        <span className="block font-light text-center xl:text-2xl xl:mb-96">CUT TO NEXT SCENE</span>
        <span className="hidden xl:block font-light text-right xl:text-2xl">
          SCROLL TO CONTINUE
        </span>
        <div className="mt-24 mb-52">
          <CardProject
            name="Plan C - Nordway Site Vitrine"
            take="Take Final"
            date="Août 2024"
            version="1.1"
            projectLink="https://nordway.codehive.fr/"
            githubLink="https://github.com/brunoverpet/nordway"
            src="/vitrine.mp4"
          />
        </div>
        <span className="block font-light text-center xl:text-2xl xl:mb-96">CUT TO NEXT SCENE</span>
        <span className="hidden xl:block font-light text-right xl:text-2xl">
          SCROLL TO CONTINUE
        </span>
      </div>
      <div className="">
        <h2 className="text-center font-bold xl:text-3xl">Scène 02 - MAKING-OF</h2>
        <div className="mt-24 mb-52 space-y-6 xl:max-w-[50%] mx-auto text-left">
          <p>
            J’ai 23 ans et je suis développeur. Je construis mes projets pas à pas, en réfléchissant
            à chaque détail avant de coder. Je suis méthodique, mais j’aime aussi garder un peu
            d’humour quand la situation s’y prête.
          </p>
          <p>
            Je suis autodidacte, j’apprends sur le tas et je persévère quand ça bloque. Comme ce
            stage de deux semaines, où avec un ami nous avons dû relever un vrai défi technique… et
            qu’à la fin, nous avons tous les deux été embauchés.
          </p>
          <p>
            Chaque projet est pour moi un équilibre entre rigueur et créativité, où je réfléchis,
            j’expérimente et je trouve des solutions.
          </p>
        </div>
        <span className="block font-light text-center xl:text-2xl xl:mb-96">CUT TO LAST SCENE</span>
        <span className="hidden xl:block font-light text-right xl:text-2xl">
          SCROLL TO CONTINUE
        </span>
      </div>
      <div className="mt-52">
        <h2 className="text-center font-bold xl:text-3xl mb-12">Scène 03 - CONTACT</h2>
        <p className="text-center">Disponible pour écrire la suite (mission / alternance)</p>
        <div className="flex gap-x-5 justify-center mt-16">
          <Link
            href="https://github.com/brunoverpet"
            target="_blank"
            rel="noopener noreferrer"
            title="Lien externe vers le compte Github"
            aria-label="Lien externe vers le compte Github"
          >
            <Github color="#1D1D1F" strokeWidth="1" size="40" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/bruno-verpet-84411b310/"
            target="_blank"
            rel="noopener noreferrer"
            title="Lien vers le profil Linkedin"
            aria-label="Lien vers le profil Linkedin"
          >
            <Linkedin strokeWidth="1" size="40" />
          </Link>
          <a
            href="mailto:bverpet46@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="M'envoyer un email"
            aria-label="M'envoyer un email"
          >
            <Mail strokeWidth={1} size={40} />
          </a>
        </div>
      </div>
      <footer className="text-center mt-12 text-sm">
        © 2025 Bruno Verpet. All rights reserved.
      </footer>
    </div>
  )
}
