import JoinVolunteerImg from "@/assets/JoinVolunteer.jpg";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import JoinVolunteerInputSection from "./JoinVolunteerInputSection";
import JoinVolunteerTextSection from "./JoinVolunteerTextSection";

const JoinVolunteer = () => {
    return (
        <div className="relative lg:pt-20 pt-16">
            <Image
                className="w-full lg:block hidden"
                width={1000}
                height={1000}
                src={JoinVolunteerImg}
                alt=""
            />

            <div className="lg:bg-[#1F3E1F] lg:top-0 lg:bg-opacity-65 lg:absolute w-full h-full">
                <div
                    className="max-w-7xl mx-auto lg:grid grid-cols-5 w-full lg:mt-52 mt-0">

                    {/* input field section start */}
                    <JoinVolunteerInputSection />
                    {/* input field section end */}

                    {/* text section start */}
                    <JoinVolunteerTextSection />
                    {/* text section end */}

                </div>
            </div>
        </div>
    );
};

export default JoinVolunteer;