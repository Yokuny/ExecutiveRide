import { ActualLocationProps } from "@/types";

const ActualLocation = ({ address }: ActualLocationProps) => {
  if (address === "") address = "Compartilhe sua localização";

  return (
    <div className="w-full">
      <div className="w-full h-10 rounded-lg flex justify-center items-center bg-default-100">{address}</div>
    </div>
  );
};

export default ActualLocation;
