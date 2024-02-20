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

            <div className="absolute top-0 text-white">

            </div>
        </div>
    );
};

export default Banner;