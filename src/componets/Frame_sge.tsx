type Props = {
  number: number,
  message: string
}
import CircleGradient from "./CircleGradient"

export default function FrameSge({ number, message }: Props) {
  return (
    <div className="">
      <div className="my-5">
        <CircleGradient number={number} />
      </div>
      <div className="Medium text-[15px]">{message}</div>
    </div>
  )
}
