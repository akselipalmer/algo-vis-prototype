import { Button } from "@nextui-org/button";

import algorithm from "../visualizer/algorithm";

import { settings } from "@/app/visualizer/page";

type StartStopProps = {
  numbers: number[];
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>;
  settings: settings;
};
export default function StartStop({
  numbers,
  setNumbers,
  settings,
}: StartStopProps) {
  const runAlgorithm = async () => {
    algorithm(numbers, setNumbers, settings.speed);
  };
  const handleReset = () => {
    setNumbers([5, 3, 9, 4, 1, 7, 2, 6, 8, 10]);
  };

  return (
    <div className="flex gap-2 ml-auto">
      <Button radius="full" variant="bordered" onClick={handleReset}>
        Reset
      </Button>
      <Button
        color="primary"
        radius="full"
        variant="solid"
        onClick={runAlgorithm}
      >
        Run
      </Button>
    </div>
  );
}
