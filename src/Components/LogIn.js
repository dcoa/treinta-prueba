import React from 'react';
import Botton from './Botton';
import { FormTitle, LinkForm } from './Text'


export default function LogIn({setisLogin}) {
    
    return (
        <div className='form-container'>
        <form className='form-background'>
        <FormTitle>Iniciar Sesión</FormTitle>
        <label>
            Correo Electrónico
           <input tyepe="text" />
        </label>
        <label>
            Contraseña
           <input type="password"/>
        </label>
        <Botton text="INGRESAR" />
    </form>
    <p>¿No tienes cuenta? <LinkForm  onClick={() => setisLogin(false)}>Registrate</LinkForm></p>
    </div>
    )
}
