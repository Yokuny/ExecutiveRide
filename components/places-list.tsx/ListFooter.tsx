import { CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { EraseIcon } from "@/components/icons";

const ListFooter = () => {
  return (
    <CardFooter className="w-3/4 flex justify-center items-center gap-4">
      <Button
        className="hover:opacity-90 w-1/6 bg-default-200"
        size="sm"
        radius="sm"
        aria-label="Erase location">
        <EraseIcon />
      </Button>
      <Button
        className="hover:opacity-90 w-1/3 text-sm"
        color="primary"
        size="sm"
        radius="sm"
        aria-label="Confirm location">
        Finalizar
      </Button>
    </CardFooter>
  );
};

export default ListFooter;
