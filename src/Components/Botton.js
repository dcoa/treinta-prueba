import React from 'react'

export default function Botton({text, handleClick}) {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}
