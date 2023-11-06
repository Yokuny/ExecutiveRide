import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context";
import formatTime from "@/utils/formatTime";

import { Button } from "@nextui-org/button";
import { ClockIcon } from "../icons";

const ElapsedTime = () => {
  const { creatAt } = useGlobalContext();
  const [date, setDate] = useState(String);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!creatAt) return;
      const timestamp = Date.now() - creatAt.getTime();
      const time = timestamp / 1000;
      setDate(formatTime(time));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [creatAt]);

  return (
    <Button className="sm:h-12 h-14 sm:px-5 px-2 md:w-1/5 w-2/6 min-w-fit bg-default-100 sm:text-sm text-xs sm:flex-row-reverse flex-col items-center sm:gap-2 gap-1">
      <span>{date}</span>
      <ClockIcon />
    </Button>
  );
};

export default ElapsedTime;
