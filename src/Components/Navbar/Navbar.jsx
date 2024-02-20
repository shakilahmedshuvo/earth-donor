import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="bg-black bg-opacity-30 text-white fixed z-30 top-0 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-12 pt-6 pb-1">

                <div className="col-span-2 flex items-center">
                    <h2 className="text-2xl font-semibold ">
                        Earth Donor
                    </h2>
                </div>

                <div className="flex items-center justify-center col-span-8 text-sm font-medium">
                    <h2 className="mx-5 py-3 border-b-4 border-green-600 h-12">
                        HOME
                    </h2>
                    <h2 className="flex items-center mx-5 py-3">
                        ABOUT US <IoIosArrowDown className="ms-2" />
                    </h2>
                    <h2 className="flex items-center mx-5 py-3">
                        CAUSES <IoIosArrowDown className="ms-2" />
                    </h2>
                    <h2 className="mx-5 py-3">
                        CONTACT US
                    </h2>
                    <h2 className="flex items-center mx-5 py-3">
                        DONATORS <IoIosArrowDown className="ms-2" />
                    </h2>
                </div>

                <div className="col-span-2 text-center font-medium">
                    <button className="bg-[#FFC107] py-2 px-6 rounded-sm text-black font-medium">
                        Donate Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;