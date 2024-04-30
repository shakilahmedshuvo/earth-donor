import IconOne from "@/assets/Icons/IconOne.png";
import IconTwo from "@/assets/Icons/IconTwo.png";
import IconThree from "@/assets/Icons/IconThree.png";
import IconFour from "@/assets/Icons/IconFour.png";
import IconFive from "@/assets/Icons/IconFive.png";
import IconSix from "@/assets/Icons/IconSix.png";
import Image from "next/image";

const OrganizationYouCanTrust = () => {
    return (
        <div className="pt-96 lg:pt-0">
            <div className="pt-96 lg:pt-0">
                <div className="pt-96 lg:pt-0">

                    <div className="bg-[#F6F6F6] pt-96 pb-20">
                        <div className="max-w-7xl mx-auto">

                            {/* text section start */}
                            <div className="grid lg:grid-cols-2 mx-3 lg:mx-0">
                                <div>
                                    <h2 className="text-4xl font-bold">
                                        An Organization You Can Trust
                                    </h2>
                                    <p className="mt-5 text-gray-500 font-normal">
                                        Dapibus dis leo semper molestie nisl luctus netus augue bibendum. Duis
                                        <br />
                                        <span className=" border-b-4 border-[#FFC107] pb-5">turpis</span> primis morbi orci quam est iaculis.
                                    </p>
                                </div>
                                {/* text section end */}

                                {/* img section start */}
                                <div className="grid grid-cols-3 gap-3 mt-10">

                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={IconOne}
                                        alt="" />

                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={IconTwo}
                                        alt="" />

                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={IconThree}
                                        alt="" />

                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={IconFour}
                                        alt="" />

                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={IconFive}
                                        alt="" />

                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={IconSix}
                                        alt="" />

                                </div>
                                {/* img section end */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationYouCanTrust;