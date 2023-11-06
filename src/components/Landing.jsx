import logo from "../assets/Frame 6.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import img from "../assets/Recyclates.png";
import img1 from "../assets/Rectangle 5.png";
import img2 from "../assets/22.png";
import img3 from "../assets/23.png";
import img4 from "../assets/small1.png";
import img5 from "../assets/small2.png";
import img6 from "../assets/small3.png";
import img7 from "../assets/img7.png";
import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import family from "../assets/family.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="">
    <section className="bg-black w-full h-auto">
      {/* navbar */}
      <nav className="text-white flex justify-between py-24 px-5 md:px-10 items-center w-full gap-6 md:gap-2">
        <img className="object-cover min-w-fit" src={logo} alt="" />
        <button className="rounded-3xl bg-white flex justify-between items-center border border-white text-black gap-2 max-w-[228px] py-3 px-5">
          <p className="hidden md:flex text-center">Join our waitlist</p>
          <AiOutlineArrowRight size={10} />
        </button>
      </nav>
      {/* second section */}
      <section className="text-white flex flex-col max-w-full h-auto pb-40 md:pb-64 w-full relative">
        <div className="mx-auto flex flex-col max-w-screen-xl gap-8 px-5 md:px-10 lg:px-20">
          <p className="max-w-[1000px] font-urbanist text-[40px] leadind-[84px] font-[700] md:text-[80px] text-center relative top-0 z-10">
            Global trading platform for recycled plastic
          </p>
          <p className="mx-auto text-center text-[14px] max-w-[886px] leading-[26px] md:text-[20px] font-normal">
            We enable buyers and sellers to efficiently trade recycled plastic
            with confidence, bringing increased opportunity for recycled
            content for the world’s products and packaging.
          </p>
          <button className="mx-auto max-w-[228px] rounded-3xl bg-white flex items-center border border-white text-black gap-2 py-3 px-5">
            Join our waitlist <AiOutlineArrowRight size={10} />
          </button>
        </div>

        <div className="max-w-[23px] md:max-w-[88px] absolute top-0 left-0  sm:top-[60px] sm:left-[50px] z-0">
          <img className="object-fit w-full " src={img4} alt="" />
        </div>
        
       <div className=" max-w-[20px] sm:max-w-[58px] absolute bottom-0 left-0 ">
          <img className="object-fit w-full" src={img5} alt="" />
        </div>
        
       <div className="max-w-[32px] md:max-w-[68px] absolute right-0 top-[-40px]">
          <img className="object-fit w-full" src={img6} alt="" />
        </div>

      </section>
      {/*little image */}
       
        
    </section>

    <section className="max-w-full">
      {/* remaining section of page */}
      <div className="mx-auto relative top-[-100px]  md:top-[-200px]">
        {/* image shit */}
        <div className="w-full">
          <img className="object-fit w-full" src={img} alt="" />
        </div>

        <section className="w-screen border flex flex-col">
          <div className="mx-auto text-center my-10">
            <p className="text-[52px] leading-[68px] font-[600]">
              Buy or Sell Recycled Plastic
            </p>
            <p className="leading-[26px] font-[400] text-[20px]">
              Plastics can be traded in the forms of bales, flakes and pellets
            </p>
          </div>
         {/* btn active */}
          <div className="w-full border">
            <div className=" flex justify-center gap-[9px] text-center md:gap-[18px] bg-black text-white rounded-[100px] max-w-fit mx-auto items-start">
              <p className="p-[8px] md:p-[16px]  active">Plastic Bales</p>
              <p className="p-[8px] md:p-[16px]">Plastic Flakes</p>
              <p className="p-[8px] md:p-[16px]">Plastic Pellets</p>
            </div>
          </div>
         {/* first grid */}
          <div className="mt-[30px] border border-[#F2F2F4] bg-[#F2F2F4] mx-[45px] xl:mx-[90px] max-w-full grid grid-cols-1 xl:grid-cols-2 auto-cols-[630.5px] items-center gap-[50px] xl:gap-[155px] p-[40px] md:p-[99px]">
            <div className="flex flex-col gap-[10px]  xl:gap-[38px] max-h-auto max-w-full">
              <p className="lg:leading-[63px] text-[20px] xl:text-[52px] font-[700]">
                Plastic Bales
              </p>
              <p className="leading-[18px] xl:leading-[26px] text-[14px] xl:text-[20px] font-[400]">
                Bales trading on the RPX are primarily any whole polyethylene
                terephthalate (PET) bottle with a screw-neck top that contains
                the ASTM D7611 “#1, PET or PETE” resin identification code and
                that is clear, transparent green, or transparent light blue.
              </p>
              <button className="flex text-white bg-black items-center gap-[10px] rounded-[50px] max-w-[151px]  lg:py-[16px] px-[32px]">
                Register <AiOutlineArrowRight size={10} />{" "}
              </button>
            </div>
            <div className="border-black rounded border-2">
              <img className="w-full" src={img1} alt="" />
            </div>
          </div>
          {/* second grid */}
          <div className="mx-[45px] xl:mx-[90px] max-w-full grid grid-cols-1 xl:grid-cols-2 auto-cols-[630.5px] items-center gap-[50px] xl:gap-[155px] p-[40px] md:p-[99px]">
            <div className="border-black rounded border-2">
              <img className="w-full" src={img2} alt="" />
            </div>
            <div className="flex flex-col gap-[38px]  xl:gap-[14px] max-h-auto max-w-full">
              <p className="text-[11px] leading-[10px]">OUR MARKETPLACE</p>
              <p className="xl:leading-[48px] text-[20px] xl:text-[42px] font-[600]">
                Quality-Controlled Global Marketplace for Recycled Plastics
              </p>

              <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">
                We are a global marketplace for recycled plastics, with a wide
                range of plastic types and grades available..
              </p>

              <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">
                Our platform supports both post-industrial and post-consumer
                plastics, and we provide quality control services to ensure
                that the plastic meets the required specifications
              </p>

              <button className="flex justify-center text-white bg-black items-center gap-[10px] rounded-[50px] max-w-[225px] py-[16px]">
                Join our waitlist <AiOutlineArrowRight size={10} />{" "}
              </button>
            </div>
          </div>
          {/* third grid */}
          <div className="mx-[45px] xl:mx-[90px] max-w-full grid grid-cols-1 xl:grid-cols-2 auto-cols-[630.5px] items-center gap-[50px] xl:gap-[155px] p-[40px] md:p-[99px]">
            <div className="flex flex-col gap-[38px]  xl:gap-[14px] max-h-auto max-w-full">
              <p className="text-[11px] leading-[10px]">OUR PRODUCTS</p>
              <p className="xl:leading-[48px] text-[20px] xl:text-[42px] font-[600]">
                Access to a wide range of Recycled Plastics
              </p>

              <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">
                We offer a wide range of recycled plastic products, including{" "}
                <span className="font-semibold">PET, HDPE, LDPE, PP,</span>{" "}
                and more. We source our products from trusted suppliers
                worldwide, ensuring the highest quality standards.
              </p>

              <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">
                Our products are available in various forms, including baled,
                shredded, and granulated, and are suitable for a wide range of
                applications.
              </p>

              <button className="flex justify-center text-white bg-black items-center gap-[10px] rounded-[50px] max-w-[225px] py-[16px]">
                Join our waitlist <AiOutlineArrowRight size={10} />{" "}
              </button>
            </div>

            <div className="border-black rounded border-2">
              <img className="w-full" src={img3} alt="" />
            </div>
          </div>

           <div className="bg-black text-white p-[45px] xl:p-[90px] w-full flex flex-col gap-[30px]">
              <p className="text-[44px] leading-[57px] font-[600]">Your benefits on Revas</p>
              <div className="grid grid-cols-1 md:grid-cols-3 auto-cols-[406px] gap-[20px]">
                  {/* grid1 */}
                  <div className="flex flex-col gap-[23px]">
                     <img className="max-w-[80px]" src={v1} alt="" />
                     <p className="text-[28px] leading-[36px] font-[600] max-w-[356px]">Secure Transactions with Our Escrow Service</p>
                     <p className="text-[20px] leading-[26px] font-[400] max-w-[356px]">We enable transactions to be efficient, transparent, and secure through our escrow service.</p>
                     <Link className="leading-[26px] text-[20px] font-[400]">Learn more</Link>
                  </div>
                  {/* grid2 */}
                  <div className="flex flex-col gap-[23px]">
                     <img className="max-w-[70px]" src={v2} alt="" />
                     <p className="text-[28px] leading-[36px] font-[600] max-w-[356px]">Data analytics and Quality Control</p>
                     <p className="text-[20px] leading-[26px] font-[400] max-w-[356px]">We enable transactions to be efficient, transparent, and secure through our escrow service.</p>
                     <Link className="leading-[26px] text-[20px] font-[400]">Learn more</Link>
                    </div>
                  {/* grid3 */}
                  <div className="flex flex-col gap-[23px]">
                     <img className="max-w-[80px]" src={v3} alt="" />
                     <p className="text-[28px] leading-[36px] font-[600] max-w-[356px]">Data analytics and Quality Control</p>
                     <p className="text-[20px] leading-[26px] font-[400] max-w-[356px]">We provide data analytics and quality 
