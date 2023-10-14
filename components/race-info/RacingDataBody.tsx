import { ModalBody } from "@nextui-org/modal";
import { useGlobalContext } from "@/app/context";
import RacingDataItem from "./RacingDataItem";

const RacingDataBody = () => {
  const { location } = useGlobalContext();

  return (
    <ModalBody className="flex gap-6">
      {location.map((locationInfo, index) => (
        <>
          {index % 2 === 1 && (
            <div className="flex flex-col gap-1" key={index}>
              <RacingDataItem firstPoint={location[index - 1]} data={locationInfo} />
            </div>
          )}
        </>
      ))}
    </ModalBody>
  );
};
export default RacingDataBody;
