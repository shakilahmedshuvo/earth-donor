import volunteerImg from "@/assets/Volunteer.png"
import Image from "next/image";

const BecomeVolunteer = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                {/* hr line */}
                <hr />

                {/* number section start */}
                <div className="grid lg:grid-cols-4 grid-cols-3 lg:text-6xl text-3xl text-[#4CAF50] font-bold py-10 px-2">

                    <div className="text-center">
                        <h2>$256M</h2>
                        <p className="lg:text-lg text-sm text-gray-500 mt-1">
                            Weve Helped Raise
                        </p>
                    </div>

                    <div className="text-center">
                        <h2>37k+</h2>
                        <p className="lg:text-lg text-sm text-gray-500 mt-1">
                            Projects Funded
                        </p>
                    </div>

                    <div className="text-center">
                        <h2>40+</h2>
                        <p className="lg:text-lg text-sm text-gray-500 mt-1">
                            Countries Worldwide
                        </p>
                    </div>

                    <div className="text-center lg:col-span-1 col-span-3 lg:mt-0 mt-3">
                        <h2>89k+</h2>
                        <p className="lg:text-lg text-sm text-gray-500 mt-1">
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

                <div className="absolute top-0 text-white bg-[#192515] bg-opacity-60 w-full h-full text-center">
                    <h2 className="lg:text-4xl text-xl font-extrabold lg:pt-56 pt-14">
                        Make a Statement In Support of The
                        <br />
                        Environment
                    </h2>
                    <p className="text-gray-300 font-normal text-base lg:mt-6 lg:block hidden">
                        Venenatis conubia porta sapien rhoncus amet fringilla odio commodo pede curabitur.
                        <br />
                        Maximus vestibulum enim donec vitae viverra hendrerit. Pede vitae dictumst
                        <br />
                        sollicitudin odio ornare nulla.
                    </p>
                    <button className="bg-[#FFC107] py-2 px-6 rounded-sm text-black font-medium mt-6">
                        Become A Volunteer
                    </button>
                </div>
            </div>
            {/* img section end */}
        </div>
    );
};

export default BecomeVolunteer;