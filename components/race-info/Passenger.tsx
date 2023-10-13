import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { ConfirmIcon, UserIcon } from "../icons";
import PassagerBody from "./PassengerBody";

const Passager = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { currPassager } = useGlobalContext();
  const [passager, setPassager] = useState("-");

  useEffect(() => {
    setPassager(currPassager);
  }, [currPassager]);

  return (
    <>
      <Button
        className="sm:h-12 h-14 sm:px-5 px-2 md:w-1/5 w-2/6 min-w-fit bg-default-100 sm:text-sm text-xs sm:flex-row-reverse flex-col items-center sm:gap-2 gap-1"
        onClick={onOpen}>
        <span className="whitespace-nowrap overflow-hidden md:max-w-none max-w-[76px]">{passager}</span>
        <UserIcon size={16} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Lista de passageiros</ModalHeader>
              <PassagerBody />
              <ModalFooter>
                <Button
                  className="hover:opacity-90 bg-default-200 text-lg rounded-md"
                  onPress={onClose}
                  size="sm"
                  aria-label="Close add person">
                  &#215;
                </Button>
                <Button
                  className="hover:opacity-90 w-1/4 rounded-md"
                  onPress={() => {
                    onClose();
                  }}
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

export default Passager;
