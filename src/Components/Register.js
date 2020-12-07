import React, { useState } from 'react';
import Botton from './Botton';
import { signUp } from '../firebaseConfig';
import { FormTitle, LinkForm } from './Text'

export default function Register({setisLogin}) {
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
        <div className='form-container'>
        <form onSubmit={handleRegister} className='form-background' id='register'>
        <FormTitle>Nueva Cuenta</FormTitle>
        <label>
            Nombre
           <input tyepe="text" onChange ={(e) => handleName(e)} required/>
        </label>
        <label>
            Correo Electrónico
           <input tyepe="text" onChange ={(e) => handleEmail(e)} required/>
        </label>
        <label>
            Contraseña
           <input type="password" onChange ={(e) => handlePassword(e)} required/>
        </label>
        <Botton text="REGISTRARSE" />
    </form>
     <p>¿Ya tienes cuenta? <LinkForm onClick={() => setisLogin(true)}>Inicia Sesión</LinkForm></p>
     </div>

    )
}
