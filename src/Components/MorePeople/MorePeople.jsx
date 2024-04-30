"use client"
import MorePeopleSlider from "./MorePeopleSlider";
import MorePeopleTextSection from "./MorePeopleTextSection";

const MorePeople = () => {
    return (
        <div className="bg-[#F6F6F6] lg:mx-0 mx-2">
            {/* slider section start */}
            <MorePeopleSlider />
            {/* slider section end */}

            {/* more people text section start */}
            <MorePeopleTextSection />
            {/* more people text section end */}
        </div>
    );
};

export default MorePeople;