import { color } from "./number";

export default function getColor(number: number): color {
  if (number % 5 === 0) return "yellow";
  if (number % 3 === 0) return "green";
  if (number % 2 === 0) return "pink";

  return "blue";
}
