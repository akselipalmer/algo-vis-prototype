"use client";
import { motion } from "framer-motion";

export type color = "pink" | "blue" | "green" | "yellow";

type NumberProps = {
  value: number;
  color: color;
  position: number;
};

const colors = {
  pink: "border-pink-500",
  blue: "border-blue-500",
  green: "border-green-500",
  yellow: "border-yellow-500",
};

export default function Number({
  value,
  color,
  position = 0,
}: NumberProps): JSX.Element {
  return (
    <motion.div
      animate={{ x: position - 250 }}
      className={`border-3 rounded-full h-10 w-10 flex justify-center items-center ${colors[color]} absolute`}
    >
      <p>{value}</p>
    </motion.div>
  );
}
