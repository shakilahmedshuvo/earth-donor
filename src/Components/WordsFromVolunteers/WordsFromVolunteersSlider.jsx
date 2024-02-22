"use client"
import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import UserImg from "@/assets/User/UserImg.jpg";
import UserImgTwo from "@/assets/User/UserImgTwo.jpg";
import { FaQuoteRight } from "react-icons/fa";

const WordsFromVolunteersSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper mt-14"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                }
                ,
                840: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                }
            }}>

            {/* first */}
            <SwiperSlide>
                <div className='bg-[#F6F6F6] text-sm px-8 py-5'>
                    {/* rating section start */}
                    <div className='flex items-center space-x-2 text-[#FFC107]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    {/* rating section end */}

                    <p className='text-gray-500 mt-5 mb-4'>
                        I had the privilege of participating in a tree planting event organized by this non-profit organization, and it was a truly enriching experience. The teams dedication to environmental conservation shone through in every aspect of the event.
                    </p>

                    <div className='flex justify-between pt-2 pb-3'>
                        <div className='flex'>
                            <Image
                                className='rounded-full mr-6'
                                width={60}
                                height={60}
                                src={UserImg}
                                alt=''
                            />
                            <div className='mt-2'>
                                <h2 className='font-semibold'>
                                    Mst. Akter
                                </h2>
                                <p className='text-gray-500'>
                                    Bandung
                                </p>
                            </div>
                        </div>
                        <div className='text-[#4CAF50] text-5xl mt-2'>
                            <FaQuoteRight  />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
           
           
            {/* second */}
            <SwiperSlide>
                <div className='bg-[#F6F6F6] text-sm px-8 py-5'>
                    {/* rating section start */}
                    <div className='flex items-center space-x-2 text-[#FFC107]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    {/* rating section end */}

                    <p className='text-gray-500 mt-5 mb-4'>
                        I had the privilege of participating in a tree planting event organized by this non-profit organization, and it was a truly enriching experience. The teams dedication to environmental conservation shone through in every aspect of the event.
                    </p>

                    <div className='flex justify-between pt-2 pb-3'>
                        <div className='flex'>
                            <Image
                                className='rounded-full mr-6'
                                width={60}
                                height={60}
                                src={UserImgTwo}
                                alt=''
                            />
                            <div className='mt-2'>
                                <h2 className='font-semibold'>
                                    Ahmed Shuvo
                                </h2>
                                <p className='text-gray-500'>
                                    Bandung
                                </p>
                            </div>
                        </div>
                        <div className='text-[#4CAF50] text-5xl mt-2'>
                            <FaQuoteRight  />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </ Swiper>
    );
};

export default WordsFromVolunteersSlider;