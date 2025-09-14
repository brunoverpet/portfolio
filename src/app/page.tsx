'use client'

import CardProject from '@/app/components/CardProject'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import ScrollToTopButton from '@/app/components/ScrollToTopButton'
import { motion, stagger } from 'motion/react'
import TypingText from '@/app/components/TypingText'

export default function Home() {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' as const } },
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="">
      <ScrollToTopButton />
      <motion.span
        className="font-light text-sm xl:text-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        FR / ORL — 2025
      </motion.span>

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
          <motion.span
            className="block font-light xl:hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            SWIPE DOWN
          </motion.span>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              visible: { transition: { delayChildren: stagger(0.2) } },
            }}
          >
            <motion.span
              className="hidden xl:block font-light xl:text-xl"
              variants={fadeInUpVariant}
            >
              SCROLL TO CONTINUE
            </motion.span>
          </motion.div>
        </div>
      </div>

      <div className="mt-64 mb-52 xl:mt-80">
        <TypingText text="Scène 01 - PROJETS" />
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: stagger(0.2) } },
          }}
        >
          <motion.span
            className="block font-light text-center xl:text-2xl xl:mb-96"
            variants={fadeInUpVariant}
          >
            CUT TO NEXT SCENE
          </motion.span>

          <motion.span
            className="hidden xl:block font-light text-right xl:text-2xl"
            variants={fadeInUpVariant}
          >
            SCROLL TO CONTINUE
          </motion.span>
        </motion.div>

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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: stagger(0.2) } },
          }}
        >
          <motion.span
            className="block font-light text-center xl:text-2xl xl:mb-96"
            variants={fadeInUpVariant}
          >
            CUT TO NEXT SCENE
          </motion.span>

          <motion.span
            className="hidden xl:block font-light text-right xl:text-2xl"
            variants={fadeInUpVariant}
          >
            SCROLL TO CONTINUE
          </motion.span>
        </motion.div>
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: stagger(0.2) } },
          }}
        >
          <motion.span
            className="block font-light text-center xl:text-2xl xl:mb-96"
            variants={fadeInUpVariant}
          >
            CUT TO NEXT SCENE
          </motion.span>

          <motion.span
            className="hidden xl:block font-light text-right xl:text-2xl"
            variants={fadeInUpVariant}
          >
            SCROLL TO CONTINUE
          </motion.span>
        </motion.div>
      </div>
      <div className="">
        <TypingText text="Scène 02 - MAKING-OF" />
        <motion.div
          className="mt-24 mb-52 space-y-6 xl:max-w-[50%] mx-auto text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { },
            visible: { transition: { delayChildren: stagger(0.3) } },
          }}
        >
          <motion.p variants={paragraphVariants}>
            J’ai 23 ans et je suis développeur. Je construis mes projets pas à pas, en réfléchissant
            à chaque détail avant de coder. Je suis méthodique, mais j’aime aussi garder un peu
            d’humour quand la situation s’y prête.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            Je suis autodidacte, j’apprends sur le tas et je persévère quand ça bloque. Comme ce
            stage de deux semaines, où avec un ami nous avons dû relever un vrai défi technique… et
            qu’à la fin, nous avons tous les deux été embauchés.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            Chaque projet est pour moi un équilibre entre rigueur et créativité, où je réfléchis,
            j’expérimente et je trouve des solutions.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: stagger(0.2) } },
          }}
        >
          <motion.span
            className="block font-light text-center xl:text-2xl xl:mb-96"
            variants={fadeInUpVariant}
          >
            CUT TO LAST SCENE
          </motion.span>

          <motion.span
            className="hidden xl:block font-light text-right xl:text-2xl"
            variants={fadeInUpVariant}
          >
            SCROLL TO CONTINUE
          </motion.span>
        </motion.div>
      </div>
      <div className="mt-52">
        <TypingText text="Scène 03 - CONTACT" />
        <p className="text-center mt-16">Disponible pour écrire la suite (mission / alternance)</p>
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
