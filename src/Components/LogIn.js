import React, {useEffect} from 'react';
import Botton from './Botton';

export default function LogIn() {
    
    return (
        <form>
        <p>Iniciar Sesión</p>
        <label>
            Correo Electrónico
           <input tyepe="text" />
        </label>
        <label>
            Contraseña
           <input type="password"/>
        </label>
        <Botton text="INGRESAR" />
        <p>¿No tienes cuenta? <a href="#s∫">Registrate</a></p>
    </form>
    )
}
