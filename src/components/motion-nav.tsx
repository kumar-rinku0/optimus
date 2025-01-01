"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Fa7, FaBars, FaLeaf } from "react-icons/fa6";
const navLinks = [
  {
    name: "home",
    id: "#home",
  },
  {
    name: "shop",
    id: "#shop",
  },
  {
    name: "blog",
    id: "#blog",
  },
  {
    name: "about",
    id: "#about",
  },
  {
    name: "contect",
    id: "#contect",
  },
];

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function MotionNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative shadow-sm"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="w-16 h-7 p-1 text-lg font-light flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          {/* <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg> */}
          <FaLeaf />
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className="bg-[#e4e6f4] border border-gray-400 rounded-xl absolute w-24 -right-2 top-8 h-60 flex flex-col justify-evenly items-start"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {navLinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.id}
              onClick={(state) => setIsOpen(!state)}
              className="w-full shadow-lg"
            >
              <motion.li variants={itemVariants} className="capitalize pl-4">
                {link.name}
              </motion.li>
            </Link>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
