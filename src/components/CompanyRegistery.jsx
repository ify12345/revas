import { AiOutlineArrowRight } from "react-icons/ai"
import { BsShieldFillExclamation } from "react-icons/bs"
import { Link } from "react-router-dom"


const CompanyRegistery = () => {
  return (
    <div className="flex flex-col p-[30px] bg-[#f5f5f5] max-w-full flex-1 gap-[20px] rounded-[10px]">
    <p className="font-[700] text-[1.25rem] py-[22px]">Company Registry</p>
    <div className="bg-[#E1E2F7] px-[40px] flex gap-4 items-center py-[25px] rounded-[10px]">
        <BsShieldFillExclamation size={20}/>
         <p className="font-[0.75rem]">Please provide at least one of the registration information. These Information will be used to verify
authenticity of your company.</p>
    </div>
    <form action="" className="flex max-w-full gap-[20px]">
     <div className="flex flex-col w-[50%] gap-[20px]">
        <div className="flex flex-col gap-[10px]">
            <label htmlFor="">TAX ID</label>
            <input className="rounded-[50px] px-[20px] py-[8px]" type="text" placeholder="TAX ID" />
        </div>
        <div className="flex flex-col gap-[10px]">
            <label htmlFor="">Registration ID</label>
            <input className="rounded-[50px] px-[20px] py-[8px]" type="text" placeholder="Registration ID" />
        </div>
        <p className="text-red-600 text-[0.75rem]">Fill in at least Tax ID, VAT ID or Registration ID</p>
      </div>

     <div className="flex flex-col w-[50%] gap-[20px]">
       <div className="flex flex-col gap-[10px]">
        <label htmlFor="">VAT ID</label>
        <input className="rounded-[50px] px-[20px] py-[8px]" type="text" placeholder="VAT ID" />
       </div>
       <div className="flex flex-col gap-[10px]">
        <label htmlFor="">Registration Court</label>
        <input className="rounded-[50px] px-[20px] py-[8px] mb-20" type="text" placeholder="Registration court" />
       </div>


       <div className="w-full flex justify-between">
          <div></div>
         <Link className="flex end-0 bg-black text-white rounded-[50px] items-center gap-2 px-3 py-2">Next <AiOutlineArrowRight size={10}/></Link>
       </div>
     </div>

      
    </form>
  </div> 
  )
}

export default CompanyRegistery
