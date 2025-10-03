import Link from "next/link"

export default function Navbar(): any {
    return (
        <nav>
         <ul>
            <li className = "text-white flex"><Link href = "/about">About</Link></li>
            <li className = "text-white"><Link href = "/contact">Contact</Link></li>
         </ul>
        </nav>
    )
}