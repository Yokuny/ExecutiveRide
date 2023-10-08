import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context";
import { CardBody } from "@nextui-org/card";
import type { ListItem, ListItemsProps } from "@/types";
import PlaceItem from "./PlaceItem";
import ListItemsSkeleton from "./ListItemsSkeleton";

const ListItems = ({ disabled }: ListItemsProps) => {
  const { location } = useGlobalContext();
  const [places, setPlaces] = useState<ListItem["listItems"]>([]);

  useEffect(() => {
    const abPointsFactory = (positionA: string, positionB: string) => ({
      firstAddress: positionA,
      secondAddress: positionB,
    });

    const listItems = [];
    for (let i = 0; i < location.length; i += 2) {
      listItems.push(abPointsFactory(location[i].address, location[i + 1]?.address));
    }

    setPlaces(listItems);
  }, [location]);

  return (
    <CardBody className="p-3 flex items-center gap-4 w-full">
      {disabled ? (
        <ListItemsSkeleton />
      ) : (
        <>
          {places.map((place, index) => (
            <PlaceItem key={index} firstAddress={place.firstAddress} secondAddress={place.secondAddress} />
          ))}
        </>
      )}
    </CardBody>
  );
};

export default ListItems;
