const HowItWorks = () => {
    return (
        <div className="bg-[#F6F6F6] mt-28 pt-28 pb-20">
            <div className="max-w-7xl mx-auto">

                {/* text section start */}
                <div className="grid grid-cols-4">
                    <div>
                        <h2 className="text-4xl font-bold">
                            <span className="border-b-4 border-[#FFC107] pb-3">
                                How
                            </span> it works
                        </h2>
                    </div>
                    <div className="col-span-3 text-gray-500 px-5">
                        Accumsan et parturient orci inceptos mi consectetur nulla fermentum curabitur. Luctus ullamcorper sagittis dictumst
                        <br />
                        vestibulum elementum dapibus mi nunc ipsum. Nisi phasellus in etiam nascetur fusce finibus sem. Libero habitant
                        <br />
                        vestibulum penatibus aliquet morbi tempor vivamus purus posuere senectus.
                    </div>
                </div>
                {/* text section end */}

                {/* card section start */}
                <div className="grid grid-cols-4 gap-5 mt-12">

                    <div className="border hover:border-white hover:bg-white hover:shadow-md hover:scale-105 px-8 py-10 duration-300 cursor-pointer">
                        <h2 className="font-bold text-2xl">
                            <span className="text-[#4CAF50] text-3xl">01. </span> Create a Personal Profile
                        </h2>
                        <p className="text-gray-500 mt-3">
                            Eros parturient ut sem lobortis mus pretium dapibus. Venenatis egestas dolor laoreet.
                        </p>
                    </div>

                    <div className="border hover:border-white hover:bg-white hover:shadow-md hover:scale-105 px-8 py-10 duration-300 cursor-pointer">
                        <h2 className="font-bold text-2xl">
                            <span className="text-[#4CAF50] text-3xl">02. </span> Add Your Organization
                        </h2>
                        <p className="text-gray-500 mt-3">
                            Eros parturient ut sem lobortis mus pretium dapibus. Venenatis egestas dolor laoreet.
                        </p>
                    </div>

                    <div className="border hover:border-white hover:bg-white hover:shadow-md hover:scale-105 px-8 py-10 duration-300 cursor-pointer">
                        <h2 className="font-bold text-2xl">
                            <span className="text-[#4CAF50] text-3xl">03. </span> Add Volunteer Opportunities
                        </h2>
                        <p className="text-gray-500 mt-3">
                            Eros parturient ut sem lobortis mus pretium dapibus. Venenatis egestas dolor laoreet.
                        </p>
                    </div>

                    <div className="border hover:border-white hover:bg-white hover:shadow-md hover:scale-105 px-8 py-10 duration-300 cursor-pointer">
                        <h2 className="font-bold text-2xl">
                            <span className="text-[#4CAF50] text-3xl">04. </span> Your are Ready to Recruit!
                        </h2>
                        <p className="text-gray-500 mt-3">
                            Eros parturient ut sem lobortis mus pretium dapibus. Venenatis egestas dolor laoreet.
                        </p>
                    </div>

                </div>
                {/* card section end */}
            </div>
        </div>
    );
};

export default HowItWorks;