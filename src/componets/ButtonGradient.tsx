type Props = {
  text: String
}
export default function ButtonGrandient({ text }: Props) {
  return (
    <>
      <button className="bg-linear-to-b rounded-[20px] w-36 my-4 p-2 from-purple-400 to-purple-800
      hover:cursor-pointer
      ">
        {text}
      </button>
    </>
  )
}