control services to help optimize the 
value of plastic waste.</p>
<Link className="leading-[26px] text-[20px] font-[400]">Learn more</Link>
                    </div>
              </div>
           </div>
           
<div className="bg-[#F2F2F4] h-auto max-w-full py-[50px] md:py-[160px] px-[20px] md:px-[45px] gap-3 md:gap-0 grid  grid-cols-1 md:grid-cols-2 border auto-cols-[645px]">
     <div className="bg-black text-white border border-black rounded-3xl md:rounded-l-3xl md:rounded-r-none relative p-[70px] flex flex-col gap-[38px]">
                  <div className="absolute top-0 left-0">
                    <img src={img7} alt="" />
                  </div>
                  <p className="max-w-[496px] text-[27px] md:text-[52px] md:leading-[59px] font-[600]">Creating a sustainable future for everyone</p>
                  <p className="max-w-[496px] text-[16px] font-[400] leading-[20.8px]">We envision a world where plastic waste is transformed into a valuable resource, creating a circular economy that benefits people and the planet.</p>
                  <button className="max-w-[200px] rounded-[100px] bg-white flex items-center justify-center py-[20px] px-[30px] border border-white text-black gap-2">
                    Join our waitlist <AiOutlineArrowRight size={10} />
                   </button>
              </div>
              <div className="border-2 border-black rounded-3xl md:rounded-l-none md:rounded-r-3xl">
                <img className="object-cover w-full rounded-3xl md:rounded-r- md:rounded-l-none" src={family} alt="" />
              </div>
           </div>
           {/*footer*/}

