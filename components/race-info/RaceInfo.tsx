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
    <Card className="w-full overflow-scroll max-w-4xl p-2 md:h-16 h-auto flex items-center" radius="sm">
      <div className="w-5/6 flex items-center gap-2 justify-evenly ">
        {disabled ? <MenuItemSkeleton /> : <RaceInfoMenuItems />}
      </div>
    </Card>
  );
};

export default RaceInfo;
