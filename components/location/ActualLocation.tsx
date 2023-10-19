import type { ActualLocationProps } from "@/types";

const ActualLocation = ({ loading, address }: ActualLocationProps) => {
  if (typeof address !== "string") address = "Compartilhe sua localização";
  if (loading) address = "Buscando...";

  return (
    <div className="w-full">
      <div className="whitespace-nowrap overflow-auto pl-2 w-full h-10 flex md:justify-center items-center rounded-lg bg-default-100">
        {`${address}`}
      </div>
    </div>
  );
};

export default ActualLocation;
