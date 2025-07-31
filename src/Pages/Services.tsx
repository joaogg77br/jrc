import Header from "../componets/Header";
import Footer from "../componets/Footer";
import BannerW from "../componets/BannerWithoutButton";
import BlurCard from "../componets/BlurCard";

import AleatorY_Image_1 from "../../assets/Imgs/Services/Aleatory_image_1.svg"
import AleatorY_Image_2 from "../../assets/Imgs/Services/Aleatory_image_2.svg"
import AleatorY_Image_3 from "../../assets/Imgs/Services/Aleatory_image_3.svg"
import AleatorY_Image_4 from "../../assets/Imgs/Services/Aleatory_image_4.svg"
import AleatorY_Image_5 from "../../assets/Imgs/Services/Aleatory_image_5.svg"
import AleatorY_Image_6 from "../../assets/Imgs/Services/Aleatory_image_6.svg"
import AleatorY_Image_7 from "../../assets/Imgs/Services/Aleatory_image_7.svg"
import AleatorY_Image_8 from "../../assets/Imgs/Services/Aleatory_image_8.svg"
import AleatorY_Image_9 from "../../assets/Imgs/Services/Aleatory_image_9.svg"

import LogoEntreprise from "../../assets/Imgs/Services/Logo_other_enteprise.svg?react"



export default function Services() {
  return (
    <div>
      <Header />
      <BannerW title="Nossos Serviços" message="Nosso portfólio de ofertas abrange competências, especializações e serviços de aplicação que se alinham às mudanças da indústria." />
      <div className="p-10
      lg:px-30 ">
        <div className="w-full p-10
       flex gap-10 bg-[#F1F1F2] rounded-[30px] ">
          <LogoEntreprise />
          <div className="flex flex-col gap-4">
            <h1 className="SemiBold text-2xl">
              Asset Performance Management
            </h1>
            <p className="Medium">
              Implementação do software APM (Asset Performance Management) da GE Digital.
              Consultoria e planejamento no processo de carregamento dos dados em massa.
            </p>
          </div>
        </div>
      </div>
      <section className="grid lg:grid pb-10 ">
        <div className="flex flex-col  p-5">
          <h1 className="SemiBold text-center text-[20px] my-20">Soluções de Software para Gestão de Integridade Mecânica</h1>
          <div className="flex justify-center items-center flex-col gap-10  w-full 
          lg:flex-row  flex-wrap">
            <BlurCard image={AleatorY_Image_1} title="askdjaldjlkj" content="" />
            <BlurCard image={AleatorY_Image_2} title="" content="" />
            <BlurCard image={AleatorY_Image_3} title="" content="" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="SemiBold text-center text-[20px] my-20">Soluções de Software para Gestão de Integridade Mecânica</h1>
          <div className="flex justify-center items-center flex-col gap-10  w-full 
          lg:flex-row flex-wrap">
            <BlurCard image={AleatorY_Image_4} title="askdjaldjlkj" content="" />
            <BlurCard image={AleatorY_Image_5} title="" content="" />
            <BlurCard image={AleatorY_Image_6} title="" content="" />
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="SemiBold text-center text-[20px] my-20">Soluções de Software para Gestão de Integridade Mecânica</h1>
          <div className="flex justify-center items-center flex-col gap-10  w-full 
          lg:flex-row flex-wrap">
            <BlurCard image={AleatorY_Image_7} title="askdjaldjlkj" content="" />
            <BlurCard image={AleatorY_Image_8} title="" content="" />
            <BlurCard image={AleatorY_Image_9} title="" content="" />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>

  )
}



