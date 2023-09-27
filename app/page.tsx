import Location from "@/components/location/Location";
import PlacesList from "@/components/places-list.tsx/PlacesList";
import UserCard from "@/components/user-card/UserCard";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Location />
      <PlacesList />
      <UserCard />
    </section>
  );
}
