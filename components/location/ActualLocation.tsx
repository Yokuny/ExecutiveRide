import { ActualLocationProps } from "@/types";

const ActualLocation = ({ address }: ActualLocationProps) => {
  if (address) {
    return (
      <div className="w-full">
        <div className="w-full h-10 rounded-lg flex justify-center items-center bg-default-100">
          {address}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="text-default-400 w-full h-10 rounded-lg flex justify-center items-center bg-default-100">
        Compartilhe sua localização
      </div>
    </div>
  );
};

export default ActualLocation;
