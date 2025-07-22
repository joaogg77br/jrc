type Props = { 
  number:number
}

export default function CircleGradient({number}:Props){
  return ( 
  <div className="flex text-white h-12 w-12 Medium text-[15px] rounded-full bg-linear-to-r from-[#43388E] to-[#6A5DA5] items-center justify-center">
    {number}
  </div>
  )
}
