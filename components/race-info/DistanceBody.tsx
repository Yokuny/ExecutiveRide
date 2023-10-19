import type { DistanceBodyProps } from "@/types";
import { ModalBody } from "@nextui-org/modal";
import { Chip } from "@nextui-org/chip";
import DistanceAndDuration from "./RouteAndDurationItem";

const DistanceBody = ({ data }: DistanceBodyProps) => {
  if (!data) return <></>;
  return (
    <ModalBody className="flex gap-6">
      <DistanceAndDuration distance={data.routeDistance} duration={data.expectedDuration} />
      {data.routeInfo.map((step, index) => (
        <div className="gap-1 flex flex-col" key={`routerInfo-${index}`}>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <p className="text-xs font-medium">Distancia:</p>
              <Chip className="bg-default-100" radius="sm">
                <span className="font-medium">{step.distance}</span>
              </Chip>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-medium">Duração:</p>
              <Chip className="bg-default-100" radius="sm">
                <span className="font-medium">{step.duration}</span>
              </Chip>
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
