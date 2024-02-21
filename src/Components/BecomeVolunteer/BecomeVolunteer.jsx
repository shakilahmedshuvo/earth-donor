import volunteerImg from "@/assets/Volunteer.png"
import Image from "next/image";

const BecomeVolunteer = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                {/* hr line */}
                <hr />

                {/* number section start */}
                <div className="grid grid-cols-4 text-6xl text-[#4CAF50] font-bold py-10">

                    <div className="text-center">
                        <h2>$256M</h2>
                        <p className="text-lg text-gray-500 mt-1">
                            We've Helped Raise
                        </p>
                    </div>

                    <div className="text-center">
                        <h2>37k+</h2>
                        <p className="text-lg text-gray-500 mt-1">
                            Projects Funded
                        </p>
                    </div>

                    <div className="text-center">
                        <h2>40+</h2>
                        <p className="text-lg text-gray-500 mt-1">
                            Countries Worldwide
                        </p>
                    </div>

                    <div className="text-center">
                        <h2>89k+</h2>
                        <p className="text-lg text-gray-500 mt-1">
                            Volunteers Connected
                        </p>
                    </div>

                </div>
                {/* number section end */}
            </div>


            {/* img section start */}
            <div className="relative">
                <Image
                    className="w-full"
                    width={1900}
                    height={100}
                    src={volunteerImg}
                    alt=""
                />

                <div className="absolute top-0 text-white bg-[#192515] bg-opacity-60 w-full h-full">

                    
                </div>
            </div>
            {/* img section end */}
        </div>
    );
};

export default BecomeVolunteer;