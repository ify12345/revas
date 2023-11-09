import { AiOutlineArrowRight } from "react-icons/ai"
import { BsShieldFillExclamation } from "react-icons/bs"
import { Link } from "react-router-dom"


const CompanyProfile = () => {
  return (
    <div className="flex flex-col p-[30px] bg-[#f5f5f5] max-w-full flex-1 gap-[20px] rounded-[10px]">
         <p className="font-[700] text-[1.25rem] py-[22px]">Company Profile</p>
         <div className="bg-[#E1E2F7] px-[40px] flex gap-4 items-center py-[25px] rounded-[10px]">
             <BsShieldFillExclamation/>
              <p className="font-[0.75rem]">Please provide more information about your company</p>
         </div>
         <form action="" className="flex flex-col max-w-full gap-[20px]">
            <div className="flex flex-col gap-[10px]">
             <label htmlFor="">Name</label>
             <input className="rounded-[50px] px-[20px] py-[8px]" type="text" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col gap-[10px]">
             <label htmlFor="">Country</label>
             <select className="rounded-[50px] px-[20px] py-[8px]" type="text" >
                 <option value="">Australia</option>
             </select>
            </div>
            <div className="flex flex-col gap-[10px]">
             <label htmlFor="">Address</label>
             <input className="rounded-[50px] px-[20px] py-[8px]" type="email" placeholder="Enter your address" />
            </div>
            <div className="flex flex-col gap-[10px]">
             <label htmlFor="">Company Scope</label>
             <select className="text-gray-500 rounded-[50px] px-[20px] py-[8px]">
                 <option className="" value="">Trader</option>
                 <option value="">Male</option>
                 <option value="">Trader</option>
             </select>
            </div>
            <div className="flex flex-col gap-[10px]">
             <label htmlFor="">Company Size(No of Employees)</label>
             <select className="text-gray-500 rounded-[50px] px-[20px] py-[8px]">
                 <option className="" value="">1-10</option>
                 <option value="">10-20</option>
                 <option value="">30-400</option>
             </select>
            </div>
           
            <div className="w-full flex justify-between">
               <div></div>
              <Link className="flex end-0 bg-black text-white rounded-[50px] items-center gap-2 px-3 py-2">Next <AiOutlineArrowRight size={10}/></Link>
            </div>
         </form>
       </div> 
  )
}

export default CompanyProfile
