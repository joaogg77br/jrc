import Form from "./componets/Form.tsx"
import Banner from './componets/Banner'
import Header from './componets/Header'
import Motivos from './componets/Motivos'
import Parceiros from './componets/Parceiros'
import Servicos from './componets/Servicos'
import Sge from './componets/Sge'
import Footer from "./componets/Footer.tsx"

function App() {
  return (
    <div className=' min-h-dvh'>
      <Header />
      <Banner title="Sua empresa um passo a frente com tecnologia de ponta."
        message="Desenvolvemos sistemas de informações, totalmente aderente às necessidades funcionais da indústria. Especialmente para aquelas da gestão de conformidade NR-13." />
      <Parceiros />
      <Servicos />
      <Motivos />
      <Sge />
      <Form />
      <Footer />
    </div>
  )
}

export default App
