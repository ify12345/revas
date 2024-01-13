import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AiOutlineArrowRight } from "react-icons/ai";



const EmailConfirmation = () => {
  return (
    <section className="w-screen h-screen">
         <nav className="flex justify-center lg:justify-start mx-auto lg:mx-0 max-w-full border-b-[0.5px] py-6 px-10 border-black">
            <img className="max-w-[120px] object-cover" src={logo} alt="" />
         </nav>

     
         <div className="max-w-[460px] flex flex-col justify-center mx-[40px] sm:mx-auto h-full gap-8">
            <p className="text-[2rem] max-w-[442px] font-[600] leading-[40px] text-center">Confirm your email</p>

             <form className="max-w-full flex flex-col gap-6" action="">
                <div className="max-w-full flex flex-col">
                 <label className="mx-auto flex items-center text-center max-w-[390px] leading-[18px]" htmlFor="">We have sent an email to **user@email.com** to 
                confirm the validity of your email address. Click in the link 
                provided via email, follow the steps and start to use Revas</label>
                 <input className="max-w-full px-[16px] py-[8px] border-b " type="text" />
                </div>
                <p className="max-w-[178px] mx-auto text-[0.8rem]">Didn’t receive any message?</p>
                <p className="max-w-[84px] text-[0.8rem] text-center mx-auto border-b border-black">Resend email</p>
                <Link to="/" className="max-w-full flex items-center justify-center gap-3 text-[0.5rem] lg:text-[1rem] bg-black text-white rounded-[50px] py-[12px]">Go back to Revas Homepage<AiOutlineArrowRight size={10} /></Link>
             </form>
             <div className="flex max-w-full items-center justify-center"><p>Do not Have an account?</p><Link to="/signup" className="font-[700]">Sign up</Link></div>
           </div>
       

    </section>
  )
}

export default EmailConfirmation
