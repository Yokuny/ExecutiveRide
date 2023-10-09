import ElapsedTime from "./ElapsedTime";
import Distance from "./Distance";
import RunData from "./RunData";
import Passenger from "./Passenger";

const RaceInfoMenuItems = () => {
  return (
    <>
      <ElapsedTime />
      <Distance />
      <RunData />
      <Passenger />
    </>
  );
};

export default RaceInfoMenuItems;
