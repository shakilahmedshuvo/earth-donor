import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#0D1F0E] mt-64 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-6 pt-20">

                    <div>
                        <h2 className="font-semibold text-lg pb-4">
                            Explore
                        </h2>
                        <div className="text-gray-200 font-light space-y-3 text-sm">
                            <p className="hover:text-gray-50 cursor-pointer duration-300">
                                Mission
                            </p>
                            <p className="hover:text-gray-50 cursor-pointer duration-300">
                                Accountability
                            </p>
                            <p className="hover:text-gray-50 cursor-pointer duration-300">
                                Newsroom
                            </p>
                            <p className="hover:text-gray-50 cursor-pointer duration-300">
                                Find Events
                            </p>
                            <p className="hover:text-gray-50 cursor-pointer duration-300">
                                Volunteer
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-semibold text-lg pb-4">
                            Company
                        </h2>
                        <div className="text-gray-200 font-light space-y-3 text-sm">
                            <p className="hover:text-gray-50 cursor-pointer duration-300">
                                About Us
                            </p>
                            <p className="hover:text-gray-50 cursor-pointer duration-300">
                                Contact
                            </p>
                            <p className="hover:text-gray-50 cursor-pointer duration-300">
                                Careers
                            </p>
                            <p className="hover:text-gray-50 cursor-pointer duration-300">
                                FAQs
                            </p>
                            <p className="hover:text-gray-50 cursor-pointer duration-300">
                                Partnership
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <h2 className="font-semibold text-lg pb-4">
                            Contacts
                        </h2>
                        <div className="text-gray-200 font-light space-y-3 text-sm">
                            <p className="hover:text-gray-50 cursor-pointer duration-300 flex items-center">
                                <FaLocationDot className="mr-2 text-[#4CAF50]" />Dhaka, Bangladesh
                            </p>
                            <p className="hover:text-gray-50 cursor-pointer duration-300 flex items-center">
                                <IoMdMail className="mr-2 text-[#4CAF50]" />  support@yourdomain.tld
                            </p>
                            <p className="hover:text-gray-50 cursor-pointer duration-300 flex items-center">
                                <FaPhoneAlt className="mr-2 text-[#4CAF50]" /> +0123 456 789
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <h2 className="font-semibold text-lg pb-4">
                            Subscribe Newsletter
                        </h2>
                        <div className="text-gray-200 font-light space-y-3 text-sm hover:text-gray-50 cursor-pointer duration-300">
                            Signup our newsletter to get update information,
                            <br />
                            news & insight
                        </div>

                        <div className="grid grid-cols-6 gap-2 mt-10">
                            <input
                                className="col-span-4 text-sm py-2 px-4 w-[100%] text-black focus-within:outline-none"
                                type="email"
                                name="email"
                                placeholder="Enter Your Email Address" />
                            <button className="col-span-2 bg-[#FFC107] py-2 px-6 rounded-sm text-black font-medium">
                                Sign In
                            </button>
                        </div>

                    </div>
                </div>

                {/* hr line */}
                <hr className="border border-gray-800 mt-14 mb-8" />

                <div className="grid grid-cols-6">
                    <div>
                        <h2 className="font-semibold text-xl pb-4">
                            Earth Donor
                        </h2>
                    </div>

                    <div className="col-span-5">
                        <p className="text-gray-300 text-sm font-normal">
                            Iaculis ex auctor quisque ac vivamus nullam nostra suspendisse egestas ultrices. Augue ex amet elit vehicula porttitor primis aliquet massa ligula tincidunt.
                            <br />
                            Tempus ultrices nostra elementum diam leo litora turpis odio dictum dignissim. Metus inceptos eleifend vehicula arcu himenaeos massa diam tristique
                            <br />
                            litora. Tempor potenti himenaeos neque praesent aenean molestie parturient scelerisque pulvinar.
                        </p>
                        <p className="text-xs text-gray-300 my-10">
                            Copyright © 2024 Earth Donor, All rights reserved. Powered by SHS
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;