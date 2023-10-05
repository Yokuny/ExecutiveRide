import { LocationData } from "../types/index";

const locationByAddres = async (address: string) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAq9L4mRG9lPlDrplm2iHBgTg1HAQamiDU`
  );
  const data = await response.json();
  return data.results[0];
};

const searchAddress = async (address: string): Promise<LocationData> => {
  const locationData = await locationByAddres(address);

  if (!locationData) {
    return {} as LocationData;
  } else {
    const addressAndGeolocation = {
      address: locationData.formatted_address,
      latitude: locationData.geometry.location.lat,
      longitude: locationData.geometry.location.lng,
    };
    return addressAndGeolocation;
  }
};

export default searchAddress;
