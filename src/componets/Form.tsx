import React, { useState, useEffect } from "react";
import ButtonGrandient from "./ButtonGradient";

export default function Form() {
  const [email, setEmail] = useState<string>("")
  const [primeiroNome, setPrimeiroNome] = useState<string>("")
  const [sobreNome, setSobreNome] = useState<string>("")
  const [telefone, setTelefone] = useState<string>("")
  const [empresa, setEmpresa] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    //Validation
    let forms: Array<String> = [email, primeiroNome, sobreNome, telefone, empresa, message]
    let validationForm = forms.every(e => e.trim().length > 0)

    console.log("Escrevendo")
    if (validationForm && telefone.trim().length === 15) {
      console.log("valido para envio",)
      setDisabled(false)
    } else {
      console.log("invalido para envio", telefone.trim().length)
      setDisabled(true)
    }

  }, [email, primeiroNome, sobreNome, telefone, empresa, message])

  function validationPhone(str: string) {
    str = str.replace(/\D/g, "")
    str = str.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
    setTelefone(str)
  }

  return (
    <div className="pl-6 p-4
    lg:px-30 ">
      <h1 className="text-2xl text-center SemiBold my-10">Formulário de Consulta</h1>
      <section className="flex flex-col justify-center gap-4 mt-10">
        <div className="w-full flex lg:flex-row flex-col gap-4">
          <input
            className="bg-[#F1F1F2] rounded-[20px] w-full pb-8 p-4"
            placeholder="Primeiro Nome:*"
            value={primeiroNome}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPrimeiroNome(e.target.value)}
          ></input>
          <input
            className="bg-[#F1F1F2] rounded-[20px] w-full pb-8 p-4"
            placeholder="Sobre Nome:*"
            value={sobreNome}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSobreNome(e.target.value)}
          ></input>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <input
            className="bg-[#F1F1F2] w-full rounded-[20px] pb-8 p-4"
            placeholder="Email:*"
            value={email}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          ></input>
          <input
            className="bg-[#F1F1F2] rounded-[20px] w-full pb-8 p-4"
            placeholder="Telefone:*"
            value={telefone}
            maxLength={11}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              validationPhone(e.target.value)
            }}
          ></input>
        </div>
        <input
          className="bg-[#F1F1F2] rounded-[20px] pb-8 p-4"
          placeholder="Empresa:*"
          value={empresa}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setEmpresa(e.target.value)}
        ></input>
        <textarea
          className="bg-[#F1F1F2] rounded-[20px] pb-8 p-4"
          placeholder="Mensagem:*"
          value={message}
          onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
        ></textarea>
        <div className=" flex text-white justify-end min-h-10" >
          <ButtonGrandient text={"Enviar"} disabled={disabled} />
        </div>

      </section >
    </div >
  )

}
