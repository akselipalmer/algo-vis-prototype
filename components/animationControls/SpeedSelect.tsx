import { Select, SelectItem } from "@nextui-org/select";

const options = ["slow", "medium", "fast"];

export default function SpeedSelect(): JSX.Element {
  return (
    <Select
      className=" w-full sm:w-36"
      label="Speed"
      radius="md"
      size="sm"
      variant="bordered"
    >
      {options.map((option) => (
        <SelectItem key={option}>{option}</SelectItem>
      ))}
    </Select>
  );
}
