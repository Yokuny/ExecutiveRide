"use client";
import { useGlobalContext } from "@/app/context";
import { useEffect, useState } from "react";
import { Card } from "@nextui-org/card";
import RaceInfoMenuItems from "./RaceInfoMenuItems";
import MenuItemSkeleton from "./MenuItemSkeleton";

const RaceInfo = () => {
  const { location } = useGlobalContext();
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (location.length >= 1) {
      setDisabled(false);
    }
  }, [location]);

  return (
    <Card className="w-full overflow-scroll max-w-4xl p-2 h-auto flex items-center" radius="sm">
      {disabled ? <div className="p-2 pt-0 text-default-500">Pesquise sua localização</div> : <></>}
      <div className="md:w-5/6 w-full flex gap-2 items-center md:justify-evenly mx-2">
        {disabled ? <MenuItemSkeleton /> : <RaceInfoMenuItems />}
      </div>
    </Card>
  );
};

export default RaceInfo;
