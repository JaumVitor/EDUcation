import React from 'react'

import { CanvasRevealEffect } from './ui/canvas-reveal-effect'

import { AnimatePresence, motion } from 'framer-motion'

import { PiStudentBold } from 'react-icons/pi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdClass } from 'react-icons/md'
import { GiBookshelf } from 'react-icons/gi'
import { GiSpellBook } from 'react-icons/gi'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Link } from 'react-router-dom'

export default function MenuMain() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold underline">
          <TextGenerateEffect className=" font-bold pb-5 underline" words='Menu Principal'/>
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-transparent dark:bg-black w-full gap-4">
          <Link className="w-full" to="/director">
            <Card title="Direção" icon={<GiSpellBook className="w-32 h-32" />}>
              <CanvasRevealEffect
                animationSpeed={1}
                containerClassName="bg-violet-900"
                colors={[[250, 82, 91]]}
                dotSize={2.2}
              />
            </Card>
          </Link>
          <Link className="w-full" to="/teacher">
            <Card
              title="Docente"
              icon={<FaChalkboardTeacher className="w-32 h-32" />}
            >
              <CanvasRevealEffect
                animationSpeed={1}
                containerClassName="bg-violet-900"
                colors={[[250, 82, 91]]}
                dotSize={2.2}
              />
              {/* Radial gradient for the cute fade */}
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
          </Link>
          <Link className="w-full" to="/subject">
            <Card title="Disciplina" icon={<GiBookshelf className="w-32 h-32" />}>
              <CanvasRevealEffect
                animationSpeed={1}
                containerClassName="bg-violet-900"
                colors={[[250, 82, 91]]}
                dotSize={2.2}
              />
            </Card>
          </Link>
          <Link className="w-full" to="/class">
            <Card title="Turma" icon={<MdClass className="w-32 h-32" />}>
              <CanvasRevealEffect
                animationSpeed={1}
                containerClassName="bg-violet-900"
                colors={[[250, 82, 91]]}
                dotSize={2.2}
              />
            </Card>
          </Link>
          <Link className="w-full" to="/student">
            <Card title="Aluno" icon={<PiStudentBold className="w-32 h-32" />}>
              <CanvasRevealEffect
                animationSpeed={1}
                containerClassName="bg-violet-900"
                colors={[[250, 82, 91]]}
                dotSize={2.2}
              />
            </Card>
          </Link>
        </div>
      </div>
    </>
  )
}

const Card = ({
  title,
  icon,
  children
}: {
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
}) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-2 border-black/[0.2] hover:border-green-400 hover:border-[3.5px] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative min-h-[25rem] cursor-pointer bg-violet-300/10"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
