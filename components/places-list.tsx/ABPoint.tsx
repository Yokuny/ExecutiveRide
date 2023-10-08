import { ABPointProps } from "@/types";
import { PointIcon, WayIcon } from "@/components/icons";

const ABPoint = ({ icon = true }: ABPointProps) => {
  return (
    <div className="rounded-md bg-gradient-to-r from-blue-600 to-blue-500 h-9 w-12 flex items-center justify-center">
      {icon ? <PointIcon /> : <WayIcon />}
    </div>
  );
};

export default ABPoint;
