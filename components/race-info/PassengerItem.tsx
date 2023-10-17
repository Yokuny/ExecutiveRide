import { useState } from "react";
import { useGlobalContext } from "@/app/context";
import { Input } from "@nextui-org/input";
import { LocationIcon } from "../icons";
import type { PassengerItemProps } from "@/types";

const PassengerItem = ({ data, index }: PassengerItemProps) => {
  const { location, setLocation } = useGlobalContext();
  const [passenger, setPassenger] = useState(data.passenger);

  const handlePassengerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 26) return;
    const newLocation = [...location];
    newLocation[index].passenger = e.target.value;
    setLocation(newLocation);
    setPassenger(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-1">
        <LocationIcon size={14} />
        <span className="text-sm whitespace-nowrap overflow-auto w-full">{data.address}</span>
      </div>
      <Input
        className="text-lg"
        radius="sm"
        onChange={handlePassengerName}
        value={passenger || ""}
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">Passageiro</span>
          </div>
        }
      />
    </>
  );
};

export default PassengerItem;
