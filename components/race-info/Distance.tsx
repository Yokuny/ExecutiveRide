import { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { LocationIcon } from "../icons";
import getAllPointsDistance from "@/utils/getAllPointsDistance";

const Distance = () => {
  const { location } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [distance, setDistance] = useState<string | number>(0);

  const handleGetDistance = useCallback(async () => {
    setLoading(true);
    try {
      setDistance(await getAllPointsDistance(location));
    } catch (err) {
      setDistance("error");
    } finally {
      setLoading(false);
    }
  }, [location]);

  useEffect(() => {
    if (location.length === 1) setLoading(true);
    else if (location.length % 2 === 0) handleGetDistance();
  }, [location, handleGetDistance]);

  return (
    <Button
      className="sm:h-12 h-14 sm:px-5 px-2 md:w-1/5 w-2/6 min-w-fit  bg-default-100 sm:text-sm text-xs sm:flex-row-reverse flex-col items-center sm:gap-2 gap-1"
      onClick={handleGetDistance}>
      <span>{distance} km</span>
      {loading ? <Spinner size="sm" color="default" /> : <LocationIcon size={14} />}
    </Button>
  );
};

export default Distance;
