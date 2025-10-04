import Link from "next/link";
import Image from "next/image";
import React from "react";
import fssai from "../../../public/fssai.webp"
import iso from "../../../public/iso.webp"

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-black">
            <Image src={fssai} alt="fssai" width={70} height={70}></Image>
            <Image src={iso} alt="fssai" width={70} height={70}></Image>
            {/* <Image src =""></Image> */}
         
        </nav>
    )
}

export default Navbar;