import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import dash from "../assets/images/Category.png";
import dash1 from "../assets/images/Combined Shape.png";
import invent from "../assets/images/inventory_2.png";
import task from "../assets/images/task.png";
import actions from "../assets/images/pending_actions.png";
import saved from "../assets/images/bookmark_border.png";
import alarm from "../assets/images/notifications_none.png";
import settings from "../assets/images/Setting.png";
import logout from "../assets/images/Logout.png";
import Side from "./Side";
import { useState } from "react";
import Recyclist from "./Recyclist";

const DashBoard = () => {
    const[active,setActive] = useState("dashboard")
  const activeFunc = ()=>  setActive("dashboard")
  const activeRecyclist = ()=>  setActive("recyclist")
 const image = active === "dashboard" ? dash : dash1  
 const image2 = active === "recyclist" ? dash : dash1  
const clicked = active === "dashboard" ? "bg-black text-white " : ""
 const clickeds = active === "recyclist" ? "bg-black text-white "  : ""

  return (
    <section className="w-screen h-screen flex">
        {/* left side */}
        <aside className="hidden w-[18%] h-fit  lg:flex flex-col bg-[#F5F5F5] gap-4 justify-between  px-2">

            <div className="max-w-full py-10  mx-8">
                <img src={logo} alt="" />
            </div>
          
            <div className="w-full flex flex-col text-[0.875rem] text-[#53545C] gap-4 pb-8 border-b border-gray-400 mx-1">
               <Link onClick={activeFunc} className={`"max-w-full  max-w-full  gap-3 px-4 py-2 flex rounded-[100px] py-2" ${clicked}`}>
                <img src={image} alt="" />
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
            <div className="w-full flex flex-col text-[0.875rem] text-[#53545C] gap-4 pb-10 border-b border-gray-400 mx-2">
                <p className="px-4">PRODUCT DATABASE</p>
                <Link onClick={activeRecyclist} className={`"flex gap-3 flex py-2 px-4 rounded-[100px] py-2" ${clickeds}`}>
                <img className="" src={image2} alt="" />
                <p>Recyclates</p>
               </Link>
                <Link className="flex gap-3 px-4 rounded-[100px] py-2">
                <img src={invent} alt="" />
                <p>Feedbacks</p>
               </Link>
            </div>     
            <div className="w-full flex flex-col text-[1rem] gap-4 mx-2 mb-32">
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
            <div className="w-full flex flex-col text-[1rem] gap-4 mx-2">
                <Link to="/signin" className="flex gap-3 px-4 rounded-[100px] py-2">
                <img src={logout} alt="" />
                <p className="text-[#CC5F5F]">Logout</p>
               </Link>
            </div>          
        </aside>
       





         {
            active === "dashboard" &&  <Side/>        
         }
         {
             active === "recyclist" && <Recyclist/>
         }
 
        
    </section>
  )
}

export default DashBoard
