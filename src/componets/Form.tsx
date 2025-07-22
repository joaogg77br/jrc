//import { useState, useEffect } from "react";
import ButtonGrandient from "./ButtonGradient";

export default function Form() {
  // const [email, setEmail] = useState<string>("")
  // const [primeiroNome, setPrimeiroNome] = useState<string>("")
  // const [sobreNome, setSobreNome] = useState<string>("")
  // const [telefone, setTelefone] = useState<string>("")
  // const [empresa, setEmpresa] = useState<string>("")
  // const [message, setMessage] = useState<string>("")

  // useEffect(() => {
  //   //Validation
  //   let forms: Array<String> = [email, primeiroNome, sobreNome, telefone, empresa, message]
  //   let validationForm = forms.every(e => e.trim().length > 0)
  //   if (validationForm) {
  //   }

  // }, [email, primeiroNome, sobreNome, telefone, empresa, message])

  return (
    <div className="pl-6 p-4
    lg:px-30 ">
      <h1 className="text-2xl text-center SemiBold my-10">Formulário de Consulta</h1>
      <section className="flex flex-col justify-center gap-4 mt-10">
        <div className="w-full flex lg:flex-row flex-col gap-4">
          <input
            className="bg-[#F1F1F2] rounded-[20px] w-full pb-8 p-4"
            placeholder="Primeiro Nome:*"
          ></input>
          <input
            className="bg-[#F1F1F2] rounded-[20px] w-full pb-8 p-4"
            placeholder="Sobre Nome:*"
          ></input>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <input
            className="bg-[#F1F1F2] w-full rounded-[20px] pb-8 p-4"
            placeholder="Email:*"
          ></input>
          <input
            className="bg-[#F1F1F2] rounded-[20px] w-full pb-8 p-4"
            placeholder="Telefone:*"
          ></input>
        </div>
        <input
          className="bg-[#F1F1F2] rounded-[20px] pb-8 p-4"
          placeholder="Empresa:*" ></input>
        <textarea
          className="bg-[#F1F1F2] rounded-[20px] pb-8 p-4"
          placeholder="Mensagem:*"
        ></textarea>
        <div className=" flex text-white justify-end min-h-10" >
          <ButtonGrandient text={"Enviar"} />
        </div>

      </section>
    </div>
  )

}
