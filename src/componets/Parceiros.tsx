
import Parceiro1 from "../../assets/Imgs/Parceiro/Parceiro_1.svg"
import Parceiro2 from "../../assets/Imgs/Parceiro/Parceiro_2.svg"
import Parceiro3 from "../../assets/Imgs/Parceiro/Parceiro_3.svg"
import Parceiro4 from "../../assets/Imgs/Parceiro/Parceiro_4.svg"
import Parceiro5 from "../../assets/Imgs/Parceiro/Parceiro_5.svg"
import Parceiro6 from "../../assets/Imgs/Parceiro/Parceiro_6.svg"
import Parceiro7 from "../../assets/Imgs/Parceiro/Parceiro_7.svg"

export default function Parceiros() {
  return (
    <div className="flex flex-col items-center justify-center mt-14 my-4 p-4 pl-6 py-16">
      <h1 className="SemiBold 
          text-[21px] py-4 text-center text-zinc-800">
        Companhias que utilizam nossos produtos e serviços
      </h1>
      <hr className="my-8 w-full border-[0.3px] opacity-40 border-zinc-500 text-black lg:w-1/2 " />
      <section className="flex flex-wrap justify-center gap-4 p-4
      lg:gap-10
      ">
        <img src={Parceiro1} />
        <img src={Parceiro2} />
        <img src={Parceiro3} />
        <img src={Parceiro4} />
        <img src={Parceiro5} />
        <img src={Parceiro6} />
        <img src={Parceiro7} />
      </section>
    </div>
  )
}
