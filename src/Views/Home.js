import React from 'react';
import LogIn from '../Components/LogIn';
import Navbar from '../Components/Navbar';

import Register from '../Components/Register';
import BenefitsApp from '../Components/BenefitsApp';

export default function Home() {
    return (
        <>
            <header><Navbar /></header>
            <section>
                <p>Descubre lo fácil que es administrar tu negocio </p>
                <LogIn />
                <Register/>
            </section>
            <section>
                <h1>¿Qué es treinta?</h1>
                <p>Treinta es una aplicación móvil que te ayudará a gestionar las transacciones 
                    de tu negocio, conocer su utilidad en cualquier momento y registrar y cobrar 
                    deudas 3 veces más eficazmente.</p>
                <p>Ayuda a tu negocio a crecer más con Treinta.</p>
                <p><b>¡Treinta es gratis, seguro y fácil de usar!</b></p>
            </section>
            <section> 
                <BenefitsApp/>
            </section>
            <section>
                <h1>Identifica a algunos de nuestros socios</h1>
            </section>
        </>
    )
}
