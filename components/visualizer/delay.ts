export default function delay(delayAmount: number) {
  return new Promise((resolve) => setTimeout(resolve, delayAmount));
}
