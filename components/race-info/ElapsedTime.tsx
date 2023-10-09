import { useState } from "react";
import { Button } from "@nextui-org/button";
import { PlayIcon, PauseIcon } from "../icons";

const ElapsedTime = () => {
  const [paused, setPaused] = useState(false);
  const handlePause = () => setPaused((curr) => !curr);

  return (
    <Button
      className="sm:h-12 h-14 sm:px-5 px-2 min-w-fit bg-default-100 sm:text-sm text-xs sm:flex-row-reverse flex-col items-center sm:gap-2 gap-1"
      onClick={handlePause}>
      <span>00:00:00</span>
      {paused ? <PauseIcon /> : <PlayIcon />}
    </Button>
  );
};

export default ElapsedTime;
