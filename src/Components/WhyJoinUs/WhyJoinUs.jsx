import WhyJoinUsImg from "@/assets/WhyJoinUs.jpg";
import Image from "next/image";
import WhyJoinUsSingleCard from "./WhyJoinUsSingleCard";

const WhyJoinUs = () => {
    return (
        <div className="relative">
            <Image
                className="w-full"
                width={1000}
                height={1000}
                src={WhyJoinUsImg}
                alt=""
            />
            <div className="absolute top-0 w-full bg-[#15210E] bg-opacity-65 h-full">
                <div className="max-w-7xl mx-auto text-center">

                    {/* title section start */}
                    <div>
                        <h2 className="text-xl text-[#4CAF50] font-bold lg:pt-44 pt-6">
                            Why Join Us
                        </h2>

                        <h2 className="text-2xl lg:text-4xl text-white font-extrabold lg:mt-6 mt-3">
                            Sustainable actions, hopeful reactions
                        </h2>

                        <p className="text-black lg:text-gray-300 font-medium text-sm mt-8 lg:mt-6 mx-2 lg:mx-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                            <br />
                            mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    {/* title section end */}

                    {/* card section start */}
                    <WhyJoinUsSingleCard />
                    {/* card section end */}

                </div>
            </div>
        </div>
    );
};

export default WhyJoinUs;