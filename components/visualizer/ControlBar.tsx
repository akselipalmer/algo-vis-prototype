import StartStop from "../animationControls/StartStop";
import NumberCountSlider from "../animationControls/NumberCountSlider";
import SpeedSelect from "../animationControls/SpeedSelect";

type ControlBarProps = {
  numbers: number[];
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function ControlBar({
  numbers,
  setNumbers,
}: ControlBarProps): JSX.Element {
  return (
    <div className="border-2 border-gray-200 rounded-lg md:rounded-full px-5 py-2 sm:py-1 max-w-6xl w-full flex sm:items-center  gap-3 flex-wrap">
      <NumberCountSlider />
      <SpeedSelect />
      <StartStop numbers={numbers} setNumbers={setNumbers} />
    </div>
  );
}
