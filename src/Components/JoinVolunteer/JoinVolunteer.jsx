import JoinVolunteerImg from "@/assets/JoinVolunteer.jpg";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const JoinVolunteer = () => {
    return (
        <div className="relative my-20">
            <Image
                className="w-full"
                width={1000}
                height={1000}
                src={JoinVolunteerImg}
                alt=""
            />

            <div className="bg-[#1F3E1F] top-0 bg-opacity-65 absolute w-full h-full">
                <div className="max-w-7xl mx-auto grid grid-cols-5 w-full mt-52">

                    {/* input field section start */}
                    <div className="col-span-2 border-t-8 border-[#4CAF50] bg-white shadow-lg">
                        <div className="grid grid-cols-2 gap-3 px-12 py-16 text-sm">

                            <div>
                                <h2 className="mb-1">
                                    Name
                                </h2>
                                <input
                                    className="px-2 py-2 focus-within:outline-none border border-gray-300 w-full"
                                    type="text"
                                    name="name"
                                    placeholder="Name" />
                            </div>

                            <div>
                                <h2 className="mb-1">
                                    Phone
                                </h2>
                                <input
                                    className="px-2 py-2 focus-within:outline-none border border-gray-300 w-full"
                                    type="phone"
                                    name="phone"
                                    placeholder="Phone" />
                            </div>

                            <div className="col-span-2">
                                <h2 className="mb-1">
                                    Email
                                </h2>
                                <input
                                    className="px-2 py-2 focus-within:outline-none border border-gray-300 w-full"
                                    type="email"
                                    name="email"
                                    placeholder="Email" />
                            </div>

                            <div className="col-span-2">
                                <h2 className="mb-1">
                                    Message
                                </h2>
                                <textarea
                                    className="w-full focus-within:outline-none border px-2 py-2 h-28"
                                    name="message"
                                    placeholder="Message" />
                            </div>

                            {/* submit btn start */}
                            <button className="col-span-2 w-full flex items-center text-center justify-center bg-[#FFC107] font-semibold py-3 mt-1">
                                Join Volunteer <MdArrowOutward className="text-lg ms-1" />
                            </button>
                            {/* submit btn end */}

                        </div>
                    </div>
                    {/* input field section end */}

                </div>

            </div>
        </div>
    );
};

export default JoinVolunteer;