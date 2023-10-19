"use client";
import { useEffect, useState } from "react";
import type { LocationData } from "@/types";

import { Card, CardBody } from "@nextui-org/card";
import LocationSearch from "./LocationSearch";
import ActualLocation from "./ActualLocation";
import LocationActions from "./LocationActions";

const Location = () => {
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [locationData, setLocationData] = useState({} as LocationData);

  useEffect(() => {
    if (typeof locationData.address === "string") {
      setDisabled(false);
      setLoading(false);
    } else {
      setDisabled(true);
    }
  }, [locationData]);

  return (
    <Card className="w-full flex max-w-4xl p-3" radius="none">
      <CardBody className="md:p-3 p-0 gap-4 flex items-center w-full">
        <LocationSearch setLoading={setLoading} setLocation={setLocationData} />
        <ActualLocation loading={loading} address={locationData?.address} />
        <LocationActions erase={setLocationData} data={locationData} disabled={disabled} />
      </CardBody>
    </Card>
  );
};

export default Location;
