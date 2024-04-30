import WordsFromVolunteersSlider from "./WordsFromVolunteersSlider";

const WordsFromVolunteers = () => {
    return (
        <div className="max-w-7xl mx-auto pt-16 lg:pt-24">
            <div className="text-center">
                <h2 className="text-4xl font-bold">
                    Words From Volunteers
                </h2>
                <p className="text-gray-500 mt-5">
                    Sodales purus si neque habitasse eget <span className="border-b-4 border-[#4CAF50] pb-6">intege</span>r finibus montes natoque aliquet arcu.
                </p>
            </div>

            {/* review section start */}
            <WordsFromVolunteersSlider />
            {/* review section end */}

        </div>
    );
};

export default WordsFromVolunteers;