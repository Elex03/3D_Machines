import React from 'react';
import { Peripherals } from './layout/Peripherals.Know.jsx'
import { useNavigate } from 'react-router-dom';

export const Perifericos = () => {
    const navigate = useNavigate();


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '60px',
                minHeight: '100vh',
                width: '100%',
                marginLeft:'550px'
            }}
        >
            {/* Botón de volver alineado a la izquierda */}
            <div style={{ width: '100%', maxWidth: '1000px', marginBottom: '20px' }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        padding: '8px 16px',
                        border: '1px solid white',
                        backgroundColor: 'transparent',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        marginLeft: '-950px' 
                    }}
                >
                    ⬅ Volver
                </button>
            </div>

            {/* Componente Peripherals */}
            <Peripherals />
        </div>
    );
};
