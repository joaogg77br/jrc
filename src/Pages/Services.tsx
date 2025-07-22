import Header from "../componets/Header";
import Footer from "../componets/Footer";
import BannerW from "../componets/BannerWithoutButton";
import Other_logo from "../../assets/Imgs/Services/Logo_other_enteprise.svg"
import BlurCard from "../componets/BlurCard";
import AleatorY_Image_1 from "../../assets/Imgs/Services/Aleatory_image_1.svg"
import AleatorY_Image_2 from "../../assets/Imgs/Services/Aleatory_image_2.svg"

export default function Services() {
  return (
    <div>
      <Header />
      <BannerW title="Nossos Serviços" message="Nosso portfólio de ofertas abrange competências, especializações e serviços de aplicação que se alinham às mudanças da indústria." />
      <section className="grid lg:grid py-20">
        <div className="flex flex-col  p-5">
          <h1 className="SemiBold text-center text-[20px] my-20">Soluções de Software para Gestão de Integridade Mecânica</h1>
          <div className="flex justify-center items-center flex-col gap-10  w-full 
          lg:flex-row  flex-wrap">
            <BlurCard image={AleatorY_Image_1} title="askdjaldjlkj" content="" />
            <BlurCard image={AleatorY_Image_1} title="" content="" />
            <BlurCard image={AleatorY_Image_1} title="" content="" />
          </div>
        </div>
        <div className="flex flex-col  ">
          <h1 className="SemiBold text-center text-[20px] my-20">Soluções de Software para Gestão de Integridade Mecânica</h1>
          <div className="flex justify-center items-center flex-col gap-10  w-full 
          lg:flex-row flex-wrap">
            <BlurCard image={AleatorY_Image_1} title="askdjaldjlkj" content="" />
            <BlurCard image={AleatorY_Image_1} title="" content="" />
            <BlurCard image={AleatorY_Image_1} title="" content="" />
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="SemiBold text-center text-[20px] my-20">Soluções de Software para Gestão de Integridade Mecânica</h1>
          <div className="flex justify-center items-center flex-col gap-10  w-full 
          lg:flex-row flex-wrap">
            <BlurCard image={AleatorY_Image_1} title="askdjaldjlkj" content="" />
            <BlurCard image={AleatorY_Image_1} title="" content="" />
            <BlurCard image={AleatorY_Image_1} title="" content="" />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>

  )
}



