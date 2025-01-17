import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import {Menu} from "@/components/Menu";

const NavBar = () => {
    return(
        <div className="flex items-center justify-between px-5 h-32 bg-[#133E87]">
            <div className="flex justify-arrow items-center">
                <div>
                    <Link href="">
                        <Image src={logo} alt="logo del club" className="h-24 w-24"/>
                    </Link>
                </div>
                <div className="px-8">
                    <h1 className="text-white text-4xl">
                        Club Nautico Pergamino
                    </h1>
                </div>
            </div>
            <div>
                <Menu />
            </div>
        </div>
    )
}


export default NavBar;