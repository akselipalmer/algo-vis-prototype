"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import getColor from "./getColor";
import Number from "./number";
import ControlBar from "./ControlBar";

export default function Visualizer() {
  const [numbers, setNumbers] = useState([5, 3, 9, 4, 1, 7, 2, 6, 8, 10]);

  return (
    <div>
      <ControlBar numbers={numbers} setNumbers={setNumbers} />
      <motion.div className="flex gap-1">
        {numbers.map((number) => (
          <Number key={number} color={getColor(number)} value={number} />
        ))}
      </motion.div>
    </div>
  );
}
