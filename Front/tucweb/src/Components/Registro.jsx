import React, { useState } from "react";
import "../Css/Registro.css";
import {register} from "../service/apiCall"

const Registro = () => {
    const [formValues, setFormValues] = useState({
        firstname: "",
        email: "",
        password: ""
    });


    const handleChange = (event) =>{
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const saveUser = () =>{
            register(formValues).then(() => {
                console.log("Registrado");
            }).catch((error) => alert("Error al registrar"));
        }
        saveUser();
    }



    

    const Login = () => {
        const [formValues, setFormValues] = useState({
            email: "",
            password: ""
        });
    
    
        const handleChange = (event) =>{
            setFormValues({
                ...formValues,
                [event.target.name]: event.target.value
            })
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            const getUser = () =>{
                login(formValues).then(() => {
                    console.log("Logueado");
                }).catch((error) => alert("Error al loguear"));
            }
            getUser();
        }
    



    return (
        <div className="contenedor">
            <div className="container">
                <div className="login-container">
                    <div className="register">
                        <h2>Registrarse</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <b>Nombre</b>
                                <input
                                    type="text"
                                    className="nombre"
                                    placeholder="Ingrese su nombre"
                                    name="firstname"
                                    value={formValues.firstname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <b>Correo electrónico</b>
                                <input
                                    type="email"
                                    className="correo"
                                    placeholder="example@example.com.ar"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
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
                                    value={formValues.password}
                                    onChange={handleChange}
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
                            name="mail"
                            value={formValues.mail}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="contraseña"
                            name="pass"
                            value={formValues.pass}
                            onChange={handleChange}
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
}

export default Registro;