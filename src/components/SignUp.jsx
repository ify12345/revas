import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import frame from "../assets/signup.png"
import { AiOutlineArrowRight } from "react-icons/ai";
const SignUp = () => {
  return (
   <section className="w-screen text-[10px] lg:text-[16px] h-screen">
        <nav className="flex justify-center lg:justify-start mx-auto lg:mx-0 max-w-full border-b py-6 px-10 border-gray-600">
            <img className="max-w-[120px] object-cover" src={logo} alt="" />
        </nav>
        <main className="max-w-full flex mx-[20px] lg:mx-0 h-full">
           <div className="max-w-[100%] lg:max-w-[60%] flex flex-col justify-center mx-auto gap-6 h-full">
            <p className="text-[2rem] max-w-[442px] font-[600] leading-[40px] text-center">Join us in the future of plastics</p>
            <p className="max-w-[416px] text-[0.8rem] leading-[20px] text-center">You are only a few steps away from creating your account.</p>
             <form className="max-w-full flex flex-col gap-6" action="">
                <div className="max-w-full flex flex-col">
                 <label htmlFor="">Company</label>
                 <input className="max-w-full px-[16px] py-[8px] border rounded-[50px]" type="text" placeholder="Company" />
                </div>
                <div className="max-w-full flex flex-col">
                 <label htmlFor="">Name</label>
                 <input className="max-w-full px-[16px] py-[8px] border rounded-[50px]" type="text" placeholder="Company" />
                </div>
                <div className="max-w-full flex flex-col">
                 <label htmlFor="">Surname</label>
                 <input className="max-w-full px-[16px] py-[8px] border rounded-[50px]" type="text" placeholder="Company" />
                </div>
                <div className="max-w-full flex flex-col">
                 <label htmlFor="">Password</label>
                 <input className="max-w-full px-[16px] py-[8px] border rounded-[50px]" type="text" placeholder="Company" />
                </div>
                <div className="max-w-full flex flex-col">
                 <label htmlFor="">Repeat Password</label>
                 <input className="max-w-full px-[16px] py-[8px] border rounded-[50px]" type="text" placeholder="Company" />
                </div>
                <div className="flex gap-7"><input type="checkbox" name="" id="" />
                <p className="text-[0.8rem] text-[#E6E1E5]">I accept the <Link className="underline text-black">Terms & Conditions</Link> and <Link className="text-black underline">Privacy Policy</Link> by joining Revas.</p></div>
                <Link to="/confirmemail"  className="max-w-full flex items-center justify-center gap-3 bg-black text-white rounded-[50px] py-[12px]">Register<AiOutlineArrowRight size={10} /></Link>
             </form>
             <div className="flex max-w-full items-center justify-center"><p>Already Have an account?</p><Link to="/signin" className="font-[700]">Sign In</Link></div>
           </div>

           {/* image */}
           <div className=" max-w-[0%] h-full xl:max-w-[40%]">
            <img className="w-screen object-cover" src={frame} alt="" />
           </div>
        </main>
   </section>
  )
}

export default SignUp
