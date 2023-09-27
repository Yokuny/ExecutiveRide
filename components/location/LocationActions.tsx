import { Button } from "@nextui-org/button";
import { TrashIcon, ConfirmIcon } from "../icons";

const LocationActions = () => {
  return (
    <div className="w-3/4 flex justify-center items-center gap-4">
      <Button className="hover:opacity-90 bg-default-200" size="sm" radius="sm" aria-label="Erase location">
        <TrashIcon />
      </Button>
      <Button
        className="hover:opacity-90 w-2/5"
        color="primary"
        size="sm"
        radius="sm"
        aria-label="Confirm location">
        <ConfirmIcon />
      </Button>
    </div>
  );
};

export default LocationActions;
