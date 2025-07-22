import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar, Pagination, Keyboard } from "swiper/modules"
import Aleatory_image_1 from "../../assets/Imgs/Services/Aleatory_image_1.svg"
import SwiperNavButtons from "./SwiperNavButtons"
import "swiper/css"
import 'swiper/css/navigation';

export default function Servicos() {
  return (
    <div className="p-4 3 pl-6 bg-zinc-200 py-20
    lg:px-30
    "
    >
      <div className="
      lg:flex  justify-between
      ">
        <h1 className="SemiBold text-3xl  my-4
        lg:text-4xl lg:w-full  lg:mr-60
        ">Nossos serviços</h1>
        <p className="text-zinc-700 text-[15px]
        ">Fornecemos softwares especializados que ajudam as indústrias a cumprirem os requisitos da norma NR-13. Assim como consultoria especializada, suporte técnico, inovação e atualização tecnológica contínua.</p>
      </div>

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
        <SwiperSlide className="rounded-2xl">
          <img className="rouded-2xl" src={Aleatory_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
        </SwiperSlide>
        <SwiperNavButtons />
      </Swiper>

    </div>
  )
}
