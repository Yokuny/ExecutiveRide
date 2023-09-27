import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { LocationIcon } from "../icons";

const LocationSearch = () => {
  return (
    <div className="w-full h-12 flex flex-row items-center gap-4">
      <Input
        className="w-full h-full"
        placeholder="Digite sua localização"
        aria-label="Sua localização"
        radius="sm"
        size="lg"
      />
      <div className="hidden md:block">ou</div>
      <Button
        className="w-20 md:w-28 h-full hover:opacity-90"
        isIconOnly
        color="primary"
        radius="sm"
        aria-label="Geo location">
        <LocationIcon />
      </Button>
    </div>
  );
};

export default LocationSearch;
