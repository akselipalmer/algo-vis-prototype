export default function getRandomNumbers(count: number): number[] {
  // Generates an array of all the numbers between 0 and 100 and shuffles them
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers.slice(0, count);
}
