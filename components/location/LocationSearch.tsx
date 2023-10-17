import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import type { LocationData, LocationSearchProps } from "@/types";
import { SearchIcon, TrackIcon } from "../icons";
import { getActualLocation, searchAddress } from "../../utils/getActualLocation";

const LocationSearch = ({ setLoading, setLocation }: LocationSearchProps) => {
  const [address, setAddress] = useState("");
  const [inputValue, setInputValue] = useState("");

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
      setInputValue("");
      setAddress("");
      setLoading(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value === "" || e.target.value.length < 6) {
      setLocation({} as LocationData);
      setLoading(false);
    } else {
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
          value={inputValue}
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
        <TrackIcon />
      </Button>
    </div>
  );
};

export default LocationSearch;
