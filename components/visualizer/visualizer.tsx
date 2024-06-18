import getColor from "./getColor";
import Number from "./number";

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Visualizer() {
  return (
    <div className="flex gap-1">
      {numbers.map((number) => (
        <Number key={number} color={getColor(number)} value={number} />
      ))}
    </div>
  );
}
