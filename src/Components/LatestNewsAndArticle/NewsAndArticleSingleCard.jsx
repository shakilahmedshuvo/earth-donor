import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const NewsAndArticleSingleCard = ({ data }) => {
    const { img, title, date, des } = data;

    return (
        <div className="grid grid-cols-8">
            <Image
                className="w-full col-span-2"
                width={1000}
                height={1000}
                src={img}
                alt=""
            />
            <div className="col-span-6 ms-5 cursor-pointer">
                <h2 className="font-extrabold text-gray-800 hover:text-[#4CAF50] duration-300 text-lg">
                    {title}
                </h2>
                <p className="text-xs my-1 text-gray-500">
                    {date} ~ No Comments
                </p>
                <p className="text-gray-500 my-1">
                    {des}
                </p>
                <div className="flex items-end">
                    <Link
                        href={"/"}
                        className="flex items-center text-[#4CAF50] font-bold text-sm mt-2">
                        Read More <MdOutlineKeyboardDoubleArrowRight className="ms-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsAndArticleSingleCard;