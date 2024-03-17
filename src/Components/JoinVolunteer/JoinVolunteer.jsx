import JoinVolunteerImg from "@/assets/JoinVolunteer.jpg";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import JoinVolunteerInputSection from "./JoinVolunteerInputSection";
import JoinVolunteerTextSection from "./JoinVolunteerTextSection";

const JoinVolunteer = () => {
    return (
        <div className="relative mt-20">
            <Image
                className="w-full"
                width={1000}
                height={1000}
                src={JoinVolunteerImg}
                alt=""
            />

            <div className="bg-[#1F3E1F] top-0 bg-opacity-65 absolute w-full h-full">
                <div
                    className="max-w-7xl mx-auto lg:grid grid-cols-5 w-full mt-52">

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