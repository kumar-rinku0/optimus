"use client";

import * as motion from "motion/react-client";
import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "motion/react";
import type { Variants } from "motion/react";
import Image from "next/image";

export default function ScrollCard() {
  return (
    <div className="bg-[#f3fcff] w-full py-36 px-16 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center items-center justify-items-center">
      {food.map(([emoji, hueA, hueB], i) => (
        <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInViewFull = useInView(ref, { amount: 1 });
  const isInView = useInView(ref, { amount: 0.5 });
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  useEffect(() => {
    console.log("Element is in view: ", isInView);
    const show = () => {
      controls.start("onscreen");
    };
    const hide = () => {
      controls.start("offscreen");
    };
    controls.mount();
    if (isInViewFull) {
      show();
    } else if (!isInView) {
      hide();
    }
    return () => controls.stop();
  }, [isInViewFull, isInView, controls]);

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      animate={controls}
      ref={ref}
      // viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div
        style={card}
        variants={cardVariants}
        className="card relative"
      >
        {emoji.length > 5 && (
          <Image
            src={emoji}
            alt="img"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover border-inherit rounded-3xl"
          />
        )}
        {emoji.length < 5 && `${emoji}`}
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
  width: 384,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 440,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.06) 0px 6px 16px 0px inset",
};

const card: React.CSSProperties = {
  fontSize: 114,
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
  [
    "https://images.unsplash.com/photo-1697178440406-cfe425dc5d04?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    340,
    10,
  ],
  [
    "https://images.unsplash.com/photo-1620799139652-715e4d5b232d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    20,
    40,
  ],
  ["🍋", 60, 90],
  ["🍐", 210, 120],
  ["🍏", 100, 40],
  ["🫐", 205, 25],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];
