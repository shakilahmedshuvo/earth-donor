'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import NewsAndArticleSingleCard from "./NewsAndArticleSingleCard";
import OnePlantNews from "./OnePlantNews";

const LatestNewsAndArticle = () => {
    const [data, setNewsData] = useState([]);
    // get the data
    useEffect(() => {
        fetch("NewsAndArticle.json")
            .then(res => res.json())
            .then(data => setNewsData(data))
    }, []);

    return (
        <div className="bg-[#F6F6F6] mt-12 lg:mt-0">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 lg:gap-24 lg:pt-36 pt-6">

                {/* all news and article section start */}
                <div className="mx-3 lg:mx-0">
                    <div className="lg:flex lg:items-center">
                        <h2 className="text-3xl lg:text-4xl font-semibold pb-5">
                            Latest News & Article
                        </h2>
                        <Link
                            href={"/"}
                            className="bg-[#FFC107] py-2 px-6 rounded-sm text-black font-medium text-center lg:ms-14 text-sm">
                            All Article
                        </Link>
                    </div>
                    <div className="lg:my-5 my-6">
                        <hr />
                    </div>

                    {/* card map section start */}
                    <div className="grid gap-4 lg:pb-24 pb-0">
                        {
                            data?.map((data) => (
                                <NewsAndArticleSingleCard
                                    key={data.id}
                                    data={data}
                                ></NewsAndArticleSingleCard>
                            ))
                        }
                    </div>
                    {/* card map section end */}
                </div>
                {/* all news and article section end */}

                {/* one plant news section start */}
                <OnePlantNews />
                {/* one plant news section end */}
            </div>
        </div>
    );
};

export default LatestNewsAndArticle;