<div className="bg-black gap-[53px]  grid grid-cols-1  p-[22px] md:p-[45px] text-white text-[7px] md:text-[16px] leading-[20px]">

               <img className="object-cover max-w-[216px]" src={logo} alt="" />

               <div className="grid grid-cols-4 gap-20">

                  <div className="flex gap-10">
                    <div className="flex flex-col gap-10">
                      <p>Company</p>
                      <div className="flex flex-col gap-6">
                          <p>About us</p>
                          <p>contact</p>
                          <p>Prices</p>
                      </div>  
                      </div>

                    <div className="flex flex-col gap-10">
                      <p>Product</p>
                      <div className="flex flex-col gap-6">
                      <p>Market place</p>
                      <p>Sell on Revas</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-10">
                      <p>Social</p>
                      <div className="flex flex-col gap-6">
                        <p>Linkedin</p>
                        <p>Twitter</p>
                        <p>Facebook</p>
                      </div>
                    </div>

                  </div>

                  <div className="flex flex-col gap-10 col-span-4 xl:col-span-3 ">
                  <p>Information</p>
                      <div className="flex flex-col gap-6">
                        <p>Email:support@revasexchange.com</p>
                        <p>Phone: +234 814 061 7563</p>
                      </div>
                    </div>

                  </div>

             
                  <div className="flex flex-row justify-between items-center">
                <p className="text-[7px] md:text-[13px] leading-[21.38px]" >Copyright © 2023 Revas Exchange- All Rights Reserved.</p>
     <button className="bg-transparent text-white flex gap-3 rounded-[100px] items-center border-white border px-[12px]  md:px-[30px] py-[10px] md:py-[20px]">Cookie settings <AiOutlineArrowRight size={10} /></button>
               </div>
          
</div>




        </section>
      </div>
    </section>
  </div>
  )
}

export default Landing;
