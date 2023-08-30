import NextImage from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import { Card, CardFooter } from "@nextui-org/card";
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyAq9L4mRG9lPlDrplm2iHBgTg1HAQamiDU";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Escolha seu&nbsp;</h1>
        <h1 className={title({ color: "green" })}>destino&nbsp;</h1>
        <h2 className={subtitle({ class: "mt-4" })}>Seu aplicativo</h2>
      </div>
      <div className="flex justify-start container mx-auto max-w-4xl">
        <User
          name="Nome do motorista"
          description="Motorista particular"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 container mx-auto max-w-4xl">
        <Input isRequired type="text" label="ponto atual" radius="sm" className="md:w-96" />
        <Input isRequired type="text" label="destino" radius="sm" />
      </div>

      <Card isFooterBlurred className="w-full flex items-center max-w-4xl md:p-10 py-4 pb-12">
        <Image
          as={NextImage}
          width={1400}
          height={600}
          className="w-full"
          src={`https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=13&size=700x300&key=${API_KEY}`}
          alt="Taxi"
        />
        <CardFooter className="absolute flex justify-center bottom-0 z-10 border-t-1 dark:border-default-100 border-default-60 dark:bg-black/10 bg-white/10">
          <Button radius="sm" size="sm" color="success" className="w-80 font-bold text-slate-100 text-sm">
            começar
          </Button>
        </CardFooter>
      </Card>

      {/* <Card className="w-full flex items-center max-w-4xl md:p-10 py-4"></Card> */}
    </section>
  );
}
