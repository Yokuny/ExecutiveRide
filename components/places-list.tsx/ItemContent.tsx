import ABPoint from "./ABPoint";
import { ItemPartProps } from "@/types";

const ItemContent = ({ letter = null, address, icon = false }: ItemPartProps) => {
  return (
    <div className="bg-gradient-to-l from-default-100 to-transparent rounded-md flex justify-between items-center w-full h-9 gap-2">
      <ABPoint letter={letter} />
      <p className="text-sm text-start flex items-center w-full h-9 overflow-hidden">{address}</p>
    </div>
  );
};

export default ItemContent;
