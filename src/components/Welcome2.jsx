
import {BsFillCheckCircleFill} from "react-icons/bs"
import CompanyRegistery from "./CompanyRegistery"
import UserProfile from "./UserProfile"
import CompanyProfile from "./CompanyProfile"





const Welcome2 = () => {
  return (
    <div className="max-w-[1087px] 2xl:max-w-full gap-[45px] lg:gap-[85px] flex">
       <div className="w-[250px] flex flex-col gap-[45px] py-14">
         <div className="flex flex-col w-full gap-5">
           <p  className="font-[700] text-[1.1rem]">Required information</p>
           <div className="flex items-center px-4  gap-4"><BsFillCheckCircleFill color="green"/> User profile</div>
           <div className="flex items-center px-4  gap-4"><BsFillCheckCircleFill color="green"/> Company profile</div>
           <div className="flex items-center px-4  gap-4"><BsFillCheckCircleFill color="green"/> Company register</div>
           <div className="flex items-center px-4  gap-4"><BsFillCheckCircleFill color="gray"/> interests</div>
         </div>
         <div className="flex flex-col w-full gap-5">
           <p className="font-[700] text-[1.1rem]">Public information</p>
           <div className="flex items-center px-4  gap-4"><BsFillCheckCircleFill color="green"/>Logo</div>
           <div className="flex items-center px-4  gap-4"><BsFillCheckCircleFill color="green"/> Certificates</div>
         </div>
       </div>

        <UserProfile/>
        {/* <CompanyProfile/> */}
        {/* <CompanyRegistery/> */}

   </div>
  )
}

export default Welcome2
