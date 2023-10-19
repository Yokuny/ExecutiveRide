import type { Icon } from "@/types";
import { PointIcon, WayIcon } from "@/components/icons";

const ABPoint = ({ icon = true }: Icon) => {
  return (
    <div className="rounded-md  h-9 w-9 hover:bg-gradient-to-r from-blue-600 to-blue-500 hover:text-white flex items-center justify-center">
      {icon ? <PointIcon /> : <WayIcon />}
    </div>
  );
};

export default ABPoint;
