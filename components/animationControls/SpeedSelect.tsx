"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { ChangeEvent } from "react";

import { settings } from "@/app/visualizer/page";

export type speedOptions = "Slow" | "Normal" | "Fast";
const options: speedOptions[] = ["Slow", "Normal", "Fast"];

type SpeedSelectProps = {
  setSettings: React.Dispatch<React.SetStateAction<settings>>;
  settings: settings;
};

export default function SpeedSelect({
  setSettings,
  settings,
}: SpeedSelectProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSettings((prev) => ({ ...prev, speed: event.target.value }));
  };

  return (
    <Select
      className=" w-full sm:w-36"
      defaultSelectedKeys={["Normal"]}
      label="Speed"
      radius="md"
      selectedKeys={[settings.speed]}
      size="sm"
      variant="bordered"
      onChange={handleChange}
    >
      {options.map((option) => (
        <SelectItem key={option} value={option}>
          {option}
        </SelectItem>
      ))}
    </Select>
  );
}
