import Link from "next/link"

const Footer = () => {
    return(
        <div className="flex justify-between items-center px-8 h-[95px] bg-[#133E87]">
            <div className="">
                <h2>Whatsapp: </h2>
                <Link href="https://api.whatsapp.com/send/?phone=542477235571&text&type=phone_number&app_absent=0"
                className="hover:font-bold">
                    <span>2477235571</span>
                </Link>
            </div>
            <div>
                <h2>Instagram: </h2>
                <Link href="https://www.instagram.com/clubnauticopergamino/">
                    <span>clubnauticopergamino</span>
                </Link>
            </div>
            <div>
                <h2>Dirección: </h2>
                <Link href="https://www.google.com/maps/place/Club+N%C3%A1utico+Pergamino/@-33.9039132,-60.578623,730m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95b9b5fdb5968f3b:0x6a50115ae9c8ec5a!8m2!3d-33.9039177!4d-60.5760481!16s%2Fg%2F11sq54yg_4?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D">
                    <span>Intendente Biscayart Sur 452</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer;