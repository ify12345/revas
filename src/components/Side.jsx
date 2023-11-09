
import { BsCircle, BsFillCheckCircleFill, BsHourglassBottom, BsInfoCircle } from "react-icons/bs";
import Welcome2 from "./Welcome2";
import Welcome from "./welcome";
import { AiOutlineMinus } from "react-icons/ai";
 

const Side = () => {
  return (
    <main className="h-screen overflow-y-auto w-screen lg:w-[82%]  py-10 px-10 flex flex-col gap-8">
    <div className="bg-[#f5f5f5] max-w-[1087px] 2xl:max-w-full rounded-[12px] px-[5px] sm:px-[20px] md:px-[92px] py-[80px]  flex ">
        <div className="max-w-[853px] flex gap-[10px] md:gap-[75px] justify-center h-full mx-auto">
            <div className="flex flex-col items-center relative ">
               <BsFillCheckCircleFill/>
              Registration
             <div className="absolute top-[20%] right-[-120px] w-[150px] bg-black h-[1px]"></div>
            </div>

            <div className="flex flex-col items-center relative">
            <BsFillCheckCircleFill/>
            Email Verification
            <div className="absolute top-[20%] right-[-100px] w-[150px] bg-black h-[1px]"></div>
            </div>
    

            <div className="flex flex-col items-center relative">
            <BsHourglassBottom/>
            Provide Information
            <div className="absolute top-[20%] right-[-110px] w-[150px] bg-black h-[1px]"></div>
            </div>
       

            <div className="flex flex-col items-center relative">
            <BsCircle/>
             Pending Review
            </div>
       </div>
    </div>
     {/* <Welcome/> */}
     <Welcome2/>

   {/*section2  */}
  

 

 </main>
  )
}

export default Side
