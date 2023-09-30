import { CardBody } from "@nextui-org/card";
import PlaceItem from "./PlaceItem";

const ListItems = () => {
  return (
    <CardBody className="p-3 flex items-center gap-4 w-full">
      <PlaceItem firstAddress="Av. Evandi Americo Comarela, 257" secondAddress="Rua 65, Bairro São Pedro" />
      <PlaceItem firstAddress="Rua Santo Espedito, nº 122" secondAddress="Rua Almirante Junior, Vitoria" />
      <PlaceItem firstAddress="Rua Castro Alves, nº 25" secondAddress="" />
    </CardBody>
  );
};

export default ListItems;
