import Image from "next/image";
import i1 from "../../../public/i1.webp";
import i2 from "../../../public/i2.webp";
import i3 from "../../../public/i3.webp";
import vsd from "../../../public/vsd.webp";


export default function Introduction(){
    return(
    <div className="relative w-full h-screen overflow-hidden bg-black text-white mb-8 md:mb-12 lg:mb-20">
      {/* Background Images */}
      
      {/* Large Building */}
      <div className="absolute top-16 left-5 w-[55%] h-[60%] md:top-10 md:left-5 md:w-[60%] md:h-[70%] lg:w-[55%] lg:h-[75%] xl:w-[50%] xl:h-[80%]">
        <Image
          src={i2}
          alt="background1"
          fill
          className="object-cover opacity-90"
        />
      </div>


      {/* Triangle/Sky Image - SAME SIZE AS WORKER */}
      <div className="absolute top-4 right-4 w-[25%] h-[20%] md:w-[24%] md:h-[25%] lg:w-[22%] lg:h-[28%] xl:w-[20%] xl:h-[30%]">
        <Image
          src={i1}
          alt="background2"
          fill
          className="object-cover rounded"
        />
      </div>


      {/* Worker Image - SAME SIZE AS TRIANGLE */}
      <div className="absolute bottom-25 right-6 w-[25%] h-[20%] md:bottom-6 md:right-6 md:w-[24%] md:h-[25%] lg:w-[22%] lg:h-[28%] xl:w-[20%] xl:h-[30%]">
        <Image
          src={i3}
          alt="background3"
          fill
          className="object-cover rounded"
        />
      </div>


      {/* Center Text Box */}
      <div className="absolute top-50 left-10 xs:top-50 xs:left-25 sm:top-45 sm:left-50 md:inset-0 md:flex md:items-center md:justify-center p-4 z-10">
        <div className="bg-white/80 backdrop-blur-sm px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 xl:px-12 xl:py-10 rounded-sm shadow-lg">
          <h1
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black text-left"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            VSD <br />
            ENGINEERING <br />
            ENTERPRISES
          </h1>
        </div>
      </div>


      {/* Contact Information Section */}
      <div className="absolute bottom-15 md:bottom-2 left-4 md:left-10 text-sm md:text-lg lg:text-base space-y-2 text-white text-left z-10">
        {/* Phone Numbers with Icon */}
        <div className="flex items-center gap-3">
          {/* Phone Icon SVG */}
          <svg 
            className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <div className="flex flex-col">
            <span>+91 9599371996</span>
            <span>+91 9718826667</span>
          </div>
        </div>

        {/* Email with Icon */}
        <div className="flex items-center gap-3">
          {/* Email Icon SVG */}
          <svg 
            className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span className="break-all md:break-normal">vsdengineeringenterprises@gmail.com</span>
        </div>
      </div>


      {/* VSD Logo */}
      <div className="fixed bottom-4 left-5 sm:left-21 w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 z-10">
        <Image src={vsd} alt="vsd" fill className="object-contain" />
      </div>
    </div>
    )
}
