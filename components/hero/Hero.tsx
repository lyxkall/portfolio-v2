"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
// import HeroGraphic from "./HeroGraphic"
import DigitalGlobe from "../DigitalGlobe"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center"
      initial="initial"
      animate="animate"
    >
      {/* <HeroGraphic /> */}
      <HeroText />
      <div className="mt-20 w-full overflow-hidden">
        <ParallaxText direction={500} baseVelocity={-1}>
          Frontend Web Developer
        </ParallaxText>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-0 top-[47%] hidden h-[85px] w-[200px] flex-col items-start justify-center rounded-br-full rounded-tr-full bg-zinc-200 px-5 dark:bg-zinc-800 lg:flex"
      >
         <p className="top-[10%] text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Locate in <br/> Bandung,<br/>Indonesian.
        </p>

        <DigitalGlobe className="absolute right-4 top-[13,5%]" />
      </motion.div>
    </motion.section>
  )
}
