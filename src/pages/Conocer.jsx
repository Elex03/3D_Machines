import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ComponentsDetails } from './ComponentsDetails.jsx';
//css
import '../styles/conocerComponents.css';
//iconos
 { /*import MemoryIcon from '@mui/icons-material/Memory';
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
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'; */}
//perifericos
// import DesktopWindowsIcon from '@mui/icons-material/DesktopWindowsOutlined';
// import MouseIcon from '@mui/icons-material/MouseOutlined';
// import KeyboardIcon from '@mui/icons-material/KeyboardOutlined';
// import HeadsetIcon from '@mui/icons-material/HeadsetOutlined';
// import MicNoneIcon from '@mui/icons-material/MicNoneOutlined';
// import VolumeUpIcon from '@mui/icons-material/VolumeUpOutlined';
// import PrintIcon from '@mui/icons-material/PrintOutlined';
// import SportsEsportsIcon from '@mui/icons-material/SportsEsportsOutlined';
// import UsbIcon from '@mui/icons-material/UsbOutlined';


import {Peripherals} from './layout/Peripherals.Know.jsx'

//ya tiene aplicado motion
export const Conocer = () => {
    const [seleccion, setSeleccion] = useState('componentes');
    


    // //perifericos
    // const iconComponentsTwo = [
    //     { icon: <DesktopWindowsIcon />, label: 'Monitor', path: '/monitor' },
    //     { icon: <MouseIcon/>, label: 'Ratón', path: '/raton' },
    //     { icon: <KeyboardIcon />, label: 'Teclado', path: '/teclado' },
    //     { icon: <HeadsetIcon />, label: 'Auricular', path: '/auricular' },
    //     { icon: <MicNoneIcon />, label: 'Microfono', path: '/microfono' },
    //     { icon: <VolumeUpIcon />, label: 'Parlante', path: '/parlante' },
    //     { icon: <PrintIcon />, label: 'Impresora', path: '/impresora' },
    //     { icon: <SportsEsportsIcon />, label: 'Controles', path: '/controles' },
    //     { icon: <UsbIcon />, label: 'USB', path: '/usb' }
    // ];


    return (
        <motion.div 
            className="conocer-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
          

            <div className="botones-navegacion">
                <button
                    className={seleccion === 'constantes' ? 'activo': ''}
                    onClick={() => setSeleccion('constantes')}

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
            {seleccion === 'constantes' && (
                <div
                    className="iconos-circulos"
                >
                <Peripherals />
                </div>
            )}

            {seleccion === 'perifericos' && (
                <motion.div 
                    className="iconos-circulos"
                    style={{display: 'flex'}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                   <Peripherals/>
                </motion.div>
            )}
        </motion.div>
    );
};
