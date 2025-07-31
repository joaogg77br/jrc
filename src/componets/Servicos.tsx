import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar, Pagination, Keyboard } from "swiper/modules"
import SwiperNavButtons from "./SwiperNavButtons"
import "swiper/css"
import 'swiper/css/navigation';

import SwiperScreenLg from "./SwiperScreenLg"

import Aleatory_image_1 from "../../assets/Imgs/Services/Aleatory_image_1.svg"
import Aleatory_image_2 from "../../assets/Imgs/Services/Aleatory_image_2.svg"
import Aleatory_image_3 from "../../assets/Imgs/Services/Aleatory_image_3.svg"
import Aleatory_image_4 from "../../assets/Imgs/Services/Aleatory_image_4.svg"
import Aleatory_image_5 from "../../assets/Imgs/Services/Aleatory_image_5.svg"
import Aleatory_image_6 from "../../assets/Imgs/Services/Aleatory_image_6.svg"
import Aleatory_image_7 from "../../assets/Imgs/Services/Aleatory_image_7.svg"
import Aleatory_image_8 from "../../assets/Imgs/Services/Aleatory_image_8.svg"
import Aleatory_image_9 from "../../assets/Imgs/Services/Aleatory_image_9.svg"



export default function Servicos() {
  return (
    <div className="p-4 3 pl-6 bg-zinc-200 py-20
    lg:px-30 " >
      <div className="
       justify-between
      ">
        <h1 className="SemiBold text-3xl  my-4
        lg:text-4xl lg:w-full  lg:mr-60 ">Nossos serviços</h1>
        <p className="text-zinc-700 text-[15px]
        ">Fornecemos softwares especializados que ajudam as indústrias a cumprirem os requisitos da norma NR-13. Assim como consultoria especializada, suporte técnico, inovação e atualização tecnológica contínua.</p>
      </div>

      <div className="lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
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
            <img src={Aleatory_image_1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Aleatory_image_2} alt="" />
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
      <div className="hidden lg:block">
        <SwiperScreenLg />
      </div>

    </div>
  )
}
