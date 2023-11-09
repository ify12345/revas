import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom"


const Welcome = () => {
  return (
   
    <div className="bg-[#f5f5f5] max-w-[1087px] rounded-[12px] flex flex-col gap-5 pl-[28px] pr-[20px] md:pr-[156px] py-[43px]">
    <p className="max-w-[800px] font-[600] text-[20px] leading-[26px] mb-[16px]">Welcome to Revas</p>
    <p className="text-[0.9rem] max-w-[980px] leading-[18px]">To unlock the full features of Revas and become an approved company, you need to provide some information about yourself and your company.</p>
    <p className="text-[0.9rem] max-w-[980px] leading-[18px] mb-[31px]">Click <Link className="font-[800]"> start</Link> to begin setting up your company profile.</p>
    <Link to="" className=" gap-3 max-w-[91px] flex bg-black text-white items-center text-center text-[0.9rem] justify-center rounded-[100px] py-[10px] px-[16px]">Start <AiOutlineArrowRight size={10}/></Link>
</div> 
  )
}

export default Welcome;

