import { Slider } from "@nextui-org/slider";

export default function NumberCountSlider() {
  return (
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
  );
}
