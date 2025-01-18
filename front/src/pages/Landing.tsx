import fotoRemo from "../../public/fotoRemo.jpeg"
import Image from "next/image";


export const Landing = () => {
    return(
        <div className="flex">
            <div className="h-screen">
                <Image src={fotoRemo} alt="Foto de bote" className="h-screen opacity-90" />             
            </div>
        </div>
    )
}