import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import WhoPictureTwo from "@/assets/WhoPictureTwo.jpg";
import WhoPictureOne from "@/assets/WhoPictureOne.jpg";
import ImgThree from "@/assets/MorePeople/ImgThree.jpg";
import ImgFour from "@/assets/MorePeople/ImgFour.jpg";
import ImgFive from "@/assets/MorePeople/ImgFive.jpg";
import ImgSix from "@/assets/MorePeople/ImgSix.png";
import ImgSeven from "@/assets/MorePeople/ImgSeven.png";
import ImgEight from "@/assets/MorePeople/ImgEight.jpg";
import ImgNine from "@/assets/MorePeople/ImgNine.jpg";

const MorePeopleSlider = () => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={4}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                }
                ,
                840: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                }
            }}>

            {/* first */}
            <SwiperSlide>
                <Image
                    className='w-full'
                    width={1000}
                    height={1000}
                    src={WhoPictureTwo}
                    alt=''
                />
            </SwiperSlide>

            {/* second */}
            <SwiperSlide>
                <Image
                    className='w-full'
                    width={1000}
                    height={1000}
                    src={WhoPictureOne}
                    alt=''
                />
            </SwiperSlide>

            {/* three */}
            <SwiperSlide>
                <Image
                    className='w-full'
                    width={1000}
                    height={1000}
                    src={ImgThree}
                    alt=''
                />
            </SwiperSlide>

            {/* four */}
            <SwiperSlide>
                <Image
                    className='w-full'
                    width={1000}
                    height={1000}
                    src={ImgFour}
                    alt=''
                />
            </SwiperSlide>

            {/* five */}
            <SwiperSlide>
                <Image
                    className='w-full'
                    width={1000}
                    height={1000}
                    src={ImgFive}
                    alt=''
                />
            </SwiperSlide>

            {/* six */}
            <SwiperSlide>
                <Image
                    className='w-full'
                    width={1000}
                    height={1000}
                    src={ImgSix}
                    alt=''
                />
            </SwiperSlide>

            {/* seven */}
            <SwiperSlide>
                <Image
                    className='w-full'
                    width={1000}
                    height={1000}
                    src={ImgSeven}
                    alt=''
                />
            </SwiperSlide>

            {/* eight */}
            <SwiperSlide>
                <Image
                    className='w-full'
                    width={1000}
                    height={1000}
                    src={ImgEight}
                    alt=''
                />
            </SwiperSlide>

            {/* nine */}
            <SwiperSlide>
                <Image
                    className='w-full'
                    width={1000}
                    height={1000}
                    src={ImgNine}
                    alt=''
                />
            </SwiperSlide>

        </Swiper>
    );
};

export default MorePeopleSlider;