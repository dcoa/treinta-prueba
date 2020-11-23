import React from 'react';
import Botton from './Botton';

export default function Register() {
    return (
        <form>
        <p>Nueva Cuenta</p>
        <label>
            Nombre
           <input tyepe="text" />
        </label>
        <label>
            Correo Electrónico
           <input tyepe="text" />
        </label>
        <label>
            Contraseña
           <input tyepe="text" />
        </label>
        <Botton text="REGISTRARSE" />
        <p>¿Ya tienes cuenta? <a href="#fdge">Inicia Sesión</a></p>
    </form>
    )
}
