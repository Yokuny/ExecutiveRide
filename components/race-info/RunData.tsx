import { useState } from "react";
import { Button } from "@nextui-org/button";
import { FileIcon } from "../icons";

const RunData = () => {
  const [paused, setPaused] = useState(false);
  const handlePause = () => setPaused((curr) => !curr);

  return (
    <Button
      className="sm:h-12 h-14 sm:px-5 px-2 md:w-1/5 min-w-fit bg-default-100 sm:text-sm text-xs sm:flex-row-reverse flex-col items-center sm:gap-2 gap-1"
      onClick={handlePause}>
      <span>Registro</span>
      <FileIcon />
    </Button>
  );
};

export default RunData;
