import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar, Pagination, Keyboard } from "swiper/modules"
import SwiperNavButtons from "./SwiperNavButtons"
import "swiper/css"
import 'swiper/css/navigation';
import BlurCard from "./BlurCard";

import SwiperScreenLg from "./SwiperScreenLg"
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
// import Item13 from "../../assets/Imgs/Imagens sem letras/Imagem_13.jpg"


export default function Servicos() {
  return (
    <div className="p-4 3 pl-6 bg-zinc-200 py-20
    lg:px-30 " >
      <div className="
       justify-between ">
        <h1 className="SemiBold text-3xl  my-4
        lg:text-4xl lg:w-full  lg:mr-60 ">Nossos serviços</h1>
        <p className="text-zinc-700 text-[15px]
        ">Fornecemos softwares especializados que ajudam as indústrias a cumprirem os requisitos da norma NR-13. Assim como consultoria especializada, suporte técnico, inovação e atualização tecnológica contínua.</p>
      </div>
      <div className="lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper p-4 flex  my-10"
        >
          <SwiperSlide className={`rounded-2xl  bg-no-repeat bg-cover `}>
            <BlurCard image={Item1} title="Sistema de Gestão de Equipamentos (SGE)" content="No SGE as inspeções são planejadas considerando o potencial dos equipamentos de desenvolverem falhas motivadas por mecanismos de danos conhecidos. O objetivo deste processo é a detecção antecipada das falhas que poderão gerar acidentes ou interrupção do processo fabril, permitindo executar ações necessárias para manter a integridade das instalações industriais e do meio ambiente." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item2} title="Aplicativo Móvel para Inspeções em Campo" content="Aplicativo que auxilia inspetores e técnicos a realizarem inspeções diretamente no local, com a capacidade de registrar dados, tirar fotos e gerar relatórios em tempo real." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item3} title="Módulo de Relatórios e Análises" content=" Serviços técnicos relacionados à integridade mecânica e a conformidade das diretrizes previstas na NR13, análise de risco de mudanças e elaboração de plano de inspeção para monitorar a vida útil dos equipamentos." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item4} title=" Consultoria em Conformidade NR-13" content="Os relatórios permitem identificar as inspeções pendentes para que os usuários possam realizar os serviços programados. Vários relatórios podem ser exportados para o Excel, com diferentes níveis de informações, todos a partir do filtro de restrições que permite ao usuário direcionar e especificar a gama de TAGs nos quais deseja consultar." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item5} title="Auditorias de Segurança" content=" Realização de auditorias periódicas para identificar não conformidades e riscos potenciais, fornecendo recomendações detalhadas para melhorias e correções necessárias." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item6} title="Serviços de Integração" content="É possível integrar o SGE com outros sistemas utilizados pela empresa, permitindo o compartilhamento de informações entre os dois sistemas, especialmente nas funcionalidades de Recomendação de Inspeção e Solicitação de Serviços." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item7} title="Suporte Técnico 24/7" content="Equipe de especialistas disponíveis para oferecer suporte técnico contínuo, solucionando problemas e garantindo a operação ininterrupta no SGE." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item8} title="Manutenção e Atualização de Sistemas" content="Serviços de manutenção regular para garantir que as soluções permaneçam eficientes, seguras e em conformidade mesmo após o desenvolvimento de melhorias no SGE." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item9} title="Treinamento e Capacitações" content="Programa de treinamento para a equipe de integridade mecânica, planejamento e operação. Com foco nas melhores práticas de segurança e em conformidade com a NR-13.  Oferecemos os treinamentos de forma presencial ou online." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item10} title="Desenvolvimento de Soluções Customizadas" content="Criação de softwares e ferramentas específicas para atender às necessidades únicas de cada cliente, garantindo que todas as particularidades operacionais e regulamentares sejam contempladas." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item11} title="Serviços de Implementação" content="Planejamento e execução do processo de implementação do software APM, organizando os dados e preparando as planilhas para carregamento em massa." />
          </SwiperSlide>
          <SwiperSlide>
            <BlurCard image={Item12} title="Análise de Dados e Big Data" content="Utilização de análise de dados avançada para fornecer percepções valiosos sobre o desempenho dos equipamentos." />
          </SwiperSlide>
          <SwiperNavButtons />
        </Swiper>
      </div>
      <div className="hidden lg:block">
        <SwiperScreenLg />
      </div>

    </div>
  )
}
