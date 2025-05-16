"use client"

import { cn } from "@/lib/utils"
import { useIsomorphicLayoutEffect } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

interface DigitalGlobeProps {
  className?: string
}

export default function DigitalGlobe({ className }: DigitalGlobeProps) {
  const el = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.timeline({
      scrollTrigger: {
        trigger: el.current,
        start: "100% 100%",
        end: "100% 100%",
        scrub: 0,
      },
    })

    ctx.to(el.current, {
      ease: "none",
      rotate: 1,
    })
  }, [])
  return (
    <div
      className={cn(
        "max-md h-16 w-16 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-900",
        className
      )}
      ref={el}
    >
      <div className="globe">
        <div className="globe-wrap ">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle-hor"></div>
          <div className="circle-hor-middle"></div>
        </div>
      </div>
    </div>
  )
}
