import { LocationData } from "@/types";
import axios from "axios";
import bearerToken from "./bearerToken";

const API = process.env.NEXT_PUBLIC_API;

interface OriginAndDestin {
  origin: string[];
  destination: string[];
}

const locationPairs = (locationData: LocationData[]) => {
  const originAndDestin = {} as OriginAndDestin;
  for (let i = 0; i < locationData.length; i += 2) {
    originAndDestin.origin.push(`${locationData[i].latitude},${locationData[i].longitude}`);
    originAndDestin.destination.push(`${locationData[i + 1].latitude},${locationData[i + 1].longitude}`);
  }
  return originAndDestin;
};

const getAllPointsDistance = async (locations: LocationData[]) => {
  const originAndDestin = locationPairs(locations);
  console.log(originAndDestin);
  const body = JSON.stringify(originAndDestin);
  console.log(body);
  alert(JSON.stringify(body, null, 2));

  try {
    const response = await axios.post(`${API}/route/distance`, body, bearerToken);

    alert(JSON.stringify(response.data, null, 2));
    return "success inside";
  } catch (error) {
    return "erro inside";
  }
};

export default getAllPointsDistance;
