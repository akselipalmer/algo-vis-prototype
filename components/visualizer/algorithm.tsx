import delay from "./delay";

export default async function algorithm(
  numbers: number[],
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>
) {
  // Bubble sort
  for (let i = 0; i < numbers.length; i++) {
    await delay(800);
    for (let j = 0; j < numbers.length - i - 1; j++) {
      await delay(500);
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];

        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
        setNumbers([...numbers]);
      }
    }
  }
}
