"use client";
import { Card } from "@nextui-org/card";
import ElapsedTime from "./ElapsedTime";
import Distance from "./Distance";
import RunData from "./RunData";
import Passenger from "./Passenger";

const RaceInfo = () => {
  return (
    <Card
      className="w-full sm:gap-0 gap-2 flex flex-row items-center justify-evenly max-w-4xl md:px-20 p-2 md:h-16 h-auto"
      radius="sm">
      <ElapsedTime />
      <Distance />
      <RunData />
      <Passenger />
    </Card>
  );
};

export default RaceInfo;
