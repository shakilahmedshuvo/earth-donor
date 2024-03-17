import pictureOne from "@/assets/WhoPictureOne.jpg";
import pictureTwo from "@/assets/WhoPictureTwo.jpg";
import Image from "next/image";

const WhoWeAre = () => {
    return (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 mt-20">

            <div>
                <h2 className="text-xl text-[#4CAF50] font-bold ">
                    Who We Are
                </h2>

                <h2 className="text-4xl font-bold mt-6">
                    Eco-friendly actions, global
                    <br />
                    satisfaction
                </h2>

                <p className="text-xl mt-6">
                    Rutrum pede id etiam sit quam mus nulla vulputate elementum.
                    <br />
                    Taciti vitae platea sollicitudin tempor diam.
                </p>

                <p className="text-lg mt-6 text-gray-600">
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
            <div className="">
                <div>
                    <Image
                        width={1000}
                        height={200}
                        src={pictureTwo}
                        alt="" />
                </div>
                <div className="relative bottom-28 right-8">
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