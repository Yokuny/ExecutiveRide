import { Input } from "@nextui-org/input";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { LocationIcon } from "./icons";

const AdrressInput = () => {
  return (
    <>
      <Card className="w-full flex max-w-4xl p-3">
        <CardBody className="p-0 h-12 flex flex-row items-center gap-4">
          <Input
            className="w-full h-full"
            placeholder="Digite sua localização"
            aria-label="Sua localização"
            size="lg"
          />
          <div className="hidden md:block">ou</div>
          <Button className="w-20 md:w-28 h-full" isIconOnly color="primary" aria-label="Geo location">
            <LocationIcon />
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default AdrressInput;
