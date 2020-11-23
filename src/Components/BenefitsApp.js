import React from 'react';
import { Icon } from '@iconify/react';
import cashRegister from '@iconify/icons-mdi/cash-register';
import statsBars2 from '@iconify/icons-icomoon-free/stats-bars2';
import alertCircleOutline from '@iconify/icons-mdi/alert-circle-outline';
import cashCheck from '@iconify/icons-mdi/cash-check';
import serverSecurity from '@iconify/icons-mdi/server-security';


export default function BenefitsApp() {
    return (
        <table>
                    <tbody>
                         <tr>
                            <td><Icon icon={cashRegister} style={{color: '#076D16', fontSize: '50px'}} /></td>
                            <td>Registra los ingresos, los gastos y las cuentas por cobrar y pagar</td>
                        </tr>
                        <tr>
                            <td><Icon icon={statsBars2} style={{color: '#076D16', fontSize: '50px'}} /></td>
                            <td>Obtén información de la utilidad del negicio diaria, semanal y mensual</td>
                        </tr>
                        <tr>
                            <td><Icon icon={alertCircleOutline} style={{color: '#076D16', fontSize: '50px'}} /></td>
                            <td>Visualiza las fechas de vencimiento de tus facturas y recibos</td>
                        </tr>
                        <tr>
                            <td><Icon icon={cashCheck} style={{color: '#076D16', fontSize: '50px'}} /></td>
                            <td>Obtén pagos de las deudas de tus clientes más rápido con el registro de deudas pendientes</td>
                        </tr>
                        <tr>
                            <td><Icon icon={serverSecurity} style={{color: '#076D16', fontSize: '50px'}} /></td>
                            <td>Con Treinta, los registros se mantienen seguros</td>
                        </tr>
                    </tbody>
                </table>
    )
}
