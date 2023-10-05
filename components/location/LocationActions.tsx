import { Button } from "@nextui-org/button";
import { TrashIcon, ConfirmIcon } from "../icons";
import { LocationData } from "../../types/index";

interface LocationActionsProps {
  disabled: boolean;
  setLocation: (value: LocationData) => void;
}

const LocationActions = ({ setLocation, disabled }: LocationActionsProps) => {
  return (
    <div className="w-3/4 flex justify-center items-center gap-4">
      <Button
        className="hover:opacity-90 bg-default-200"
        onClick={() => setLocation({} as LocationData)}
        isDisabled={disabled}
        size="sm"
        radius="sm"
        aria-label="Erase location">
        <TrashIcon />
      </Button>
      <Button
        className="hover:opacity-90 w-2/5"
        isDisabled={disabled}
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
