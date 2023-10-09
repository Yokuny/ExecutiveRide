"use client";
import { Card } from "@nextui-org/card";
import ElapsedTime from "./ElapsedTime";
import Distance from "./Distance";
import RunData from "./RunData";
import Passenger from "./Passenger";

const RaceInfo = () => {
  return (
    <Card className="w-full overflow-scroll max-w-4xl p-2 md:h-16 h-auto flex items-center" radius="sm">
      <div className="w-5/6 flex items-center sm:gap-0 gap-2 justify-evenly ">
        <ElapsedTime />
        <Distance />
        <RunData />
        <Passenger />
      </div>
    </Card>
  );
};

export default RaceInfo;
