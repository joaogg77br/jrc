import Sge_logo from "../../assets/Imgs/Sge/Sge_logo.svg"
import { Link } from "react-router"

import Sge_Graph from "../../assets/Imgs/Sge/Sge_Graph.svg"
import Sge_Vector from "../../assets/Imgs/Sge/Sge_Vector.svg"

export default function Sge() {
  return (
    <div className="pl-6 py-20 p-4 bg-[#F1F1F2]
    lg:px-30 lg:flex 
    ">
      <div>
        <img src={Sge_logo}></img>
        <p className="py-6 Medium text-[#999999]">
          Sistema de Gestão de Equipamentos (SGE) é uma Plataforma integrada que
          facilita o controle e
          monitoramento de caldeiras e
          vasos de pressão, conforme
          exigências da NR-13.  Inclui
          funcionalidades de
          agendamento automático
          de inspeções, geração de
          relatórios de conformidade, e alertas de manutenção
          preventiva.
        </p>
        <Link to={"/sge"}>
          <button className="
        border-2 p-2 flex gap-4 cursor-pointer px-6 Medium rounded-3xl ">
            Saiba mais
            <img src={Sge_Vector} />
          </button>
        </Link>
      </div>
      <img className="h-60 lg:m-4 my-10" src={Sge_Graph} />
    </div>
  )
}
