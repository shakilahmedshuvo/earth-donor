import Banner from "@/Components/Banner/Banner";
import BecomeVolunteer from "@/Components/BecomeVolunteer/BecomeVolunteer";
import HowItWorks from "@/Components/HowItWorks/HowItWorks";
import JoinVolunteer from "@/Components/JoinVolunteer/JoinVolunteer";
import LetsTakeAction from "@/Components/LetsTakeAction/LetsTakeAction";
import MorePeople from "@/Components/MorePeople/MorePeople";
import OrganizationYouCanTrust from "@/Components/OrganizationYouCanTrust/OrganizationYouCanTrust";
import WhoWeAre from "@/Components/WhoWeAre/WhoWeAre";
import WhyJoinUs from "@/Components/WhyJoinUs/WhyJoinUs";

export default function Home() {
  return (
    <main>
      <Banner />
      <WhoWeAre />
      <BecomeVolunteer />
      <LetsTakeAction />
      <HowItWorks />
      <WhyJoinUs />
      <OrganizationYouCanTrust />
      <MorePeople />
      <JoinVolunteer />
    </main>
  );
}