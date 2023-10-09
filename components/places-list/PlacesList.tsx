"use client";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context";
import { Card } from "@nextui-org/card";
import ListFooter from "./ListFooter";
import ListItems from "./ListItems";

const PlacesList = () => {
  const { location } = useGlobalContext();
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (location.length >= 1) {
      setDisabled(false);
    }
  }, [location]);

  return (
    <Card className="w-full flex items-center max-w-4xl py-2 md:p-2" radius="sm">
      <ListItems disabled={disabled} />
      <ListFooter disabled={disabled} />
    </Card>
  );
};

export default PlacesList;
