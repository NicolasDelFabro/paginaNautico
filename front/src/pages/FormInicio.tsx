import Link from "next/link";

const FormIncio = () => {
    return(
        <div className="w-screen min-h-screen">
            <div className="">
            <ul>
                <li>
                    <label htmlFor="email" className="text-white">Email: </label>
                    <input 
                        className="rounded-md"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="email@gmail.com"
                        autoComplete="off"
                     />
                </li>
                <li>
                    <label htmlFor="password" className="text-white">Password: </label>
                    <input
                        className="rounded-md"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        autoComplete="off"
                    />
                </li>
            </ul>
            <div>
                <p>¿Aun no tienes una cuenta?</p>
                <Link href="/register">
                    <p>registrarte aquí</p>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default FormIncio;