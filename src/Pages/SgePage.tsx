import Header from "../componets/Header"
import Footer from "../componets/Footer"
import BannerW from "../componets/BannerWithoutButton"
import FrameSge from "../componets/Frame_sge"

export default function SgePage() {
  return (
    <>
      <Header />
      <BannerW title="Sge"
        message="O Software SGE, é um sistema especialista na NR-13, Norma Regulamentadora N° 13 do Ministério do Trabalho, que estabelece critérios para o acompanhamento da integridade mecânica de caldeiras, vasos de pressão, tubulações e tanques metálicos de armazenamento. O SGE além de atender aos requisitos da NR-13, proporciona confiabilidade, redução de custos e compartilhamento das informações com outros sistemas da empresa."
      />
      <div className="lg:px-30">
        <h1 className="SemiBold text-center pt-20 m-4 text-[30px] ">
          Por que utilizar o SGE?
        </h1>
        <p className="text-[15px] Medium text-center p-4 text-[#999999] pb-6">
          O SGE está alinhado com os critérios estabelecidos na NR-13.
        </p>
        <section className="flex p-4 lg:p-0 flex-col gap-8 my-20
          lg:grid grid-cols-3 
        ">
          <FrameSge number={1} message="Categoriza os vasos de pressão cujo produto (Pressão x Volume) seja superior a 8 (oito);" />
          <FrameSge number={2} message="Classifica os vasos de pressão que contenham fluidos da classe A, independente do produto (Pressão x Volume);" />
          <FrameSge number={3} message="Define a categoria NR-13 de forma automática e com a respectiva frequência estabelecida na Norma;" />
          <FrameSge number={4} message="Identifica os vasos de pressão fabricados em Plástico Reforçado de Fibra de Vidro - PRFV;" />
          <FrameSge number={5} message="Tratativas para os vasos de pressão submetidos a vácuo;" />
          <FrameSge number={6} message="Controla as tubulações que contenham fluidos de classe A ou B, ligadas a caldeiras ou vasos de pressão abrangidos na NR-13;" />
          <FrameSge number={7} message="Programa de inspeção elaborado por tubulação, por linha ou por sistema;" />
          <FrameSge number={8} message="Os intervalos de inspeção das tubulações atendem aos prazos máximos da inspeção interna do vaso ou caldeira mais crítica a elas ligados;" />
          <FrameSge number={9} message="Controla as caldeiras com pressão de operação superior a 60 kPa (0,61 kgf/cm²);" />
          <FrameSge number={10} message="Plano de inspeção de segurança periódica para os tanques, de acordo com os prazos estabelecidos pela equipe técnica;" />
          <FrameSge number={11} message="Impressão do Relatório de Inspeção com informações exigidas pela NR-13;" />
          <FrameSge number={12} message="Armazenamento dos registros fotográficos ou registro da localização das anomalias significativas detectadas nas inspeções." />
        </section>
      </div>
      <Footer />
    </>
  )
}
