import { useGlobalContext } from "@/app/context";
import { ModalBody } from "@nextui-org/modal";
import PassengerItem from "./PassengerItem";
import type { passengerData } from "@/types";

const PassagerBody = () => {
  const { location } = useGlobalContext();

  return (
    <ModalBody className="flex gap-4">
      {location.map((data, index) => (
        <>
          {index % 2 === 1 && (
            <div className="flex flex-col gap-1" key={index}>
              <PassengerItem data={data as passengerData} index={index} />
            </div>
          )}
        </>
      ))}
    </ModalBody>
  );
};

export default PassagerBody;
