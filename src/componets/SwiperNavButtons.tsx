import { useSwiper } from "swiper/react"
import ButtonGrandient from "./ButtonGradient"
import { Link } from "react-router"

export default function SwiperNavButtons() {
    const swiper = useSwiper()
    const prev = "<"
    const next = ">"
    return (
        <div className="flex gap-4 justify-between
        ">
            <div className="flex gap-4 py-4">
                <button className=" hover:bg-[#6A5DA5] cursor-pointer hover:text-white  duration-300 rounded-[30px] border-2 border-[#6A5DA5] text-[#6A5DA5] flex items-center justify-center h-[40px] w-[40px]  " onClick={() => swiper.slidePrev()}>{prev}</button>
                <button className="  hover:bg-[#6A5DA5] cursor-pointer hover:text-white duration-300 rounded-[30px] border-2 border-[#6A5DA5] text-[#6A5DA5] flex items-center justify-center h-[40px] w-[40px]  " onClick={() => swiper.slideNext()}>{next}</button>
            </div>
            <div className="text-white Medium">
                <Link to={"/services"}>
                    <ButtonGrandient text="Saiba Mais" />
                </Link>
            </div>
        </div>
    )
}