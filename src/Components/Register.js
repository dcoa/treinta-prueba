import React, { useState } from 'react';
import Botton from './Botton';
import {signUp} from '../firebaseConfig'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => {
        setName(e.currentTarget.value);
      };
    const handleEmail = (e) => {
        setEmail(e.currentTarget.value);
        };
    const handlePassword = (e) => {
        setPassword(e.currentTarget.value);
      };

    const handleRegister = async(e) => {
        e.preventDefault()
        signUp(email, password, name)
    }
    return ( 
        <form onClick={handleRegister}>
        <p>Nueva Cuenta</p>
        <label>
            Nombre
           <input tyepe="text" onChange ={(e) => handleName(e)}/>
        </label>
        <label>
            Correo Electrónico
           <input tyepe="text" onChange ={(e) => handleEmail(e)}/>
        </label>
        <label>
            Contraseña
           <input type="password" onChange ={(e) => handlePassword(e)}/>
        </label>
        <Botton text="REGISTRARSE" />
        <p>¿Ya tienes cuenta? <a href="#fdge">Inicia Sesión</a></p>
    </form>
    )
}
