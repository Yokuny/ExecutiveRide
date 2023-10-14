import ElapsedTime from "./ElapsedTime";
import Distance from "./Distance";
import RacingData from "./RacingData";
import Passenger from "./Passenger";

const RaceInfoMenuItems = () => {
  return (
    <>
      <ElapsedTime />
      <Distance />
      <RacingData />
      <Passenger />
    </>
  );
};

export default RaceInfoMenuItems;
