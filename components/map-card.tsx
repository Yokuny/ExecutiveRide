import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyAq9L4mRG9lPlDrplm2iHBgTg1HAQamiDU";
const MapCard = () => {
  return (
    <>
      <Card isFooterBlurred className="w-full flex items-center max-w-4xl md:p-10 py-4 pb-12">
        {/* <Image
          as={NextImage}
          width={700}
          height={300}
          className="w-full"
          src={`https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=13&size=700x300&key=${API_KEY}`}
          alt="Taxi"
        /> */}
        <CardFooter className="absolute flex justify-center bottom-0 z-10 border-t-1 dark:border-default-100 border-default-60 dark:bg-black/10 bg-white/10">
          <Button radius="sm" size="sm" color="success" className="w-80 font-bold text-slate-100 text-sm">
            começar
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default MapCard;
