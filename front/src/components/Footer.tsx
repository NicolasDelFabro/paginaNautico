import Link from "next/link";

const Footer = () => {
    return(
        <div>
            <div>
                <span>Whatsapp: </span>
                <Link href="/#">numero de telefono</Link>
            </div>
            <div>
                <span>Instagram: </span>
                <Link href="/#">@instagram</Link>
            </div>
            <div>
                <span>Dirreccion: </span>
                <Link href="/#">Intendente Biscayart 452</Link>
            </div>
        </div>
    )
}

export default Footer;