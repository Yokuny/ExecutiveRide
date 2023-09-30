import { Card } from "@nextui-org/card";
import ListFooter from "./ListFooter";
import ListItems from "./ListItems";

const PlacesList = () => {
  return (
    <Card className="w-full flex items-center max-w-4xl p-3">
      <ListItems />
      <ListFooter />
    </Card>
  );
};

export default PlacesList;
