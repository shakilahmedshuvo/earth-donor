import Plant from "@/assets/Plant.jpg";
import Image from "next/image";

const OnePlantNews = () => {
    return (
        <div className="bg-white shadow-xl h-fit border-b-8 border-[#4CAF50]">
            {/* img section start */}
            <div className="relative">
                <Image
                    className="w-full px-4 py-4"
                    width={1000}
                    height={1000}
                    src={Plant}
                    alt=""
                />
                <div className="absolute top-4 left-4">
                    <h2 className="w-fit bg-[#4CAF50] font-bold text-white px-5 py-2 text-sm">
                        Planting
                    </h2>
                </div>
            </div>
            {/* img section end */}

            {/* main text section start */}
            <div className="text-center px-2">
                <h2 className="text-2xl font-semibold my-2 hover:text-[#4CAF50] duration-300 cursor-pointer">
                    Tree Species Diversity Increases Likelihood of
                    Planting Success
                </h2>
                <p className="text-gray-500 pt-2 pb-6 text-sm">
                    Duis suscipit quam primis scelerisque est leo condimentum.
                    <br />
                    Commodo tellus magnis lobortis leo sagittis sodales platea fames
                    <br />
                    euismod. Tortor dis tincidunt nisl dictum
                </p>
                <hr />
                <p className="text-[#4CAF50] text-xs font-medium mt-3 mb-5 cursor-pointer">
                    August 18, 2023 ~ No Comments
                </p>
            </div>
            {/* main text section end */}
        </div>
    );
};

export default OnePlantNews;