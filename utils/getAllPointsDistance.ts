// `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination}&origins=${origin}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
import { LocationData } from "@/types";

const distanceMatrix = async (origin: string, destination: string) => {
  return "asd";
};

const getAllPointsDistance = async (locations: LocationData[]) => {
  const locationsLength = locations.length - 1;
  const origin = `${locations[0].latitude},${locations[0].longitude}`;
  const destination = `${locations[locationsLength].latitude},${locations[locationsLength].longitude}`;
  try {
    const response = await distanceMatrix(origin, destination);
    return "success inside";
  } catch (error) {
    return "erro inside";
  }
};

export default getAllPointsDistance;
