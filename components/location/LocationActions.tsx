"use client";
import { useGlobalContext } from "@/app/context";
import type { LocationData, LocationActionsProps } from "@/types";

import { Button } from "@nextui-org/button";
import { TrashIcon, ConfirmIcon } from "../icons";

const LocationActions = ({ erase, data, disabled }: LocationActionsProps) => {
  const { location, setLocation, setCreatAt } = useGlobalContext();

  const getTime = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API}/time`);
    return await data.json();
  };

  const saveLocation = async () => {
    const time = new Date(await getTime());
    setCreatAt(time);

    setLocation([...location, data]);
    erase({} as LocationData);

    const locations = localStorage.getItem("actualLocation");
    if (!locations) {
      localStorage.setItem("actualLocation", JSON.stringify([data]));
      localStorage.setItem("creatAt", JSON.stringify(time));
    } else if (typeof locations === "string") {
      const storedLocations = JSON.parse(locations);

      const newLocations = [...storedLocations, data];
      localStorage.setItem("actualLocation", JSON.stringify(newLocations));
    }
  };

  return (
    <div className="w-3/4 flex justify-center items-center gap-4">
      <Button
        className="hover:opacity-90 bg-default-200"
        onClick={() => erase({} as LocationData)}
        isDisabled={disabled}
        size="sm"
        radius="sm"
        aria-label="Erase location">
        <TrashIcon />
      </Button>
      <Button
        className="hover:opacity-90 w-2/5"
        onClick={saveLocation}
        isDisabled={disabled}
        color="primary"
        size="sm"
        radius="sm"
        aria-label="Confirm location">
        <ConfirmIcon />
      </Button>
    </div>
  );
};

export default LocationActions;
