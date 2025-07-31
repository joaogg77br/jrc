import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar, Pagination, Keyboard } from "swiper/modules"
import SwiperNavButtons from "./SwiperNavButtons"
import BlurCard from "./BlurCard"
import "swiper/css"
import 'swiper/css/navigation';
import Aleatory_image_1 from "../../assets/Imgs/Services/Aleatory_image_1.svg"
import Aleatory_image_2 from "../../assets/Imgs/Services/Aleatory_image_2.svg"
import Aleatory_image_3 from "../../assets/Imgs/Services/Aleatory_image_3.svg"
import Aleatory_image_4 from "../../assets/Imgs/Services/Aleatory_image_4.svg"
import Aleatory_image_5 from "../../assets/Imgs/Services/Aleatory_image_5.svg"
import Aleatory_image_6 from "../../assets/Imgs/Services/Aleatory_image_6.svg"
import Aleatory_image_7 from "../../assets/Imgs/Services/Aleatory_image_7.svg"
import Aleatory_image_8 from "../../assets/Imgs/Services/Aleatory_image_8.svg"
import Aleatory_image_9 from "../../assets/Imgs/Services/Aleatory_image_9.svg"

export default function SwiperScreenLg() {
    const [size, setSize] = useState(1)
    useEffect(() => setSize(3), [])
    return (
        <div>
            <Swiper
                slidesPerView={size}
                spaceBetween={40}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                scrollbar={true}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper p-4 flex  my-10"
            >
                <SwiperSlide className={`rounded-2xl  bg-no-repeat bg-cover `}>
                    <BlurCard image={Aleatory_image_1} title="" content="" />
                </SwiperSlide>
                <SwiperSlide>
                    <BlurCard image={Aleatory_image_2} title="" content="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Aleatory_image_3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Aleatory_image_4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Aleatory_image_5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Aleatory_image_6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Aleatory_image_7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Aleatory_image_8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Aleatory_image_9} alt="" />
                </SwiperSlide>
                <SwiperNavButtons />
            </Swiper>
        </div>
    )
}