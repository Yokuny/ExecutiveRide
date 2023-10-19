import { LocationData } from "@/types";

const extractRoute = (locationData: LocationData[]) => {
  const route = {
    origin: String(),
    destination: String(),
    intermediates: Array<String>(),
  };
  const lastItem = locationData.length - 1;

  route.origin = `${locationData[0].latitude},${locationData[0].longitude}`;
  route.destination = `${locationData[lastItem].latitude},${locationData[lastItem].longitude}`;
  route.intermediates = locationData
    .slice(1, lastItem)
    .map((latLon) => `${latLon.latitude},${latLon.longitude}`);

  return route;
};

export default extractRoute;
