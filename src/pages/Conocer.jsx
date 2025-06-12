

import React, { useState } from 'react';
//css
import '../styles/conocerComponents.css';
//iconos
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import RouterIcon from '@mui/icons-material/Router';
import DnsIcon from '@mui/icons-material/Dns';
import CableIcon from '@mui/icons-material/Cable';
import MonitorIcon from '@mui/icons-material/Monitor';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import PowerIcon from '@mui/icons-material/PowerOutlined';
import AccountTreeIcon from '@mui/icons-material/AccountTreeOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnitOutlined';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';

export const Conocer = () => {
    const [seleccion, setSeleccion] = useState('componentes');
    const [seleccionado, setSeleccionado] = useState(null);


    //iconos comp
    const iconComponents = [
        { icon: <MemoryIcon />, label: 'Memoria RAM' },
        { icon: <StorageIcon />, label: 'Almacenamiento' },
        { icon: <DeveloperBoardIcon />, label: ' Tarjeta Madre' },
        { icon: <PowerIcon />, label: 'Fuente de Poder' },
        { icon: <AccountTreeIcon />, label: 'Tarjeta Grafica' },
        { icon: <DnsIcon/>, label: 'CPU' },
        { icon: <AcUnitIcon/>, label: 'Refrigeracion' },
        { icon: <SettingsEthernetIcon />, label: 'Tarjeta de Red' },
        { icon: <SettingsSystemDaydreamIcon/>, label: 'Procesador' }
      ];
      

    return (
        <div className="conocer-container">
            <h1>¡Bienvenido a la sección Conocer! </h1>
            <p>Aquí aprenderás sobre los componentes de nuestras máquinas y sus periféricos </p>

            <div className="botones-navegacion">
                <button
                    className={seleccion === 'componentes' ? 'activo' : ''}
                    onClick={() => setSeleccion('componentes')}
                >
                    Componentes de la PC
                </button>
                <button
                    className={seleccion === 'perifericos' ? 'activo' : ''}
                    onClick={() => setSeleccion('perifericos')}
                >
                    Periféricos de la PC
                </button>
            </div>

            {seleccion === 'componentes' && (
                <div className="iconos-circulos">
                {iconComponents.map((item, index) => (
                  <div key={index} className="circulo-con-texto">
                     <div className="circulo">{item.icon}</div>
                     <p className="etiqueta-circulo">{item.label}</p>
                   </div>
                ))}
                   </div>
            )}

            {seleccion === 'perifericos' && (
                <div className="texto-info">
                    <p>Información sobre periféricos pronto estará disponible 💻🖱️</p>
                </div>
            )}
        </div>
    );
};
