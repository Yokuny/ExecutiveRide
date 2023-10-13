import type { LocationData } from "../types";

const twoPointsDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const partialResult =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const centralArch = 2 * Math.atan2(Math.sqrt(partialResult), Math.sqrt(1 - partialResult));

  const earthRadius = 6390;
  return earthRadius * centralArch;
};

const sumLatLonPoints = (points: LocationData[]) => {
  let totalDistance = 0;

  for (let i = 1; i < points.length; i++) {
    const prevPoint = points[i - 1];
    const currentPoint = points[i];
    const distance = twoPointsDistance(
      prevPoint.latitude,
      prevPoint.longitude,
      currentPoint.latitude,
      currentPoint.longitude
    );
    totalDistance += distance;
  }

  return totalDistance;
};

export default sumLatLonPoints;
