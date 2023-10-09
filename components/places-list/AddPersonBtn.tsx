import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { UserIcon } from "@/components/icons";
import { ConfirmIcon, TrashIcon } from "../icons";

const AddPersonBtn = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
              <ModalBody className="flex gap-2">
                <Input className="w-full h-full" size="lg" radius="sm" placeholder="Digite o nome" />
                <p className="pl-1 text-sm">&#9654; Adicione os passageiros em sequencia</p>
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

export default AddPersonBtn;
