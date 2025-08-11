type Props = {
    image: any
    title: string
    content: string
}

export default function BlurCard({ image, title, content }: Props) {
    return (
        <>
            <div className="text-white m-0 relative  w-[338px] h-[408px]">
                <div style={{ backgroundImage: `url(${image})` }}
                    className="rounded-2xl absolute  bg-no-repeat bg-center bg-cover rounded-[30px]  w-[338px] h-full ">
                    <div className=" h-full w-full absolute bg-black z-[1] opacity-[50%] rounded-[30px] "> </div>
                    <h1 className="p-4 w-full  flex justify-start SemiBold text-[19px] z-10 z-10 absolute">{title}</h1>
                    <p className="absolute bottom-0 p-4 z-[1]  Medium"> {content} </p>
                </div>
            </div>
        </>
    )
}
