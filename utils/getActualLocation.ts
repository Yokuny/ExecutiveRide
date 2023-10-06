import { LocationData } from "../types/index";

const locationByLatLon = async (latitude: number, longitude: number) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAq9L4mRG9lPlDrplm2iHBgTg1HAQamiDU`
  );
  const data = await response.json();
  return data.results[0];
};

const locationByAddres = async (address: string) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAq9L4mRG9lPlDrplm2iHBgTg1HAQamiDU`
  );
  const data = await response.json();
  return data.results[0];
};

const locationFactory = (locationData: any): LocationData => {
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

export const getActualLocation = async (): Promise<LocationData> => {
  const geoCoords: Geolocation = await new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
  const { latitude, longitude } = geoCoords?.coords;
  const locationData = await locationByLatLon(latitude, longitude);
  return locationFactory(locationData);
};

export const searchAddress = async (address: string): Promise<LocationData> => {
  if (address === "") return {} as LocationData;

  const locationData = await locationByAddres(address);
  return locationFactory(locationData);
};

interface Geolocation {
  coords: {
    latitude: number;
    longitude: number;
  };
}