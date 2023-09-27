import { ABPointProps } from "@/types";
import { DownIcon, UpIcon } from "@/components/icons";

const ABPoint = ({ letter }: ABPointProps) => {
  if (letter !== null) {
    return (
      <div className="rounded-md bg-gradient-to-r from-blue-600 to-blue-400 h-9 w-12 flex items-center justify-center">
        <UpIcon />
      </div>
    );
  }
  return (
    <div className="rounded-md bg-gradient-to-r from-blue-300 to-blue-500 h-9 w-12 flex items-center justify-center">
      <DownIcon />
    </div>
  );
};

export default ABPoint;
