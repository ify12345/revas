
// import NavBar from './components/NavBar'
import logo from "./assets/Frame 6.png";
import {AiOutlineArrowRight} from "react-icons/ai";
import img from './assets/Recyclates.png';
import img1 from './assets/Rectangle 5.png';
import img2 from './assets/22.png';
import img3 from './assets/23.png';


const App = () => {
  return (
    <div className="w-screen flex flex-col">
      <section className=" bg-black max-w-[100%] min-h-auto">
        {/* navbar */}
        <nav className="bg-black text-white flex justify-between p-[100px] items-center min-w-full gap-6 md:gap-2">
             <img className="object-cover w-fit" src={logo} alt="" />
             <button className="rounded-3xl bg-white flex justify-between items-center border border-white text-black gap-2 max-w-[228px] py-3 px-5"><p className="hidden md:flex text-center">Join our waitlist</p> <AiOutlineArrowRight size={10}/></button>
        </nav>
        {/* second section */}
        <section className="bg-black text-white flex flex-col max-w-full h-auto pb-[270px]">
          <div className="mx-auto flex flex-col  max-w-[1068px] gap-[42px] px-20">
              <p className="font-urbanist text-[84px] leading-[93.2px] text-center ">Global trading platform for recycled plastic</p>
              <p className="text-center text-[20px] font-[400]">We enable buyers and sellers to efficiently trade recycled plastic with confidence, bringing increased opportunity for recycled content for the world’s products and packaging.</p>
              <button className=" mx-auto max-w-[228px] rounded-3xl bg-white flex items-center border border-white text-black gap-2 py-3 px-5">Join our waitlist <AiOutlineArrowRight size={10}/></button>       
          </div>
        </section>
        {/* image */}
        
      </section>  


      <section className="max-w-full">
        {/* remaining section of page */}
        <div className="mx-auto relative top-[-100px]  md:top-[-300px]">
        {/* image shit */}
            <div className="w-full">
              <img className="object-fit w-full" src={img} alt="" />
            </div>

        <section className="w-screen border flex flex-col gap-[32px]">

          <div className="mx-auto text-center">
            <p className="text-[52px] leading-[68px] font-[600]">Buy or Sell Recycled Plastic</p>
            <p className="leading-[26px] font-[400] text-[20px]">Plastics can be traded in the forms of bales, flakes and pellets</p>
          </div>

          <div className="w-full border">
              <div className=" flex justify-center gap-[18px] bg-black text-white rounded-[100px] max-w-fit mx-auto items-start">
                   <p className= "p-[16px] active">Plastic Bales</p>
                    <p className="p-[16px]">Plastic Flakes</p>
                   <p className="p-[16px]">Plastic Pellets</p>
              </div>                
          </div>
           
           <div className="mx-[45px] xl:mx-[90px] max-w-full grid grid-cols-1 xl:grid-cols-2 auto-cols-[630.5px] items-center gap-[50px] xl:gap-[155px] p-[40px] md:p-[99px]">
              <div className="flex flex-col gap-[10px]  xl:gap-[38px] max-h-auto max-w-full">
                <p className="lg:leading-[63px] text-[20px] xl:text-[52px] font-[700]">Plastic Bales</p>
                <p className="leading-[18px] xl:leading-[26px] text-[14px] xl:text-[20px] font-[400]">Bales trading on the RPX are primarily any whole polyethylene terephthalate (PET) bottle with a screw-neck top that contains the ASTM D7611 “#1, PET or PETE” resin identification code and that is clear, transparent green, or transparent light blue.</p>
                <button className="flex text-white bg-black items-center gap-[10px] rounded-[50px] max-w-[151px]  lg:py-[16px] px-[32px]">Register <AiOutlineArrowRight size={10}/> </button>
              </div>
              <div className="border-black rounded border-2">
                <img className="w-full" src={img1} alt="" />
              </div>
           </div>

           <div className="mx-[45px] xl:mx-[90px] max-w-full grid grid-cols-1 xl:grid-cols-2 auto-cols-[630.5px] items-center gap-[50px] xl:gap-[155px] p-[40px] md:p-[99px]">
           <div className="border-black rounded border-2">
                <img className="w-full" src={img2} alt="" />
              </div>
              <div className="flex flex-col gap-[38px]  xl:gap-[14px] max-h-auto max-w-full">
                <p className="text-[11px] leading-[10px]">OUR MARKETPLACE</p>
                <p className="xl:leading-[48px] text-[20px] xl:text-[42px] font-[600]">Quality-Controlled Global Marketplace for Recycled Plastics</p>

                <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">We are a global marketplace for recycled plastics, with a wide range of plastic types and grades available..
                </p>

                <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">
                Our platform supports both post-industrial and post-consumer plastics, and we provide quality control services to ensure that the plastic meets the required specifications
                </p>

                <button className="flex justify-center text-white bg-black items-center gap-[10px] rounded-[50px] max-w-[225px] py-[16px]">Join our waitlist <AiOutlineArrowRight size={10}/> </button>
              </div>       
           </div>

           <div className="mx-[45px] xl:mx-[90px] max-w-full grid grid-cols-1 xl:grid-cols-2 auto-cols-[630.5px] items-center gap-[50px] xl:gap-[155px] p-[40px] md:p-[99px]">
            
              <div className="flex flex-col gap-[38px]  xl:gap-[14px] max-h-auto max-w-full">
                <p className="text-[11px] leading-[10px]">OUR PRODUCTS</p>
                <p className="xl:leading-[48px] text-[20px] xl:text-[42px] font-[600]">Access to a wide range of Recycled Plastics</p>

                <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">We offer a wide range of recycled plastic products, including PET, HDPE, LDPE, PP, and more. We source our products from trusted suppliers worldwide, ensuring the highest quality standards. 
                </p>

                <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">
                Our products are available in various forms, including baled, shredded, and granulated, and are suitable for a wide range of applications.
                </p>

                <button className="flex justify-center text-white bg-black items-center gap-[10px] rounded-[50px] max-w-[225px] py-[16px]">Join our waitlist <AiOutlineArrowRight size={10}/> </button>
              </div>  

              <div className="border-black rounded border-2">
                <img className="w-full" src={img3} alt="" />
              </div>     
           </div>

          






         </section>
    





        </div>
      </section>
    
    
    




















    </div>
  )
}

export default App
