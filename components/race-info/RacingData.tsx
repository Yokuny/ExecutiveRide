import { useGlobalContext } from "@/app/context";

import { Modal, ModalContent, ModalHeader, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { ConfirmIcon, FileIcon } from "../icons";
import RacingDataBody from "./RacingDataBody";

const RacingData = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { currPassager, location } = useGlobalContext();

  return (
    <>
      <Button
        className="sm:h-12 h-14 sm:px-5 px-2 md:w-1/5 w-2/6 min-w-fit bg-default-100 sm:text-sm text-xs sm:flex-row-reverse flex-col items-center sm:gap-2 gap-1"
        onClick={() => {
          if (location.length % 2 === 0) onOpen();
        }}>
        <span>Registro</span>
        <FileIcon />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Informações</ModalHeader>
              <RacingDataBody />
              <ModalFooter>
                <Button
                  className="hover:opacity-90 w-1/4 rounded-md"
                  onPress={onClose}
                  color="primary"
                  size="sm"
                  aria-label="Confirm person">
                  <ConfirmIcon />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RacingData;
