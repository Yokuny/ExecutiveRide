import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import PlaceItem from "./PlaceItem";

const PlacesList = () => {
  return (
    <Card className="w-full flex max-w-4xl p-3">
      <CardBody className="p-3 flex items-center gap-4 w-full">
        <PlaceItem firstAddress="Av. Evandi Americo Comarela, 257" secondAddress="Rua 65, Bairro São Pedro" />
        <PlaceItem
          firstAddress="Rua Santo Espedito, nº 25"
          secondAddress="Rua Almirante Junior, Vitoria dos Cocais"
        />
        <PlaceItem firstAddress="Rua Castro Alves, nº 25" secondAddress="" />
      </CardBody>
      <CardFooter className="p-2 w-full md:gap-4 gap-3">
        <Button className="w-2/5 hover:opacity-90 bg-default-200">Limpar ultimo</Button>
        <Button className="w-full hover:opacity-90" color="primary">
          Finalizar corrida
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlacesList;
