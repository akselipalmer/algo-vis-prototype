import { Slider } from "@nextui-org/slider";

import { settings } from "@/app/visualizer/page";

type NumberCountSliderProps = {
  setSettings: React.Dispatch<React.SetStateAction<settings>>;
  settings: settings;
};

export default function NumberCountSlider({
  settings,
  setSettings,
}: NumberCountSliderProps) {
  const handleCountChange = (val: number | number[]) => {
    if (typeof val !== "number") return;
    setSettings((prev) => ({ ...prev, count: val }));
  };

  return (
    <Slider
      className="w-72"
      color="foreground"
      label="Numbers"
      maxValue={100}
      minValue={5}
      size="sm"
      step={5}
      value={settings.count}
      onChange={handleCountChange}
    />
  );
}
