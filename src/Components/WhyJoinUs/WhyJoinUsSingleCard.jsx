import Image from "next/image";
import WhyJoinUsCardImgOne from "@/assets/WhyJoinUsCardImgOne.jpg";
import WhyJoinUsCardImgTwo from "@/assets/WhyJoinUsCardImgTwo.jpg";
import WhyJoinUsCardImgThree from "@/assets/WhyJoinUsCardImgThree.jpg";

const WhyJoinUsSingleCard = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-5 mt-16 pb-10">

            {/* first card section start */}
            <div className="bg-white shadow-md group group/item cursor-pointer">
                <div className="overflow-hidden">
                    <Image
                        className="w-full group-hover:scale-125 duration-700"
                        width={1000}
                        height={1000}
                        src={WhyJoinUsCardImgOne}
                        alt=""
                    />
                </div>

                <div className="text-center py-5 px-4">
                    <h2 className="font-bold text-2xl">
                        We Prove Every Project
                    </h2>
                    <p className="text-gray-600 py-3">
                        Sociosqu gravida metus arcu curabitur diam pulvinar adipiscing. Vehicula maecenas magna tincidunt imperdiet libero.
                    </p>
                    <button className="bg-[#FFC107] py-2 px-6 rounded-sm text-black font-medium mt-5 mb-4">
                        Learn More
                    </button>
                </div>
            </div>
            {/* first card section end */}

            {/* second card section start */}
            <div className="bg-white shadow-md group group/item cursor-pointer">
                <div className="overflow-hidden">
                    <Image
                        className="w-full group-hover:scale-125 duration-700"
                        width={1000}
                        height={1000}
                        src={WhyJoinUsCardImgTwo}
                        alt=""
                    />
                </div>

                <div className="text-center py-5 px-4">
                    <h2 className="font-bold text-2xl">
                        We’re an Open Book
                    </h2>
                    <p className="text-gray-600 py-3">
                        Sociosqu gravida metus arcu curabitur diam pulvinar adipiscing. Vehicula maecenas magna tincidunt imperdiet libero.
                    </p>
                    <button className="bg-[#FFC107] py-2 px-6 rounded-sm text-black font-medium mt-5 mb-4">
                        Learn More
                    </button>
                </div>
            </div>
            {/* second card section end */}

            {/* third card section start */}
            <div className="bg-white shadow-md group group/item cursor-pointer">
                <div className="overflow-hidden">
                    <Image
                        className="w-full group-hover:scale-125 duration-700"
                        width={1000}
                        height={1000}
                        src={WhyJoinUsCardImgThree}
                        alt=""
                    />
                </div>

                <div className="text-center py-5 px-4">
                    <h2 className="font-bold text-2xl">
                        100% Goes to The Field
                    </h2>
                    <p className="text-gray-600 py-3">
                        Sociosqu gravida metus arcu curabitur diam pulvinar adipiscing. Vehicula maecenas magna tincidunt imperdiet libero.
                    </p>
                    <button className="bg-[#FFC107] py-2 px-6 rounded-sm text-black font-medium mt-5 mb-4">
                        Learn More
                    </button>
                </div>
            </div>
            {/* third card section end */}

        </div>
    );
};

export default WhyJoinUsSingleCard;