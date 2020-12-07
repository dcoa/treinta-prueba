import React from 'react';
import './styles/Botton.css'

export default function Botton({text, handleClick}) {
    return (
        <button  className='botton' onClick={handleClick}>
            {text}
        </button>
    )
}
