
import logo from "../assets/logo.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Resend = () => {
  return (
    <section className="w-screen h-screen">
         <nav className="flex justify-center lg:justify-start mx-auto lg:mx-0 max-w-full border-b-[0.5px] py-6 px-10 border-black">
            <img className="max-w-[120px] object-cover" src={logo} alt="" />
         </nav>

     
         <div className="max-w-[460px] flex flex-col justify-center mx-[40px] sm:mx-auto h-full gap-8">
            <p className="text-[2rem] max-w-[442px] font-[600] leading-[40px] text-center">Resend activation email</p>
            <p className="text-[0.8rem] max-w-[330px] font-[400] mx-auto text-center">You haven't received your activation mail? 
Enter your email and click the button.</p>
           
             <form className="max-w-full flex flex-col gap-6" action="">
                <div className="max-w-full flex flex-col gap-4">
                 <label className="flex  text-center max-w-[330px] leading-[18px]" htmlFor="">Email</label>
                 <input className="max-w-full px-[16px] py-[8px] border rounded-[50px] " placeholder="Company" type="text" />
                </div>
        
                <button className="max-w-full flex items-center justify-center gap-3 text-[0.5rem] lg:text-[1rem] bg-black text-white rounded-[50px] py-[12px]">Re-send my activation link<AiOutlineArrowRight size={10} /></button>
             </form>
            
           </div>
       

    </section>
  )
}

export default Resend
