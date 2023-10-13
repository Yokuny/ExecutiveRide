import { Button } from "@nextui-org/button";
import { FileIcon } from "../icons";
import { useGlobalContext } from "@/app/context";

const RunData = () => {
  const { location } = useGlobalContext();

  const showLocation = () => {
    alert(JSON.stringify(location, null, 2));
  };

  return (
    <Button
      className="sm:h-12 h-14 sm:px-5 px-2 md:w-1/5 w-2/6 min-w-fit bg-default-100 sm:text-sm text-xs sm:flex-row-reverse flex-col items-center sm:gap-2 gap-1"
      onClick={showLocation}>
      <span>Registro</span>
      <FileIcon />
    </Button>
  );
};

export default RunData;
