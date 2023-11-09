import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import dash from "../assets/Category.png";
import dash1 from "../assets/Combined Shape.png";
import invent from "../assets/inventory_2.png";
import task from "../assets/task.png";
import actions from "../assets/pending_actions.png";
import saved from "../assets/bookmark_border.png";
import alarm from "../assets/notifications_none.png";
import settings from "../assets/Setting.png";
import logout from "../assets/Logout.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const DashBoard = () => {
  return (
    <section className="w-screen h-screen flex">
        {/* left side */}
        <aside className="w-[18%] h-screen flex flex-col bg-[#F5F5F5]  gap-4 justify-between">

            <div className="max-w-full py-10  mx-8">
                <img src={logo} alt="" />
            </div>

            <div className="max-w-full flex flex-col text-[1rem] gap-4 pb-8 border-b border-gray-400 mx-2">
               <Link className="flex gap-3 bg-black text-white px-4 rounded-[100px] py-2">
                <img src={dash} alt="" />
                <p>Dashboard</p>
               </Link>
               <Link className="flex gap-3 px-4">
                <img src={invent} alt="" />
                <p>My inventory</p>
               </Link>
               <Link className="flex gap-3 px-4">
                <img src={task} alt="" />
                <p>My Task</p>
               </Link>
               <Link className="flex gap-3 px-4">
                <img src={actions} alt="" />
                <p>My Actions</p>
               </Link>
               <Link className="flex gap-3 px-4">
                <img src={saved} alt="" />
                <p>Saved Searches</p>
               </Link>
               <Link className="flex gap-3 px-4">
                <img src={alarm} alt="" />
                <p>Notifications</p>
               </Link>
               <Link className="flex gap-3 px-5 ">
                <img src={settings} alt="" />
                <p>Settings</p>
               </Link>
            </div>

            <div className="max-w-full flex flex-col text-[1rem] gap-4 pb-10 border-b border-gray-400 mx-2">
                <p className="px-4">PRODUCT DATABASE</p>
                <Link className="flex gap-3 px-4 rounded-[100px]  py-2">
                <img className="bg-white" src={dash1} alt="" />
                <p>Recyclates</p>
               </Link>
                <Link className="flex gap-3 px-4 rounded-[100px] py-2">
                <img src={invent} alt="" />
                <p>Feedbacks</p>
               </Link>
            </div>     

            <div className="max-w-full flex flex-col text-[1rem] gap-4 mx-2">
                <p className="px-4">SPOT MARKET</p>
                <Link className="flex gap-3 px-4 rounded-[100px]  py-2">
                <img className="bg-white" src={dash1} alt="" />
                <p> Spot Recyclates</p>
               </Link>
                <Link className="flex gap-3 px-4 rounded-[100px] py-2">
                <img src={invent} alt="" />
                <p>Spot Feedbacks</p>
               </Link>
            </div>     

            <div className="max-w-full flex flex-col text-[1rem] gap-4 mx-2">
                <Link className="flex gap-3 px-4 rounded-[100px] py-2">
                <img src={logout} alt="" />
                <p className="text-[#CC5F5F]">Logout</p>
               </Link>
            </div>          
          








        </aside>
        {/* right side */}
        <main className="h-screen w-[82%]  py-20 px-10 flex flex-col gap-8">
           <div className="bg-[#f5f5f5] max-w-[1087px] rounded-[12px]">
                lorem1000
           </div>
           <div className="bg-[#f5f5f5] max-w-[1087px] rounded-[12px] flex flex-col gap-5">
                <p className="font-[600] text-[20px] leading-[26px]">Welcome to Revas</p>
                <p className="text-[0.9rem] max-w-[980px] leading-[18px]">To unlock the full features of Revas and become an approved company, you need to provide some information about yourself and your company.</p>
               <p className="text-[0.9rem] max-w-[980px] leading-[18px]">Click <Link className="font-[800]"> start</Link> to begin setting up your company profile.</p>
           </div>
           <button className=" gap-3 max-w-[91px] flex bg-black text-white items-center text-center text-[0.9rem] justify-center rounded-[100px] py-[10px] px-[16px]">Start <AiOutlineArrowRight size={10}/></button>
        </main>
    </section>
  )
}

export default DashBoard
