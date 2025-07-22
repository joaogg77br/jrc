type Props = {
    image: any
    title: string
    content: string
}

export default function BlurCard({ image, title, content }: Props) {
    return (
        <>
            <div className="text-white m-0 relative  w-[338px] h-[408px]
              ">
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="rounded-2xl 
                    absolute  bg-no-repeat   w-[338px] h-full ">
                </div>
            </div>
        </>
    )
}
