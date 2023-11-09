import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const SignIn = () => {
  return (
    <section className="w-screen h-screen">
         <nav className="flex justify-center lg:justify-start mx-auto lg:mx-0 max-w-full border-b-[0.5px] py-6 px-10 border-black">
            <img className="max-w-[120px] object-cover" src={logo} alt="" />
         </nav>

     
         <div className="max-w-[460px] flex flex-col justify-center mx-[40px] sm:mx-auto h-full gap-8">
            <p className="text-[2rem] max-w-[442px] font-[600] leading-[40px] text-center">Sign in to revas</p>

             <form className="max-w-full flex flex-col gap-6" action="">
                <div className="max-w-full flex flex-col">
                 <label htmlFor="">Email</label>
                 <input className="max-w-full px-[16px] py-[8px] border rounded-[50px]" type="text" placeholder="Company" />
                </div>
                <div className="max-w-full flex flex-col">
                 <label htmlFor="">Password</label>
                 <input className="max-w-full px-[16px] py-[8px] border rounded-[50px]" type="text" placeholder="Company" />
                </div>
                <div className="flex gap-7 text-[0.8rem] text-[#E6E1E5] justify-between">
                    <div className="flex items-center gap-6">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">Remember me</label>
                    </div>
                <p className="text-[0.8rem] text-[#E6E1E5]">Forgot Password?</p>
                </div>
                <Link to="/dashboard" className="max-w-full flex items-center justify-center gap-3 bg-black text-white rounded-[50px] py-[12px]">Login<AiOutlineArrowRight size={10} /></Link >
             </form>
             <div className="flex max-w-full items-center justify-center"><p>Don't Have an account?</p><Link to="/signup" className="font-[700]">Sign up</Link></div>
           </div>
       

    </section>
  )
}

export default SignIn
