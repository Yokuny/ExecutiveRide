import { useState } from "react";
import { useGlobalContext } from "@/app/context";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { UserIcon } from "@/components/icons";
import { ConfirmIcon } from "../icons";

const AddPersonBtn = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { location, setLocation, setCurrPassager } = useGlobalContext();
  const [passager, setPassager] = useState("");

  const putPassagerName = () => {
    const allLocationData = location;
    allLocationData[location.length - 1].passenger = passager;
    setLocation(allLocationData);

    setCurrPassager(passager);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || e.target.value.length < 6 || e.target.value.length > 26) {
      e.target.style.borderBottom = "1px solid crimson";
      setPassager("");
    } else {
      e.target.style.borderBottom = "1px solid yellowgreen";
      setPassager(e.target.value);
    }
  };

  return (
    <>
      <Button
        className="hover:opacity-90 w-1/6 text-white"
        onPress={onOpen}
        color="success"
        size="sm"
        radius="sm"
        aria-label="Erase location">
        <UserIcon />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Adicionar passageiro</ModalHeader>
              <ModalBody className="flex gap-1">
                <Input
                  className="w-full h-full mb-3"
                  onChange={handleInput}
                  size="lg"
                  radius="sm"
                  placeholder="Digite o nome"
                />
                <p className="pl-1 text-sm">&#9654; Adicione o passageiro atual</p>
                <p className="pl-1 text-sm">&#9654; Pode ser alterado posteriormente</p>
              </ModalBody>
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
                    putPassagerName();
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

export default AddPersonBtn;
