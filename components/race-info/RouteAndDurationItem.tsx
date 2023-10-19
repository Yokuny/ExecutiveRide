import { WayIcon } from "../icons";

type RouteAndDurationItemProps = {
  distance: number;
  duration: number;
};

const RouteAndDurationItem = ({ distance, duration }: RouteAndDurationItemProps) => {
  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col">
        <div className="flex text-sm items-center gap-1">
          <WayIcon size={16} />
          <p>Distancia:</p>
        </div>
        <p className="text-xl font-semibold">{distance} km</p>
      </div>
      <div className="flex flex-col">
        <div className="flex text-sm items-center gap-1">
          <p>Duração prevista:</p>
        </div>
        <p className="text-xl font-semibold">{duration}</p>
      </div>
    </div>
  );
};

export default RouteAndDurationItem;
