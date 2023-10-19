import type { DisabledProps } from "@/types";

import { CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import ListFooterSkeleton from "./ListFooterSkeleton";
import AddPersonBtn from "./AddPersonBtn";

const ListFooter = ({ disabled }: DisabledProps) => {
  return (
    <CardFooter className="w-3/4 flex justify-center items-center gap-4">
      {disabled ? (
        <ListFooterSkeleton />
      ) : (
        <>
          <Button
            className="hover:opacity-90 w-1/3 text-sm"
            color="primary"
            size="sm"
            radius="sm"
            aria-label="Confirm location">
            Finalizar
          </Button>
          <AddPersonBtn />
        </>
      )}
    </CardFooter>
  );
};

export default ListFooter;
