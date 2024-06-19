const amount = (speed: string): number => {
  if (speed === "Slow") return 700;
  if (speed === "Fast") return 200;

  return 400;
};

export default function delay(delayAmount: string) {
  return new Promise((resolve) => setTimeout(resolve, amount(delayAmount)));
}
