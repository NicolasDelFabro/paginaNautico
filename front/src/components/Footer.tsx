import Link from "next/link";

const Footer = () => {
    return(
        <div className="bg-[#002346]
        2xs: flex flex-col px-3 py-2
        ">
            <div>
                <span>Whatsapp: </span>
                <Link href="https://api.whatsapp.com/send/?phone=542477235571&text&type=phone_number&app_absent=0"
                    className="underline 2xs: text-sm">
                        2477-235571
                    </Link>
            </div>
            <div>
                <span>Instagram: </span>
                <Link href="https://www.instagram.com/clubnauticopergamino/"
                className="underline 2xs: tetxt-sm">@clubnauticopergamino</Link>
            </div>
            <div>
                <span>Dirreccion: </span>
                <Link href="https://www.google.com/maps/place/Club+N%C3%A1utico+Pergamino/@-33.9039177,-60.57637,91m/data=!3m1!1e3!4m6!3m5!1s0x95b9b5fdb5968f3b:0x6a50115ae9c8ec5a!8m2!3d-33.9039177!4d-60.5760481!16s%2Fg%2F11sq54yg_4?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                className="underline 2xs: text-sm">Intendente Biscayart 452</Link>
            </div>
        </div>
    )
}

export default Footer;