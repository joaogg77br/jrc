type Props = {
  text: String
  disabled: Boolean | undefined
}
export default function ButtonGrandient({ text, disabled = undefined }: Props) {
  return (
    <>
      <button className={`bg-linear-to-b rounded-[20px] w-36 my-4 p-2  
      hover:cursor-pointer duration-300
       ${disabled ? `from-gray-400 to-zinc-800` : `hover:from-purple-800 to-purple-400 from-purple-400 to-purple-800`}`}>
        {text}
      </button>
    </>
  )
}
