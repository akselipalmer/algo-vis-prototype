import Number from "./number";

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Visualizer() {
  return (
    <div>
      {numbers.map((number, index) => (
        <Number key={index} value={number} color="green" />
      ))}
    </div>
  );
}
