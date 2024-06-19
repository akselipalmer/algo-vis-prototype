"use client";
import { motion } from "framer-motion";

import getColor from "./getColor";
import Number from "./number";

type VisualizerProps = {
  numbers: number[];
};

export default function Visualizer({ numbers }: VisualizerProps) {
  return (
    <div>
      <motion.div className="flex gap-1 flex-wrap">
        {numbers.map((number) => (
          <Number key={number} color={getColor(number)} value={number} />
        ))}
      </motion.div>
    </div>
  );
}
