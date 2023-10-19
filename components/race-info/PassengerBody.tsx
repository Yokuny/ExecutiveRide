import { useGlobalContext } from "@/app/context";

import { ModalBody } from "@nextui-org/modal";
import PassengerItem from "./PassengerItem";

const PassengerBody = () => {
  const { location } = useGlobalContext();

  return (
    <ModalBody className="flex gap-4">
      {location.map((locationInfo, index) => (
        <div key={`passengerBody${index}`}>
          {index % 2 === 1 && (
            <div className="flex flex-col gap-1">
              <PassengerItem data={locationInfo} index={index} />
            </div>
          )}
        </div>
      ))}
    </ModalBody>
  );
};

export default PassengerBody;
