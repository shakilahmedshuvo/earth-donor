'use client'
import { useEffect, useState } from "react";
import LetsTakeActionSingleCard from "./LetsTakeActionSingleCard";

const LetsTakeAction = () => {
    const [data, setLetsTakaActionData] = useState([]);
    // get the data
    useEffect(() => {
        fetch("LetsTakeAction.json")
            .then(res => res.json())
            .then(data => setLetsTakaActionData(data))
    }, []);

    return (
        <div className="max-w-7xl mx-auto lg:mt-24 mt-24">

            <div className="grid lg:grid-cols-2 ms-3 lg:ms-0">
                <div>
                    <h2 className="text-xl text-[#4CAF50] font-bold">
                        Lets Take Action
                    </h2>
                    <h2 className="text-4xl font-bold lg:mt-6 mt-3">
                        Speak up and take action for
                        <br />
                        nature, for a sustainable future
                    </h2>
                </div>
                <div>
                    <p className="text-gray-500">
                        Dolor lorem phasellus magnis habitant nibh feugiat leo bibendum curae eros sem.
                        <br />
                        Si ridiculus commodo velit senectus primis netus lobortis consectetur curae
                        <br />
                        rhoncus. Nostra eget potenti elementum ex ultricies pellentesque.
                    </p>

                    <button className="bg-[#FFC107] py-2 px-6 rounded-sm text-black font-medium mt-6">
                        Make Donation
                    </button>
                </div>
            </div>

            {/* card section start */}
            <div className="grid lg:grid-cols-3 mx-2 lg:mx-0 gap-5 mt-12">
                {
                    data.map((data) => (
                        <LetsTakeActionSingleCard
                            key={data.id}
                            data={data}
                        ></LetsTakeActionSingleCard>
                    ))
                }
            </div>
            {/* card section end */}
        </div>
    );
};

export default LetsTakeAction;