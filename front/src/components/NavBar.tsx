import Link from "next/link";

const NavBar = () => {
    return(
        <div>
            <div>
                <Link href="/#">
                    Club Náutico Pergamino
                </Link>
            </div>
            <div>
                <p>
                    MENU
                </p>
            </div>
        </div>
    )
}

export default NavBar;