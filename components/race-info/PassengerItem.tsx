import { useState } from "react";
import { useGlobalContext } from "@/app/context";
import { Input } from "@nextui-org/input";
import { LocationIcon } from "../icons";
import type { PassengerItemProps } from "@/types";

const PassengerItem = ({ data, index }: PassengerItemProps) => {
  const [passenger, setPassenger] = useState(data.passenger);
  const { location, setLocation } = useGlobalContext();

  const handlePassengerName = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <Input className="text-lg" radius="sm" onChange={handlePassengerName} value={passenger} />
    </>
  );
};

export default PassengerItem;
