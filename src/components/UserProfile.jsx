import { AiOutlineArrowRight } from "react-icons/ai"
import { BsShieldFillExclamation } from "react-icons/bs"
import { Link } from "react-router-dom"


const UserProfile = () => {
  return (
   
      <div className="flex flex-col p-[30px] bg-[#f5f5f5] max-w-full flex-1 gap-[20px] rounded-[10px]">
      <p className="font-[700] text-[1.25rem] py-[22px]">User Profile</p>
      <div className="bg-[#E1E2F7] px-[40px] flex gap-4 items-center py-[25px] rounded-[10px]">
          <BsShieldFillExclamation/>
           <p className="font-[0.75rem]">These information will be used to contact you.</p>
      </div>
      <form action="" className="flex flex-col max-w-full gap-[20px]">
         <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Name</label>
          <input className="rounded-[50px] px-[20px] py-[8px]" type="text" placeholder="Enter your name" />
         </div>
         <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Surname</label>
          <input className="rounded-[50px] px-[20px] py-[8px]" type="text" placeholder="Enter your surname" />
         </div>
         <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Email</label>
          <input className="rounded-[50px] px-[20px] py-[8px]" type="email" placeholder="Enter your email" />
         </div>
         <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Gender</label>
          <select className="rounded-[50px] px-[20px] py-[8px]">
              <option value="">Gender</option>
              <option value="">Male</option>
              <option value="">Female</option>
          </select>
         </div>
         <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Phone</label>
          <input className="rounded-[50px] px-[20px] py-[8px]" type="email" placeholder="Enter your number" />
         </div>
         <div className="w-full flex justify-between">
            <div></div>
           <Link className="flex end-0 bg-black text-white rounded-[50px] items-center gap-2 px-3 py-2">Next <AiOutlineArrowRight size={10}/></Link>
         </div>
      </form>
    </div>

  )
}

export default UserProfile
