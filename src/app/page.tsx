import Image from "next/image";
import i1 from "../../public/i1.webp";
import i2 from "../../public/i2.webp";
import i3 from "../../public/i3.webp";
import vsd from "../../public/vsd.webp"; // your bottom left vsd

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Images */}
      <div className="absolute top-16 left-0 w-2/3 h-3/4">
        <Image
          src={i2}
          alt="background1"
          fill
          className="object-cover opacity-90"
        />
      </div>

      <div className="absolute top-20 right-4 w-1/4 h-1/4">
        <Image
          src={i1}
          alt="background2"
          fill
          className="object-cover rounded"
        />
      </div>

      <div className="absolute bottom-16 right-6 w-1/4 h-1/4">
        <Image
          src={i3}
          alt="background3"
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight text-black bg-white/80 p-6 text-center"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          VSD <br />
          Engineering <br />
          Enterprises
        </h1>
      </div>

      {/* Fixed Bottom Left vsd */}
      <div className="fixed bottom-4 left-4 w-12 h-12">
        <Image src={vsd} alt="vsd" fill className="object-contain" />
      </div>

      {/* Contact Info */}
      <div className="absolute bottom-6 right-6 text-sm md:text-base space-y-1 text-white text-right">
        <p>+91 9599371996</p>
        <p>+91 9718826667</p>
        <p>vsdengineeringenterprises@gmail.com</p>
      </div>
    </div>
  );
}
