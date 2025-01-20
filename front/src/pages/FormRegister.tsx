import Link from "next/link";

const FormRegister = () => {
    return(
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
                <div>
                    <ul>
                        <li>
                            <label htmlFor="">Nombre: </label>
                            <input className="" 
                                type="text"
                                id="name"
                                name="name"
                            />
                        </li>
                        <li>
                            <label htmlFor="">Apellido: </label>
                            <input className=""
                                type="text"
                                id="apellido"
                                name="apellido"
                            />
                        </li>
                        <li>
                            <label htmlFor="">Dirección: </label>
                            <input className="" 
                                type="text"
                                id="dirreccion"
                                name="direccion"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FormRegister;