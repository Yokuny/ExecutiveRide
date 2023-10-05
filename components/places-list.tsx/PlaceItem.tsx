import ItemContent from "./ItemContent";
import { PlaceItemProps } from "@/types";

const PlaceItem = ({ firstAddress, secondAddress }: PlaceItemProps) => {
  if (secondAddress === "") secondAddress = "-";
  return (
    <div className="whitespace-nowrap overflow-auto rounded-md flex flex-col gap-1 justify-between items-center w-full">
      <ItemContent address={firstAddress} />
      <ItemContent icon={false} address={secondAddress} />
    </div>
  );
};

export default PlaceItem;
