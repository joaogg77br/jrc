import Header from "../componets/Header";
import Footer from "../componets/Footer";
import BannerW from "../componets/BannerWithoutButton";
import BlurCard from "../componets/BlurCard";

// import AleatorY_Image_1 from "../../assets/Imgs/Services/Aleatory_image_1.svg"
// import AleatorY_Image_2 from "../../assets/Imgs/Services/Aleatory_image_2.svg"
// import AleatorY_Image_3 from "../../assets/Imgs/Services/Aleatory_image_3.svg"
// import AleatorY_Image_4 from "../../assets/Imgs/Services/Aleatory_image_4.svg"
// import AleatorY_Image_5 from "../../assets/Imgs/Services/Aleatory_image_5.svg"
// import AleatorY_Image_6 from "../../assets/Imgs/Services/Aleatory_image_6.svg"
// import AleatorY_Image_7 from "../../assets/Imgs/Services/Aleatory_image_7.svg"
// import AleatorY_Image_8 from "../../assets/Imgs/Services/Aleatory_image_8.svg"
// import AleatorY_Image_9 from "../../assets/Imgs/Services/Aleatory_image_9.svg"

import LogoEntreprise from "../../public/assets/Imgs/Services/Logo_other_enteprise.svg?react"

import Item1 from "../../public/assets/Imgs/Imagens sem letras/Imagem_1.jpg"
import Item2 from "../../public/assets/Imgs/Imagens sem letras/Imagem_2.jpg"
import Item3 from "../../public/assets/Imgs/Imagens sem letras/Imagem_3.png"
import Item4 from "../../public/assets/Imgs/Imagens sem letras/Imagem_4.jpg"
import Item5 from "../../public/assets/Imgs/Imagens sem letras/Imagem_5.jpg"
import Item6 from "../../public/assets/Imgs/Imagens sem letras/Imagem_6.jpg"
import Item7 from "../../public/assets/Imgs/Imagens sem letras/Imagem_7.jpg"
import Item8 from "../../public/assets/Imgs/Imagens sem letras/Imagem_8.png"
import Item9 from "../../public/assets/Imgs/Imagens sem letras/Imagem_9.jpg"
import Item10 from "../../public/assets/Imgs/Imagens sem letras/Imagem10.jpg"
import Item11 from "../../public/assets/Imgs/Imagens sem letras/Imagem_11.jpg"
import Item12 from "../../public/assets/Imgs/Imagens sem letras/Imagem_12.jpg"



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
            <BlurCard image={Item1} title="Sistema de Gestão de Equipamentos (SGE)" content="No SGE as inspeções são planejadas considerando o potencial dos equipamentos de desenvolverem falhas motivadas por mecanismos de danos conhecidos. O objetivo deste processo é a detecção antecipada das falhas que poderão gerar acidentes ou interrupção do processo fabril, permitindo executar ações necessárias para manter a integridade das instalações industriais e do meio ambiente." />
            <BlurCard image={Item2} title="Aplicativo Móvel para Inspeções em Campo" content="Aplicativo que auxilia inspetores e técnicos a realizarem inspeções diretamente no local, com a capacidade de registrar dados, tirar fotos e gerar relatórios em tempo real." />
            <BlurCard image={Item3} title="Módulo de Relatórios e Análises" content=" Serviços técnicos relacionados à integridade mecânica e a conformidade das diretrizes previstas na NR13, análise de risco de mudanças e elaboração de plano de inspeção para monitorar a vida útil dos equipamentos." />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="SemiBold text-center text-[20px] my-20">Soluções de Software para Gestão de Integridade Mecânica</h1>
          <div className="flex justify-center items-center flex-col gap-10  w-full 
          lg:flex-row flex-wrap">
            <BlurCard image={Item4} title=" Consultoria em Conformidade NR-13" content="Os relatórios permitem identificar as inspeções pendentes para que os usuários possam realizar os serviços programados. Vários relatórios podem ser exportados para o Excel, com diferentes níveis de informações, todos a partir do filtro de restrições que permite ao usuário direcionar e especificar a gama de TAGs nos quais deseja consultar." />
            <BlurCard image={Item5} title="Auditorias de Segurança" content=" Realização de auditorias periódicas para identificar não conformidades e riscos potenciais, fornecendo recomendações detalhadas para melhorias e correções necessárias." />
            <BlurCard image={Item6} title="Serviços de Integração" content="É possível integrar o SGE com outros sistemas utilizados pela empresa, permitindo o compartilhamento de informações entre os dois sistemas, especialmente nas funcionalidades de Recomendação de Inspeção e Solicitação de Serviços." />
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="SemiBold text-center text-[20px] my-20">Soluções de Software para Gestão de Integridade Mecânica</h1>
          <div className="flex justify-center items-center flex-col gap-10  w-full 
          lg:flex-row flex-wrap">
            <BlurCard image={Item7} title="Suporte Técnico 24/7" content="Equipe de especialistas disponíveis para oferecer suporte técnico contínuo, solucionando problemas e garantindo a operação ininterrupta no SGE." />
            <BlurCard image={Item8} title="Manutenção e Atualização de Sistemas" content="Serviços de manutenção regular para garantir que as soluções permaneçam eficientes, seguras e em conformidade mesmo após o desenvolvimento de melhorias no SGE." />
            <BlurCard image={Item9} title="Treinamento e Capacitações" content="Programa de treinamento para a equipe de integridade mecânica, planejamento e operação. Com foco nas melhores práticas de segurança e em conformidade com a NR-13.  Oferecemos os treinamentos de forma presencial ou online." />
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="SemiBold text-center text-[20px] my-20"> Inovação Tecnológica e Desenvolvimento Personalizado </h1>
          <div className="flex justify-center items-center flex-col gap-10  w-full 
          lg:flex-row flex-wrap">
            <BlurCard image={Item10} title="Desenvolvimento de Soluções Customizadas" content="Criação de softwares e ferramentas específicas para atender às necessidades únicas de cada cliente, garantindo que todas as particularidades operacionais e regulamentares sejam contempladas." />
            <BlurCard image={Item11} title="Serviços de Implementação" content="Planejamento e execução do processo de implementação do software APM, organizando os dados e preparando as planilhas para carregamento em massa." />
            <BlurCard image={Item12} title="Análise de Dados e Big Data" content="Utilização de análise de dados avançada para fornecer percepções valiosos sobre o desempenho dos equipamentos." />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}



