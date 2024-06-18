export type color = "pink" | "blue" | "green" | "yellow";

type NumberProps = {
  value: number;
  color: color;
};

const colors = {
  pink: "border-pink-500",
  blue: "border-blue-500",
  green: "border-green-500",
  yellow: "border-yellow-500",
};

export default function Number({ value, color }: NumberProps): JSX.Element {
  return (
    <div
      className={`border-3 rounded-full h-10 w-10 flex justify-center items-center ${colors[color]}`}
    >
      <p>{value}</p>
    </div>
  );
}
