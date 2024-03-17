import volunteerImg from "@/assets/Volunteer.png"
import Image from "next/image";

const BecomeVolunteer = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                {/* hr line */}
                <hr />

                {/* number section start */}
                <div className="grid lg:grid-cols-4 text-6xl text-[#4CAF50] font-bold py-10">

                    <div className="text-center">
                        <h2>$256M</h2>
                        <p className="text-lg text-gray-500 mt-1">
                            Weve Helped Raise
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

                <div className="absolute top-0 text-white bg-[#192515] bg-opacity-60 w-full h-full text-center">
                    <h2 className="text-4xl font-extrabold pt-56">
                        Make a Statement In Support of The
                        <br />
                        Environment
                    </h2>
                    <p className="text-gray-300 font-normal text-base mt-6">
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