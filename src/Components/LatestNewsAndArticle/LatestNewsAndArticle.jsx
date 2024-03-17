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
        <div className="bg-[#F6F6F6]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 pt-36">

                {/* all news and article section start */}
                <div>
                    <div className="flex items-center">
                        <h2 className="text-4xl font-semibold">
                            Latest News & Article
                        </h2>
                        <Link
                            href={"/"}
                            className="bg-[#FFC107] py-2 px-6 rounded-sm text-black font-medium text-center ms-14 text-sm">
                            All Article
                        </Link>
                    </div>
                    <div className="my-5">
                        <hr />
                    </div>

                    {/* card map section start */}
                    <div className="grid gap-4 pb-24">
                        {
                            data.map((data) => (
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