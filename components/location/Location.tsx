import { Card, CardBody } from "@nextui-org/card";
import LocationSearch from "./LocationSearch";
import ActualLocation from "./ActualLocation";
import LocationActions from "./LocationActions";

const Location = () => {
  return (
    <Card className="w-full flex max-w-4xl p-3">
      <CardBody className="p-0 gap-4 flex items-center w-full">
        <LocationSearch />
        <ActualLocation address="" />
        <LocationActions />
      </CardBody>
    </Card>
  );
};

export default Location;
