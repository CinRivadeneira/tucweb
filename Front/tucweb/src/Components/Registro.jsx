import React from "react";
import "../Css/Registro.css";

const Registro = () => {



    return (
        <div className="contenedor">
            <div className="container">
                <div className="login-container">
                    <div className="register">
                        <h2>Registrarse</h2>
                        <form>
                            <div className="mb-3">
                                <b>Nombre</b>
                                <input
                                    type="text"
                                    className="nombre"
                                    placeholder="Ingrese su nombre"
                                    name="firstname"

                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <b>Correo electrónico</b>
                                <input
                                    type="email"
                                    className="correo"
                                    placeholder="example@example.com"
                                    name="email"


                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <b>Contraseña</b>
                                <input
                                    type="password"
                                    className="pass"
                                    placeholder="Ingrese su contraseña"
                                    name="password"


                                    required
                                />
                            </div>
                            <button className="boton"> Registrarse</button>
                        </form>
                    </div>

                    <div className="login">
                        <h2> Iniciar sesión</h2>
                        <input
                            type="text"
                            placeholder="Usuario"
                            className="usuario"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="contraseña"
                            required
                        />
                        <br />
                        <button className="boton"> Ingresar </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro;