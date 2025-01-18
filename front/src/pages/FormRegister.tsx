import Link from "next/link";

const FormRegister = () => {
    return(
        <div className="w-screen min-h-screen bg-gradient-to-br from-black to-gray-800">
            <div>
                <ul>
                    <li>
                        <label htmlFor="">Nombre: </label>
                        <input className="rounded-md"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre"
                            autoComplete="off"
                        />
                    </li>
                    <li>
                        <label htmlFor="">Apellido: </label>
                        <input className="rounded-md"
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Apellido"
                            autoComplete="off"
                        />
                    </li>
                    <li>
                        <label htmlFor="">Edad: </label>
                        <input type="number" className="rounded-md appearance-none"
                            id="edad"
                            name="edad"
                            placeholder="Edad"
                            autoComplete="off"
                        />
                    </li>
                    <li>
                        <label htmlFor="">Direccion: </label>
                        <input className="rounded-md"
                            type="text"
                            id="addres"
                            name="addres"
                            placeholder="Direción"
                            autoComplete="off"    
                        />
                    </li>
                    <li>
                        <label htmlFor=""> Email: </label>
                        <input className="rounded-md"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                        />
                    </li>
                    <li>
                        <label htmlFor="">Contraseña: </label>
                        <input className="rounded-md"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="contraseña"
                            autoComplete="off"    
                        />
                    </li>
                </ul>
                <div>
                    <span>¿Ya tienes una cuenta?</span>
                    <Link href="/login">
                        <p>inicia sesion aquí</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FormRegister;