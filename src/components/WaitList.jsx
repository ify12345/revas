import { AiOutlineArrowRight } from "react-icons/ai"
import Logo from "../assets/logorevas.png"
import img4 from "../assets/small1.png";
import img6 from "../assets/lefticon2.png";
import img7 from "../assets/lefticon.png";
import { Link } from "react-router-dom";

const WaitList = () => {
  return (
   <section className="bg-black w-screen h-screen text-white text-[16px] flex justify-center items-center">
       <div className="absolute hidden md:flex max-w-[88px] top-[5%] left-[10%]"><img className="w-full object-cover" src={img4} alt="" /></div>
       <div className="absolute hidden md:flex max-w-[50px] top-[8%] right-[10%]"><img className="w-full object-cover" src={img4} alt="" /></div>
       <div className="absolute hidden md:flex max-w-[50px] bottom-[40%] left-[15%]"><img className="w-full object-cover" src={img6} alt="" /></div>
       <div className="absolute hidden md:flex  bottom-[0] left-[9%]"><img className="w-full h-full object-cover" src={img6} alt="" /></div>
       <div className="absolute hidden md:flex  bottom-[0] right-[0]"><img className="w-full h-full object-cover" src={img7} alt="" /></div>




        <main className="w-[500px] flex flex-col gap-[10px]">

           <div className="max-w-[50px] mx-auto">
             <img className="max-w-full object-cover" src={Logo} alt="" />
           </div>

           <p className="max-w-[200px] text-center mx-auto font-[600] leading-[8px] lg:leading-[16px]">Revas Plastic Exchange</p>
           
           <div className="max-w-full gap-[20px] flex flex-col">
             <p className="max-w-[374px] mx-auto font-[500] text-[1.5rem] lg:text-[3.2rem] 2xl:text-[3rem] text-center leading-[20px] lg:leading-[63px] 2xl:leading-[50px]">Join the waitlist for Revas</p>
             <form className="max-w-full flex flex-col gap-[10px]" action="">
                 <input className="w-full rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white" type="text" placeholder="Full Name" />
                 <input className="max-w-full  rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white" type="text" placeholder="Company Name" />
                 <select name="" id="" className="relative w-full box-border inline-block  rounded-[50px] bg-black border-white border py-[8px] px-[20px] placeholder:text-white" >
                  <option className="" value="">Job Title</option>
                  <option value="">Job Title</option>
                  <option value="">Job Title</option>
                  <option value="">Job Title</option>
                  <option value="">Job Title</option>
                 </select>
                 {/* <input className="max-w-full  rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white" type="text" placeholder="Job Title" /> */}
                 <input className="max-w-full  rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white" type="text" placeholder="Work email" />
                 <input className="max-w-full  rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white" type="text" placeholder="Country" />
                 <input className="max-w-full  rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white" type="text" placeholder="State" />
                 <Link to='/success' className="max-w-full bg-white text-black flex items-center rounded-[50px] justify-center gap-3 py-[16px] px-[16px]">Join the waitlist <AiOutlineArrowRight size={10} /></Link>
             </form>
           </div>

        </main>

   </section>
  )
}

export default WaitList
