"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

import getColor from "./getColor";
import Number from "./number";
import algorithm from "./algorithm";

export default function Visualizer() {
  const [numbers, setNumbers] = useState([5, 3, 9, 4, 1, 7, 2, 6, 8, 10]);
  const runAlgorithm = async () => {
    algorithm(numbers, setNumbers);
  };
  const handleReset = () => {
    setNumbers([5, 3, 9, 4, 1, 7, 2, 6, 8, 10]);
  };

  return (
    <div>
      <motion.div className="flex gap-1">
        {numbers.map((number) => (
          <Number key={number} color={getColor(number)} value={number} />
        ))}
      </motion.div>
      <div className="mt-14 flex gap-2 ">
        <Button variant="bordered" onClick={handleReset}>
          Reset
        </Button>
        <Button color="primary" variant="solid" onClick={runAlgorithm}>
          Run
        </Button>
      </div>
    </div>
  );
}
