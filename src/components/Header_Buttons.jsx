import { useState } from "react"
import Speaker from "../assets/Speaker.svg";


export const Header_Buttons = () => {
    return (

        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '1rem',
            position: 'relative',
            bottom: '1.4rem',

        }}>

            <button type="button" class="btn btn-outline-light" >Videos</button>
            <button type="button" class="btn btn-outline-light">Guias</button>
            <button type="button" class="btn btn-outline-light">Tips</button>
            <button type="button" class="btn btn-outline-light">Recursos</button>
        </div>
    )

}


export const VideoCard = ({
    title,
    description,
    onClick,
    videoUrl

}) => {

    const [isHovered, setIsHovered] = useState(false);
    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        width: '70%',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px 0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backgroundColor: isHovered ? 'gray' : 'transparent',
        boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'
    };

    const videoContainerStyle = {
        flexShrink: 0,// Evita que el video se encoja
        width: '160px',
        height: '90px',
        borderRadius: '4px',
        overflow: 'hidden',
    }

    const iframeStyle = {
        width: '100%',
        height: '100%',
        border: 'none',
    }

    return (
        <div style={cardStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
            tabIndex="0"
            onKeyKeyDown={(e) => e.key === 'Enter' && onClick()}
        >
            <div style={videoContainerStyle}>
                <iframe
                    src={videoUrl}
                    title={`Video: ${title}`}
                    style={iframeStyle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen // React usa camelCase para esto
                    referrerPolicy="strict-origin-when-cross-origin" // Correcto en React
                />
            </div>
            <div style={{ flexGrow: 1 }}>
                <h3
                    style={{ margin: '0 0 8px 0', fontSize: '18px', position: 'relative', bottom: '0.5rem' }}
                >{title}</h3>
                <p
                    style={{ margin: 0, color: '#666', fontSize: '14px', position: 'relative', bottom: '0.5rem' }}
                >{description}</p>
            </div>
        </div>

    )
};