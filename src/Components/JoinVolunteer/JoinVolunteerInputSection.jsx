import { MdArrowOutward } from "react-icons/md";

const JoinVolunteerInputSection = () => {
    return (
        <div className="col-span-2 border-t-8 border-[#4CAF50] bg-white shadow-lg mx-3 lg:mx-0">
            <div className="grid grid-cols-2 gap-3 px-12 py-16 text-sm">

                {/* name section */}
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

                {/* phone section */}
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

                {/* email section */}
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

                {/* Message section */}
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
                <button
                    className="col-span-2 w-full flex items-center text-center justify-center bg-[#FFC107] font-semibold py-3 mt-1">
                    Join Volunteer <MdArrowOutward className="text-lg ms-1" />
                </button>
                {/* submit btn end */}

            </div>
        </div>
    );
};

export default JoinVolunteerInputSection;