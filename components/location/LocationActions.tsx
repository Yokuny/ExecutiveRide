"use client";
import { useEffect } from "react";
import { useGlobalContext } from "@/app/context";
import type { LocationData, LocationActionsProps } from "@/types";

import { Button } from "@nextui-org/button";
import { TrashIcon, ConfirmIcon } from "../icons";

const LocationActions = ({ erase, data, disabled }: LocationActionsProps) => {
  const { location, setLocation, creatAt, setDate } = useGlobalContext();

  const saveLocation = () => {
    setLocation([...location, data]);
    erase({} as LocationData);

    const locations = localStorage.getItem("actualLocation");
    if (!locations) {
      localStorage.setItem("actualLocation", JSON.stringify([data]));
      localStorage.setItem("creatAt", JSON.stringify(new Date()));
    } else if (typeof locations === "string") {
      const storedLocations = JSON.parse(locations);

      const newLocations = [...storedLocations, data];
      localStorage.setItem("actualLocation", JSON.stringify(newLocations));
    }
  };

  useEffect(() => {
    if (creatAt === null) {
      setDate;
    }
  }, [location, creatAt, setDate]);

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
