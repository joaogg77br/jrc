import "../css/Banner.css"
import ButtonGrandient from "./ButtonGradient"

type Props = {
  title: String,
  message: String
}

export default function Banner({ title, message }: Props) {
  return (
    <div className="Banner-container
      flex flex-col  p-6 justify-center  min-h-96 text-white
      lg:px-30
      ">
      <h1 className="Banner-title text-4xl">
        {title}
      </h1>
      <p className="text-white opacity-80 mt-6">{message}</p>
      <ButtonGrandient text={"Saiba mais"} />

    </div>
  )
}
