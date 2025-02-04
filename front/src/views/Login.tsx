import Link from "next/link";

const Login = () => {
    return(
        <div className="2xs: flex justify-center items-center w-screen h-screen">
            <div className="flex flex-col">
                <div>
                    <ul>
                        <li>
                            <label htmlFor="name">Nombre: </label>
                            <input type="text" name="name" id="name" />
                        </li>
                        <li>
                            <label htmlFor="apellido">Apellido: </label>
                            <input type="text" name="apellido" id="apellido" />
                        </li>
                        <li>
                            <label htmlFor="nacimineto">Fecha de nacimineto: </label>
                            <input type="date" name="nacimiento" id="nacimiento" />
                        </li>
                        <li>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" />
                        </li>
                        <li>
                            <label htmlFor="password">Contraseña: </label>
                            <input type="password" name="password" id="password" />
                        </li>
                    </ul>
                </div>
                <div>
                    <button>Registrarse</button>
                </div>
                <div>
                    <span>¿Ya tienes un usuario?</span>
                    <Link href="/">
                        <p>inicia sesión aquí</p>
                    </Link>
                </div>
            </div>
        </div>
    )   
}

export default Login;