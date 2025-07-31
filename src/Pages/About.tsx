import Header from "../componets/Header"
import Footer from "../componets/Footer"
import BannerW from "../componets/BannerWithoutButton.tsx"
import "../css/ImagemFalso.css"

//Imagens
// import Visao from "../../assets/Imgs/About/Visao.svg"
// import Dimond from "../../assets/Imgs/About/Dimond.svg"
// import BrokenHead from "../../assets/Imgs/About/BrokenHead.svg"

import Visao from "../../assets/Imgs/About/Visao.svg"
import Dimond from "../../assets/Imgs/About/Dimond.svg"
import BrokenHead from "../../assets/Imgs/About/BrokenHead.svg"


export default function About() {
  return (
    <div>
      <Header />
      <BannerW title="Somos a JRC" message="Fundada em 1992, a JRC Informática se estabeleceu como uma empresa dedicada ao desenvolvimento de softwares e à prestação de serviços na área de tecnologia da informação (TI). Ao longo dos anos, a empresa consolidou sua presença no mercado oferecendo soluções inovadoras e adaptáveis às necessidades dos clientes." />
      <section className="flex flex-col  py-26 gap-10 
      lg:px-30 lg:gap-0
      ">
        <div className="
        lg:flex ">
          <div className="ImagemFalso  hidden
          lg:w-[1500px] lg:h-[420px] lg:rounded-t-2xl  lg:rounded-bl-2xl lg:flex">
          </div>
          <div className="flex justify-start">
            <img className="lg:hidden" src={Visao} />
          </div>
          <div className="pl-6 p-4 py-4">
            <h2 className="text-[30px] SemiBold">Visão</h2>
            <p className="pt-6 Medium text-[15px] text-[#999999]"> Desenvolver sistemas de informações, com tecnologia
              de ponta.
              Executar serviços de suporte e manutenção de alto
              nível profissional, agregando valor ao negócio de nossos clientes
              e reduzindo os custos operacionais.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col
          lg:flex-row ">
          <div className="flex justify-end ">
            <img className="lg:hidden" src={Dimond} />
          </div>
          <div className="pl-6 p-4 py-4">
            <h2 className="text-[30px] SemiBold">Valores</h2>
            <p className="pt-6 Medium text-[15px] text-[#999999]"> A JRC Informática valoriza princípios como
              honestidade, transparência, comprometimento, e
              eficiência, norteando suas operações e relacionamentos
              com clientes e colaboradores. </p>
          </div>
          <div className="hidden ImagemFalso2  
          lg:w-[1450px] lg:flex lg:h-[420px] lg:rounded-t-2xl  lg:rounded-bl-2xl">
          </div>

        </div>
        <div className="flex flex-col
        lg:flex-row
        ">
          <div className="ImagemFalso3  
          lg:w-[1070px] lg:h-[420px] hidden
          rounded-tr-0 lg:rounded-t-2xl lg:block  lg:rounded-bl-2xl">
          </div>
          <div className="flex justify-start">
            <img className="lg:hidden" src={BrokenHead} />
          </div>
          <div className="pl-6 p-4 py-4">
            <h2 className="text-[30px] SemiBold">Propósito</h2>
            <p className="pt-6 Medium text-[15px] text-[#999999]"> Tornar-se referência pela qualidade dos serviços e softwares desenvolvidos, assim como, pelo atendimento personalizado e compromisso com os clientes. </p>
          </div>
        </div>
      </section>
      <Footer />
    </div >
  )
}





