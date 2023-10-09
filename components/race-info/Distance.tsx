import { useState } from "react";
import { Button } from "@nextui-org/button";
import { LocationIcon } from "../icons";

const ElapsedTime = () => {
  const [paused, setPaused] = useState(false);
  const handlePause = () => setPaused((curr) => !curr);

  return (
    <Button
      className="sm:h-12 h-14 sm:px-5 px-3 min-w-fit md:w-1/5 w-2/6 bg-default-100 sm:text-sm text-xs sm:flex-row-reverse flex-col items-center sm:gap-2 gap-1"
      onClick={handlePause}>
      <span>234 km</span>
      <LocationIcon size={14} />
    </Button>
  );
};

export default ElapsedTime;
