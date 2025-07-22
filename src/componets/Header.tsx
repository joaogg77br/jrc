import "../css/Menu.css"
import Logo from "../../assets/Imgs/Logo.svg"
import { useState } from "react"
import Menubar from './Menu'
import Scrolltop from "./ScrollTop"
import { Link } from "react-router"
import { useLocation } from "react-router"

//Mudar a font 
//verificar se o peso da font tá igual e comparar os padding

export default function Header() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false)
  const path = useLocation().pathname
  return (
    <>
      <header className="
      bg-white fixed z-40 w-full h-20 p-6
      flex justify-between
      lg:px-30
      ">
        <Scrolltop />
        <button>
          <Link to="/">
            <img src={Logo}></img>
          </Link>
        </button>
        <button
          className="lg:hidden"
          onClick={() => setMenuVisible(!menuVisible)} >
          <Menubar />
        </button>
        <section
          className="
          hidden w-full  pr-10 justify-end 
          items-center h-10
          gap-15 text-[#999999] SemiBold
          lg:flex  duration-300"
        >

          <p className={`${path === '/sobre' ? `SemiBold text-black text-xl` : `nada`}`}><Link to={"/sobre"}>Sobre nós</Link></p>
          <p className={`${path === '/services' ? `text-black text-xl` : `nada`}`}><Link to={"/services"}>Serviços </Link></p>
          <p className={`${path === '/sge' ? `text-black text-xl` : `nada`}`}><Link to={"/sge"}>SGE</Link></p>
          <p className={`${path === '/contato' ? `text-black text-xl` : `nada`}`}><Link to={"/contato"}>Contate-nos </Link></p>
        </section>
        <section className={`Menu ${menuVisible ? "MenuHamburguerOpen" : "MenuHamburguerClose"} pl-6 absolute w-full left-0 top-20 bg-white `}>
          <div>
            <Link to="/sobre">
              <p className="font-medium my-4">Sobre Nós</p>
            </Link>
            <hr className="my-4 border-zinc-500 border-[0.3px] opacity-40 text-black  " />
          </div>
          <div>
            <Link to="/services">
              <p className="font-medium my-4">Serviços</p>
            </Link>
            <hr className="my-4  border-[0.3px] opacity-40 border-zinc-500 text-black  " />
          </div>
          <div>
            <Link to="/sge">
              <p className="font-medium my-4">SGE</p>
            </Link>
            <hr className="my-4 border-zinc-500 border-[0.3px] opacity-40 text-black  " />
          </div>
          <div>
            <Link to="/contato">
              <p className="font-medium my-4 mb-10"> Contato</p>
            </Link>
          </div>


        </section>
      </header>
      <section className="h-20 p-6">
      </section>

    </>
  )
}
