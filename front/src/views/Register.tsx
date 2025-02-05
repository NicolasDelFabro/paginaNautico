import Link from "next/link";

const Register = () => {
    return(
        <div>
            <div>
                <ul>
                    <li>
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" name="mane" id="name"/>
                    </li>
                    <li>
                        <label htmlFor="apellido">Apellido: </label>
                        <input type="text" name="apellido" id="apellido"/>
                    </li>
                    <li>
                        <label htmlFor="domicilio">Domicilio: </label>
                        <input type="text" name="domicilio" id="domicilio" />
                    </li>
                    <li>
                        <label htmlFor="email">Correo: </label>
                        <input type="email" name="email" />
                    </li>
                    <li>
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" name="password" id="password" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Register