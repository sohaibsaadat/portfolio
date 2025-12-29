"use client";

import { motion } from "framer-motion";
import React from "react";
import { css,html, exp, js, jwtSvg, materialUi, mongodb, node, react, reduxSvg, socketIo, tailwindCss } from "../assets/images";

const logos = [
 exp,
 react,
 node,
 mongodb,
 materialUi,
 socketIo,
 tailwindCss,
 reduxSvg,
 jwtSvg,
 html,
 css,
 js

];

export default function RotatingLogos() {
  const containerSize = 290; // circle size
  const logoSize = 10; // logo width/height
  const radius = containerSize / 2 - logoSize / 2; // sit logos on border
  const center = containerSize / 2;

  return (
    <div className="relative w-[300px] h-[300px] mx-auto mt-20">
      {/* Rotating Circle */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full "
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {logos.map((logo, index) => {
          const angle = (index / logos.length) * 2 * Math.PI;
          const x = center + radius * Math.cos(angle) - logoSize / 2;
          const y = center + radius * Math.sin(angle) - logoSize / 2;

          return (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="w-10 h-10 absolute"
              style={{ top: y, left: x }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}