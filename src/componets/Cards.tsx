type Props = {
  image: any
  title: String
  content: String
}


export default function Cards({ image, title, content }: Props) {
  return (
    <div className="bg-[#F1F1F2] pb-4 rounded-2xl px-4 py-2">
      <div className="flex items-center bg-white justify-center   rounded-2xl  mt-10 p-4 h-26 w-26">
        <img src={image} />
      </div>
      <h1 className="SemiBold text-xl py-5">{title}</h1>
      <p className="Medium text-[#999999]">{content}</p>
    </div>
  )
}
