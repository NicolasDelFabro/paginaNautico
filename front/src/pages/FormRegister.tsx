import Link from "next/link";

const FormRegister = () => {
    return(
        <div className="flex justify-center items-center h-min-screen">
            <div className="flex flex-col bg-red-600 h-auto px-3 py-2">
                <div>
                    <ul>
                        <div className="p-1">
                            <li>
                                <label htmlFor="">Nombre: </label>
                                <input className="rounded-sm" 
                                    type="text"
                                    id="name"
                                    name="name"
                                />
                            </li>
                        </div>
                        <div className="p-1">
                            <li>
                                <label htmlFor="">Apellido: </label>
                                    <input className="rounded-sm"
                                        type="text"
                                    id="apellido"
                                    name="apellido"
                                />
                            </li>
                        </div>
                        <div className="p-1">
                            <li>
                                <label htmlFor="">Edad: </label>
                                <input className="rounded-sm"
                                    type="text"
                                    id="edad"
                                    name="edad"
                                />
                            </li>
                        </div>
                        <div className="p-1">
                            <li>
                                <label htmlFor="">Dirección: </label>
                                <input className="rounded-sm" 
                                    type="text"
                                    id="dirreccion"
                                    name="direccion"
                                />
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <button>Enviar</button>
                    <span>¿Ya tinenes una cuenta?</span>
                    <Link href="/login">
                        <span>Inicia sesion acá</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FormRegister;