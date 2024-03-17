import Image from "next/image";
import HandPlant from "@/assets/HandPlant.png";
import { MdRestore } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";

const MorePeopleTextSection = () => {
    return (
        <div className="grid lg:grid-cols-2">

            <div>
                <Image
                    className="w-full"
                    width={1000}
                    height={1000}
                    src={HandPlant}
                    alt=""
                />
            </div>

            <div className="px-20 pt-24">
                <h2 className="text-4xl font-semibold">
                    <span className="border-t-4 border-[#4CAF50] pt-3">Mo</span>re People, More impact
                </h2>
                <p className="text-gray-500 my-4">
                    Sagittis fringilla morbi leo feugiat ultricies lacinia dignissim habitasse pede. Elementum magnis praesent pulvinar dictum fusce hac nullam ipsum semper feugiat consectetur.
                </p>

                {/* icon section start */}
                <div className="mt-8">

                    <div className="flex my-5">
                        <div className="bg-[#4CAF50] w-fit h-fit p-3 text-white mr-4 rounded-sm">
                            <MdRestore className="text-3xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">
                                Restore Nature
                            </h2>
                            <p className="mt-2 text-gray-500">
                                Aptent nisl aenean urna scelerisque sollicitudin praesent. Velit sit sociosqu
                                <br />
                                elementum venenatis tellus.
                            </p>
                        </div>
                    </div>

                    <div className="flex my-5">
                        <div className="bg-[#4CAF50] w-fit h-fit p-3 text-white mr-4 rounded-sm">
                            <FaHandHoldingHeart className="text-3xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">
                                Unite The Society
                            </h2>
                            <p className="mt-2 text-gray-500">
                                Aptent nisl aenean urna scelerisque sollicitudin praesent. Velit sit sociosqu
                                <br />
                                elementum venenatis tellus.
                            </p>
                        </div>
                    </div>

                    <div className="flex my-5">
                        <div className="bg-[#4CAF50] w-fit h-fit p-3 text-white mr-4 rounded-sm">
                            <LuHeartHandshake className="text-3xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">
                                Make Big Impact
                            </h2>
                            <p className="mt-2 text-gray-500">
                                Aptent nisl aenean urna scelerisque sollicitudin praesent. Velit sit sociosqu
                                <br />
                                elementum venenatis tellus.
                            </p>
                        </div>
                    </div>

                </div>
                {/* icon section end */}

            </div>

        </div>
    );
};

export default MorePeopleTextSection;