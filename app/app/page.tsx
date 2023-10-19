import Location from "@/components/location/Location";
import PlacesList from "@/components/places-list/PlacesList";
import RaceInfo from "@/components/race-info/RaceInfo";
import UserCard from "@/components/user-card/UserCard";

export default async function Home() {
  return (
    <section className="gap-3 flex flex-col items-center">
      <Location />
      <RaceInfo />
      <PlacesList />
      <UserCard />
    </section>
  );
}
