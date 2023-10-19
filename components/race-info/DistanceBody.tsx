import type { DistanceBodyProps } from "@/types";
import { ModalBody } from "@nextui-org/modal";
import { WayIcon, ClockIcon, CalenderNumberIcon, CalenderIcon } from "../icons";
import DistanceAndDuration from "./RouteAndDurationItem";

const DistanceBody = ({ data }: DistanceBodyProps) => {
  if (!data) return <></>;
  // alert(JSON.stringify(data, null, 2));
  return (
    <ModalBody className="flex gap-6">
      <DistanceAndDuration distance={data.routeDistance} duration={data.expectedDuration} />
      {data.routeInfo.map((step, index) => (
        <div className="gap-1 flex flex-col" key={`routerInfo-${index}`}>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <p className="text-small">Distancia:</p>
              <span className="text-base font-medium">{step.distance}</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-small">Duração:</p>
              <span className="text-base font-medium">{step.duration}</span>
            </div>
          </div>
          <div className="flex-col items-center justify-between gap-1">
            <span className="text-sm w-full">{step.startAddress}</span>
            <span className="mx-2">&#10095;</span>
            <span className="text-sm w-full">{step.endAddress}</span>
          </div>
        </div>
      ))}
    </ModalBody>
  );
};
export default DistanceBody;
