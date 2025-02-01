import Link from "next/link";
import Menu from "@/components/Menu"

const NavBar = () => {
    return(
        <div className="flex justify-between items-center px-6 h-[7rem] bg-[#002346]">
            <div className="text-2xl">
                <Link href="/#">
                    Club Náutico Pergamino
                </Link>
            </div>
            <div className="w-auto">
                <Menu />
            </div>
        </div>
    )
}

export default NavBar;