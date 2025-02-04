import Link from "next/link";

const Login = () => {
    return(
            <div className="2xs: flex justify-center items-center">
            <div className="bg-red-900">
                <div className="flex felx-col ">
                    <ul>
                        <li>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email"
                            className="
                            2xs: my-2 text-black rounded-lg"/>
                        </li>
                        <li>
                            <label htmlFor="password">Contraseña: </label>
                            <input type="password" name="password" id="password" />
                        </li>
                    </ul>
                </div>
                <div className="2xs: flex flex-col justify-center items-center">
                    <div className="">
                        <button>Iniciar sesion</button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span>Aun no tienes una cuenta?</span>
                        <Link href="/">
                            <p>Registrate aqui</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Login;