import ABPoint from "./ABPoint";
import { ItemPartProps } from "@/types";

const ItemContent = ({ icon, address }: ItemPartProps) => {
  return (
    <div className="bg-gradient-to-l from-default-100 to-transparent rounded-md flex justify-between items-center w-full gap-2">
      <ABPoint icon={icon} />
      <p className="text-sm text-start flex items-center w-full h-9 overflow-hidden">{address}</p>
    </div>
  );
};

export default ItemContent;
