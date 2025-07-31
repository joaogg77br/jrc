type Props = {
    name: String
}

export default function ButtonFooter({ name }: Props) {
    return (
        <div className="
        border py-2 px-3
        flex items-center justify-center
        border-[#999999] text-[#999999] Medium border-2 
        rounded-[30px] cursor-pointer duration-300
        hover:border-zinc-800 hover:text-zinc-800
        ">
            {name}
        </div>
    )
}