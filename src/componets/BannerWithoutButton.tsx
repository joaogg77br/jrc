import "../css/Banner.css"
type Props = {
  title: String,
  message: String
}

export default function BannerW({ title, message }: Props) {
  return (
    <div className="Banner-container
      flex flex-col  p-6 justify-center w-full  min-h-96 text-white 
      lg:px-30
      ">
      <h1 className="Banner-title
       text-4xl">
        {title}
      </h1>
      <p className="text-white  mt-6">{message}</p>
    </div>
  )
}
