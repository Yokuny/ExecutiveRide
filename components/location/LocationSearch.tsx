import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import type { LocationData } from "@/types";
import { SearchIcon, LocationIcon } from "../icons";
import { getActualLocation, searchAddress } from "../../utils/getActualLocation";

interface LocationSearchProps {
  setLoading: (loading: boolean) => void;
  setLocation: (location: LocationData) => void;
}

const LocationSearch = ({ setLoading, setLocation }: LocationSearchProps) => {
  const [address, setAddress] = useState("");

  const handleGeoLocation = async () => {
    try {
      setLocation(await getActualLocation());
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLocation(await searchAddress(address));
    } finally {
      setAddress("");
      setLoading(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || e.target.value.length < 6) {
      e.target.style.borderBottom = "1px dashed crimson";
      setLocation({} as LocationData);
      setLoading(false);
    } else {
      e.target.style.border = "1px dotted transparent";
      setAddress(e.target.value);
    }
  };

  const putLoading = () => {
    setLocation({} as LocationData);
    setLoading(true);
  };

  return (
    <div className="w-full h-12 flex flex-row items-center gap-4">
      <form className="w-full h-full flex items-center rounded-lg overflow-hidden bg-default-100 hover:bg-default-200">
        <Input
          className="w-full h-full"
          onChange={handleInput}
          size="lg"
          radius="none"
          placeholder="Sua localização"
        />
        <Button
          type="reset"
          className="w-10 md:w-20 m-2"
          onClick={() => {
            putLoading();
            handleSearch();
          }}
          isIconOnly
          color="primary"
          size="md"
          radius="sm">
          <SearchIcon />
        </Button>
      </form>
      <div className="hidden md:block">|</div>
      <Button
        className="w-20 md:w-28 h-full hover:opacity-90"
        onClick={() => {
          putLoading();
          handleGeoLocation();
        }}
        isIconOnly
        color="primary"
        size="md"
        radius="sm"
        aria-label="Geo location">
        <LocationIcon />
      </Button>
    </div>
  );
};

export default LocationSearch;
