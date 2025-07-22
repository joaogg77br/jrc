import Facebook from "../../assets/Imgs/Footer/facebook.svg"
import Instagram from "../../assets/Imgs/Footer/instagram.svg"
import XT from "../../assets/Imgs/Footer/X.svg"
import Logo_Gray from "../../assets/Imgs/Footer/Logo_Gray.svg"
import ButtonFooter from "./ButtonFooter"

export default function Footer() {
  return (
    <div className="pl-6 pt-16 pb-16 p-6 bg-[#F1F1F2]
    lg:px-30
    ">
      <div className="flex items-start gap-10 flex-col">
        <img src={Logo_Gray} className="h-20" />
        <div className="hidden lg:flex gap-4">
          <ButtonFooter name={"Sobre nós"} />
          <ButtonFooter name={"Capacidades"} />
          <ButtonFooter name={"Sistema de Geranciamento de Equipamentos (SGE)"} />
          <ButtonFooter name={"Contate-nós"} />
        </div>
      </div>
      <p className="py-4 Medium text-[#999999]">Copyright @ JRC Tecnologia 1992-2024</p>
      <hr className="my-6 border-[0.3px] opacity-40 border-zinc-500 text-black  " />
      <div className="flex justify-end gap-4">
        <img src={Instagram} />
        <img src={Facebook} />
        <img src={XT} />
      </div>

    </div>
  )
}

