import { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context";
import getRouteDistance from "@/utils/getRouteDistance";
import type { RouteDistanceAndDuration } from "@/types";

import { Modal, ModalContent, ModalHeader, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { LocationIcon, ConfirmIcon } from "../icons";
import DistanceBody from "./DistanceBody";

const Distance = () => {
  const { location } = useGlobalContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [distance, setDistance] = useState<string | number>(0);
  const [routeData, setRouteData] = useState<RouteDistanceAndDuration | null>(null);

  const handleGetDistance = useCallback(async () => {
    setLoading(true);
    try {
      const routeData = await getRouteDistance(location);

      if (typeof routeData === "number") setDistance(routeData);
      else {
        setDistance(routeData.expectedDuration);
        setRouteData(routeData);
      }
    } finally {
      setLoading(false);
    }
  }, [location]);

  useEffect(() => {
    if (location.length === 1) setLoading(true);
    else if (location.length > 1) handleGetDistance();
  }, [location, handleGetDistance]);

  return (
    <>
      <Button
        onClick={() => routeData && onOpenChange()}
        className="sm:h-12 h-14 sm:px-5 px-2 md:w-1/5 w-2/6 min-w-fit  bg-default-100 sm:text-sm text-xs sm:flex-row-reverse flex-col items-center sm:gap-2 gap-1">
        <span>{distance} km</span>
        {loading ? <Spinner size="sm" color="default" /> : <LocationIcon size={14} />}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Corrida</ModalHeader>
              <DistanceBody data={routeData} />
              <ModalFooter>
                <Button
                  className="hover:opacity-90 w-1/4 rounded-md"
                  onPress={() => {
                    onClose();
                  }}
                  color="primary"
                  size="sm"
                  aria-label="Confirm person">
                  <ConfirmIcon />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Distance;
