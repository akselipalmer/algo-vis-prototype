import { Slider } from "@nextui-org/slider";

import StartStop from "./StartStop";

type ControlBarProps = {
  numbers: number[];
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function ControlBar({
  numbers,
  setNumbers,
}: ControlBarProps): JSX.Element {
  return (
    <div className="border-2 border-gray-200 rounded-full px-5 py-1 max-w-6xl w-full flex items-center">
      <Slider
        className="w-72"
        color="foreground"
        defaultValue={10}
        label="Numbers"
        maxValue={100}
        minValue={5}
        size="sm"
        step={5}
      />
      <StartStop numbers={numbers} setNumbers={setNumbers} />
    </div>
  );
}
