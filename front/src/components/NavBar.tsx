import Link from "next/link";
import Menu from "@/components/Menu"

const NavBar = () => {
    return(
            <div className="bg-[#002346] flex justify-between items-center w-screen
            2xs: h-[55px] px-2
            sm: h-[70px] px-10
            md: h-[70px] px-4
            ">
            <div className="text-2xl">
                <Link href="/">
                    Club Náutico Pergamino
                </Link>
            </div>
            <div>
                <Menu />
            </div>
        </div>
    )
}

export default NavBar;