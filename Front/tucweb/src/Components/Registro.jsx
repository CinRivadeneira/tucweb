import "../Css/Registro.css";

const Registro = () => {
    return (
        <div className ="contenedor">
            <div className="container">
                <div className="login-container">
                    <div className="register">
                        <h2>Registrarse</h2>
                        <form action="">
                            <input type="text" placeholder="Nombre" className="nombre" />
                            <input type="text" placeholder="Correo" className="correo" />
                            <input type="password" placeholder="Contraseña" className="pass" />
                            <input type="submit" className="submit" value="REGISTRARSE" />
                        </form>
                    </div>
                    <div className="login">
                        <h2> Iniciar sesión</h2>
                        <div className="login-items">
                            <input type="text" placeholder="Usuario" className="usuario" />
                            <input type="password" placeholder="Contraseña" className="contraseña" />
                            <button className="boton">INGRESAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro;