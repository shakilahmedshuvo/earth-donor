import Banner from "@/Components/Banner/Banner";
import BecomeVolunteer from "@/Components/BecomeVolunteer/BecomeVolunteer";
import HowItWorks from "@/Components/HowItWorks/HowItWorks";
import LetsTakeAction from "@/Components/LetsTakeAction/LetsTakeAction";
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
    </main>
  );
}