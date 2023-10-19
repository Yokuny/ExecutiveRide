import extractData from "../../utils/formattedHour";
import type { RacingDataItemProps } from "@/types";

import { UserIcon, CalenderIcon, CalenderNumberIcon } from "../icons";

const RacingDataItem = ({ firstPoint, data }: RacingDataItemProps) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <UserIcon size={16} />
        <span className="text-sm">{data.passenger ? data.passenger : "-"}</span>
      </div>
      <div className="flex items-center gap-3">
        <CalenderIcon size={16} />
        <span className="text-sm">{extractData("full", firstPoint.creatAt)}</span>
      </div>
      <div className="flex items-center gap-3">
        <CalenderNumberIcon size={16} />
        <span className="text-sm">Chegada: {extractData("hour", data.creatAt)}</span>
      </div>
      <div className="flex-col items-center justify-between gap-1">
        <span className="text-sm w-full">{firstPoint.address}</span>
        <span className="mx-2">&#10095;</span>
        <span className="text-sm w-full">{data.address}</span>
      </div>
    </>
  );
};

export default RacingDataItem;
