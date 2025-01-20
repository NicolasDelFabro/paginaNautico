import Link from "next/link";

const FormIncio = () => {
    return(
        <div className="flex justify-center items-center w-screen min-h-screen bg-gradient-to-r from-black to-gray-800">
            <div className="flex flex-col justify-center items-center bg-slate-500 py-3 px-2 rounded-sm">
                <div className="">
                <ul>
                    <li>
                        <label htmlFor="email" className="text-whitek">Email: </label>
                        <input 
                            className="rounded-md text-black text-[12px] my-2 px-1 w-[180px]"
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
                            className="rounded-md text-black text-[12px] my-2 px-1 w-[153px]"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            autoComplete="off"
                        />
                    </li>
                </ul>
                    <Link href="/home" className="bg-red-800  p-1 rounded-lg">
                        <button>
                            Ingresar
                        </button>
                    </Link>
                </div>
                
                <div className="flex flex-col items-center mt-2">
                    <span className="text-[10px]">
                        ¿Aun no tienes una cuenta?
                    </span>
                    <Link href="/register" className="text-[9px] text-[#0053FF] hover:text-[#0033FF]">
                        <p>registrate aquí</p>
                    </Link>
                </div>
                </div>
            </div>
        )
}

export default FormIncio;
