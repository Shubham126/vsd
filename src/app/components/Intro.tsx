import Image from "next/image";
import i1 from "../../../public/i1.webp";
import i2 from "../../../public/i2.webp";
import i3 from "../../../public/i3.webp";
import vsd from "../../../public/vsd.webp";

export default function Introduction(){
    return(
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Images */}
      
      {/* Large Building - Your mobile style, my md+ style */}
      <div className="absolute top-16 left-5 w-[55%] h-[60%] md:top-10 md:left-5 md:w-[60%] md:h-[70%] lg:w-[55%] lg:h-[75%] xl:w-[50%] xl:h-[80%]">
        <Image
          src={i2}
          alt="background1"
          fill
          className="object-cover opacity-90"
        />
      </div>

      {/* Triangle/Sky Image - Your mobile style, my md+ style */}
      <div className="absolute top-4 right-4 w-[25%] h-[15%] md:w-[24%] md:h-[20%] lg:w-[22%] lg:h-[22%] xl:w-[20%] xl:h-[25%]">
        <Image
          src={i1}
          alt="background2"
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Worker Image - Your mobile style, my md+ style */}
      <div className="absolute bottom-25 right-6 w-1/4 h-1/4 md:bottom-6 md:right-6 md:w-[30%] md:h-[30%] lg:w-[28%] lg:h-[35%] xl:w-[25%] xl:h-[38%]">
        <Image
          src={i3}
          alt="background3"
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Center Text - Your mobile positioning, my glass effect for all sizes */}
      <div className="absolute top-50 left-20 sm:top-35 sm:left-60 md:inset-0 md:flex md:items-center md:justify-center p-4 z-10">
        <div className="bg-white/80 backdrop-blur-sm px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 xl:px-12 xl:py-10 rounded-sm shadow-lg">
          <h1
            className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black text-center"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            VSD <br />
            Engineering <br />
            Enterprises
          </h1>
        </div>
      </div>

      {/* Contact Info - Your style for mobile, my enhanced for md+ */}
      <div className="absolute bottom-30 md:bottom-2 left-4 md:left-10 text-sm md:text-lg lg:text-base space-y-1 text-white text-left z-10">
        <p>+91 9599371996</p>
        <p>+91 9718826667</p>
        <p className="break-all md:break-normal">vsdengineeringenterprises@gmail.com</p>
      </div>

      {/* VSD Logo - Your style for mobile, my scaling for md+ */}
      <div className="fixed bottom-4 left-4 w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 z-10">
        <Image src={vsd} alt="vsd" fill className="object-contain" />
      </div>
    </div>
    )
}
