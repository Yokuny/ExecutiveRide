import UserCard from "@/components/user-card";
import AddreesInput from "@/components/address-input";
import MapCard from "@/components/map-card";
import PageIntro from "@/components/page-intro";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <PageIntro />
      <UserCard />
      <AddreesInput />
      <MapCard />
    </section>
  );
}
