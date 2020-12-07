import React, {useState} from 'react';
import LogIn from '../Components/LogIn';
import Navbar from '../Components/Navbar';
import Map from '../Components/Map'
import Register from '../Components/Register';
import BenefitsApp from '../Components/BenefitsApp';
import { SecundaryText } from '../Components/Text';
import { Title } from '../Components/Text';
import Footer from  '../Components/Footer';
import './style/Home.css';


export default function Home() {
    const [isLogin, setisLogin] = useState(true)
    return (
        <>
            <header><Navbar /></header>
            <section>
                <SecundaryText>Descubre lo fácil que es administrar tu negocio </SecundaryText>
                {isLogin ? <LogIn setisLogin={setisLogin}/> : <Register setisLogin={setisLogin}/>}
            </section>
            <section className='main-information'>
                <Title>¿Qué es treinta?</Title>
                <p>Treinta es una aplicación móvil que te ayudará a gestionar las transacciones 
                    de tu negocio, conocer su utilidad en cualquier momento y registrar y cobrar 
                    deudas 3 veces más eficazmente.</p>
                <p>Ayuda a tu negocio a crecer más con Treinta.</p>
                <p><b>¡Treinta es gratis, seguro y fácil de usar!</b></p>
                <BenefitsApp/>
            </section>
            <section className='map'>
                <Title>Identifica a algunos de nuestros socios</Title>
                <Map/>
            </section>
            <Footer/>
        </>
    )
}
