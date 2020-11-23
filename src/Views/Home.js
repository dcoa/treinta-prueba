import React from 'react';
import LogIn from '../Components/LogIn';
import Navbar from '../Components/Navbar';
import Map from '../Components/Map'
import Register from '../Components/Register';
import BenefitsApp from '../Components/BenefitsApp';
import { Icon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-jam/whatsapp';
import instagramIcon from '@iconify/icons-mdi/instagram';
import emailOutline from '@iconify/icons-mdi/email-outline';

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
                <Map/>
            </section>
            <footer>
                <p>Contáctate con nosotros a través de</p>
                <div>
                <Icon icon={whatsappIcon} style={{color: '#076D16', fontSize: '40px'}} />
                <Icon icon={instagramIcon} style={{color: '#076D16', fontSize: '40px'}} />
                <Icon icon={emailOutline} style={{color: '#076D16', fontSize: '40px'}} />
                </div>
                <p>Copyright © 2020 Treinta</p>
            </footer>
        </>
    )
}
