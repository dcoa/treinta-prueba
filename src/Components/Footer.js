import React from 'react';
import { Icon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-jam/whatsapp';
import instagramIcon from '@iconify/icons-mdi/instagram';
import emailOutline from '@iconify/icons-mdi/email-outline';
import './styles/Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>Contáctate con nosotros a través de</p>
            <div className='footer-icon'>
                <a href='https://web.whatsapp.com/' target='blank'><Icon icon={whatsappIcon} style={{ color: '#076D16', fontSize: '40px' }} /></a>
                <a href='https://www.instagram.com/treinta.co/' target='blank'><Icon icon={instagramIcon} style={{ color: '#076D16', fontSize: '40px' }} /></a>
                <a href='mailto:hola@treinta.co'><Icon icon={emailOutline} style={{ color: '#076D16', fontSize: '40px' }} /></a>
            </div>
            <p>Copyright © 2020 Treinta</p>
        </footer>
    )
}
