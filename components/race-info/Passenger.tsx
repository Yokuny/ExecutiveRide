import { Button } from "@nextui-org/button";
import { UserIcon } from "../icons";

const Passager = () => {
  return (
    <Button
      className="sm:h-12 h-14 sm:px-5 px-2 min-w-fit bg-default-100 sm:text-sm text-xs sm:flex-row-reverse flex-col items-center sm:gap-2 gap-1"
      onClick={() => {}}>
      <span className="whitespace-nowrap overflow-hidden">Felipe Rangel</span>
      <UserIcon size={16} />
    </Button>
  );
};

export default Passager;
