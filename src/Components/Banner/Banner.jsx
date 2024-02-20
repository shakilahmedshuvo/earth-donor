import Image from "next/image";
import banner from "@/assets/banner.jpg"

const Banner = () => {
    return (
        <div className="relative">
            <div className="">
                <Image
                    className="w-full"
                    height={1200}
                    width={1800}
                    src={banner}
                    alt="" />
            </div>

            <div className="absolute top-0 text-white pt-56 mx-auto w-full h-full text-center bg-black bg-opacity-45">

                <h2 className="text-2xl text-center">
                    Make the World Better
                </h2>

                <h2 className="text-6xl font-semibold mt-5">
                    Reduce Your Footprint, Amplify
                    <br />
                    Your Impact
                </h2>

                <p className="mt-8 w-full">
                    Luctus morbi netus lacinia sagittis fringilla viverra litora mi pellentesque adipiscing. Vitae
                    <br />
                    diam volutpat ultricies facilisis quisque dignissim.
                </p>

                <div>
                    <button className="bg-[#FFC107]">
                        Get Involved
                    </button>
                    <button>
                        Learn More
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Banner;