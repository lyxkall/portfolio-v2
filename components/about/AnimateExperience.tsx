// components/AnimateExperience.tsx
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export default function InfiniteScrollWrapper({
  children,
  speed = 10,
  direction = "right", // Default diubah ke kiri
  pauseOnHover = true,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [offset, setOffset] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  // Dir multiplier dibalik untuk loop ke kiri
  const dirMultiplier = direction === "left" ? 1 : -1;

  useEffect(() => {
    const inner = innerRef.current;
    if (inner) {
      setContentWidth(inner.scrollWidth / 2);
    }
  }, [children]);

  useEffect(() => {
    if (!contentWidth) return;

    let animationFrameId: number;
    let lastTime: number;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;

      if (!(pauseOnHover && isHovering)) {
        setOffset((prev) => {
          const distance = (speed * delta) / 1000;
          let newOffset = prev + distance * dirMultiplier;

          // Logika looping untuk arah kiri
          if (direction === "left") {
            if (newOffset >= contentWidth) {
              newOffset = 0;
            }
          } else {
            if (newOffset <= -contentWidth) {
              newOffset = 0;
            }
          }

          return newOffset;
        });
      }

      lastTime = time;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [contentWidth, isHovering, speed, dirMultiplier, pauseOnHover, direction]);

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden w-full"
      onMouseEnter={() => pauseOnHover && setIsHovering(true)}
      onMouseLeave={() => pauseOnHover && setIsHovering(false)}
    >
      <div
        ref={innerRef}
        className="flex w-max gap-8 whitespace-nowrap"
        style={{
          transform: `translateX(${offset}px)`,
          willChange: 'transform',
        }}
      >
        {children}
        {children}
      </div>

    
        {/* Gradient kiri */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 dark:from-zinc-900 to-transparent pointer-events-none z-10" />
      {/* Gradient kanan */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50  dark:from-zinc-900 to-transparent pointer-events-none z-10" />
    </div>
  );
}