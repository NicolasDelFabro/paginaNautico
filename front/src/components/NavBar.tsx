import Link from "next/link";
import {Menu} from "@/components/Menu";

const NavBar = () => {
    return(
        <div className="flex items-center justify-between px-5 h-32 bg-[#133E87]">
            <div className="flex justify-arrow items-center">
                <div className="px-2">
                    <Link href="/">
                        <h1 className="text-white text-4xl">
                            Club Nautico Pergamino
                        </h1>
                    </Link>
                </div>
            </div>
            <div>
                <Menu />
            </div>
        </div>
    )
}


export default NavBar;