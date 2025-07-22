import Cards from "./Cards";
import Cards_Page_1 from "../../assets/Imgs/Cards_Page_1/Card_1.svg"

export default function Motivos() {
  return (
    <div className="pl-6 py-20 p-4 
    lg:px-30">
      <h1 className="SemiBold text-[30px] h-20  my-5 
      lg:items-end lg:flex  ">Motivos para nos contratar</h1>
      <section className="flex flex-col gap-6 
      lg:grid grid-cols-2 ">
        <section className="pt-20  grid gap-10">
          <Cards image={Cards_Page_1}
            title="Expertise em NR-13"
            content="Possuímos uma vasta experiência e conhecimento detalhado
sobre a norma NR-13, garantindo que nossas soluções sejam
totalmente alinhados às exigências regulamentares. Isso proporciona
segurança e tranquilidade para nossos clientes, sabendo que estão em
conformidade com as normas mais rigorosas do setor."
          />

          <Cards image={Cards_Page_1}
            title="Inovação Contínua"
            content="Oferecemos soluções personalizadas que atendem às necessidades
específicas de cada cliente, utilizando as tecnologias mais avançadas. Nosso compromisso com a inovação contínua significa que
nossos clientes se beneficiam das últimas tendências e melhorias tecnológicas, garantindo operações mais eficientes e seguras."
          />
        </section>

        <section className="grid gap-10 pb-10">
          <Cards image={Cards_Page_1}
            title="Suporte Técnico 24h"
            content="Nossa equipe de suporte técnico está disponível 24/7, pronta para
responder a qualquer necessidade ou problema que nossos clientes
possam enfrentar. Com um serviço de atendimento rápido e eficaz,
garantimos que suas
operações não sejam interrompidas e que qualquer questão seja resolvida prontamente."/>

          <Cards image={Cards_Page_1}
            title="Segurança Industrial"
            content="Prestamos serviços de consultoria detalhados e treinamentos
abrangentes para capacitar as equipes de nossos clientes. Nosso objetivo é não apenas fornecer soluções, mas também garantir que as equipes
estejam bem preparadas e informadas para manter a conformidade e
operar com segurança."/>
        </section>
      </section>
    </div>
  )
}
