'use client'

import Image from "next/image";

const LetsTakeActionSingleCard = ({ data }) => {
    const { img, title, subTitle, fund, percent } = data;

    return (
        <div className="relative">
            <Image
                className="w-full"
                height={1000}
                width={1000}
                src={img}
                alt="" />

            <div className="absolute bottom-0 bg-[#182613] bg-opacity-50 w-full text-white px-8 pt-7 pb-7">
                <h2 className="text-3xl font-semibold">
                    {title}
                </h2>

                <p className="text-gray-300 mt-3 text-sm">
                    {subTitle}
                </p>

                <div className="mt-6">
                    <p className="font-bold">
                        Fund Raised
                    </p>
                    <div className="bg-[#4CAF50] text-white text-xs px-4 flex items-center justify-between font-semibold">
                        <p>${fund}</p>
                        <p>{percent}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsTakeActionSingleCard;