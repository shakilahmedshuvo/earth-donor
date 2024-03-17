import pictureOne from "@/assets/WhoPictureOne.jpg";
import pictureTwo from "@/assets/WhoPictureTwo.jpg";
import Image from "next/image";

const WhoWeAre = () => {
    return (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 lg:mt-20 mt-14">

            <div className="px-3 lg:px-0">
                <h2 className="text-xl text-[#4CAF50] font-bold">
                    Who We Are
                </h2>

                <h2 className="lg:text-4xl text-3xl font-bold lg:mt-6 mt-2">
                    Eco-friendly actions, global
                    <br />
                    satisfaction
                </h2>

                <p className="lg:text-xl text-base mt-3 lg:mt-6">
                    Rutrum pede id etiam sit quam mus nulla vulputate elementum.
                    <br />
                    Taciti vitae platea sollicitudin tempor diam.
                </p>

                <p className="lg:text-lg text-base mt-3 lg:mt-6 text-gray-600">
                    Sit lacus montes per volutpat convallis class viverra purus donec
                    <br />
                    consectetuer ac. Class mi lectus netus porta posuere nunc. Est at
                    <br />
                    gravida nam litora enim sociosqu nullam posuere erat fusce. Taciti
                    <br />
                    sem ex libero a bibendum tortor mauris consequat purus.
                </p>

                <button className="bg-[#FFC107] text-black w-fit font-semibold px-7 py-2 rounded-sm mt-8">
                    Learn More
                </button>
            </div>

            {/* img section start */}
            <div className="mt-10 lg:mt-0">
                <div>
                    <Image
                        width={1000}
                        height={200}
                        src={pictureTwo}
                        alt="" />
                </div>
                <div className="relative lg:bottom-28 lg:right-8 bottom-6 lg:block flex items-center justify-center">
                    <Image
                        width={300}
                        height={200}
                        src={pictureOne}
                        alt="" />
                </div>
            </div>
            {/* img section end */}

        </div>
    );
};

export default WhoWeAre;