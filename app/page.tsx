"use client";

import { useEffect, useState } from "react";

import ControlBar from "@/components/visualizer/ControlBar";
import Visualizer from "@/components/visualizer/visualizer";
import { speedOptions } from "@/components/animationControls/SpeedSelect";
import getRandomNumbers from "@/components/visualizer/getRandomNumbers";

export type settings = {
  speed: speedOptions;
  count: number;
};

export default function Home() {
  const [settings, setSettings] = useState<settings>({
    speed: "Normal",
    count: 10,
  });
  const [numbers, setNumbers] = useState(getRandomNumbers(settings.count));

  useEffect(() => {
    setNumbers(getRandomNumbers(settings.count));
  }, [settings.count]);

  return (
    <div>
      <ControlBar
        numbers={numbers}
        setNumbers={setNumbers}
        setSettings={setSettings}
        settings={settings}
      />
      <Visualizer numbers={numbers} />
    </div>
  );
}
