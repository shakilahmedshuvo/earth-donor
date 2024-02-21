import Banner from "@/Components/Banner/Banner";
import BecomeVolunteer from "@/Components/BecomeVolunteer/BecomeVolunteer";
import LetsTakeAction from "@/Components/LetsTakeAction/LetsTakeAction";
import WhoWeAre from "@/Components/WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Banner />
      <WhoWeAre />
      <BecomeVolunteer />
      <LetsTakeAction />
    </main>
  );
}