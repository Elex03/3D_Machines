import { useState } from "react"



export const Header_Buttons = () => {

    const [activeTab, setActiveTab] = useState('videos');

    const tips = [
        {
            question: "¿Qué especificaciones debo tomar en cuenta al comprar una PC?",
            answer: "Al comprar una PC, considera el **procesador (CPU)** para el rendimiento general, la **memoria RAM** para la multitarea fluida, el **almacenamiento (SSD vs. HDD)** para la velocidad de carga y capacidad, y la **tarjeta gráfica (GPU)** si necesitas procesar gráficos intensivos para juegos o diseño. Define tu presupuesto y el uso principal que le darás a la computadora para equilibrar estos componentes."
        },
        {
            question: "¿Qué hacer si mi PC está lenta?",
            answer: "Si tu PC se siente lenta, puedes probar varias cosas: **liberar espacio** en el disco, **desinstalar programas** que no uses, **limitar los programas de inicio**, **actualizar tus controladores**, **escanear en busca de malware** y considerar **añadir más RAM o un SSD** si no lo tienes. Un reinicio regular también puede ayudar a limpiar la memoria."
        },
        {
            question: "¿Qué especificaciones debería tener mi PC si estudio Arquitectura?",
            answer: "Para Arquitectura, tu PC debería tener un **procesador potente (Intel Core i7/i9 o AMD Ryzen 7/9)**, al menos **16 GB de RAM (32 GB es ideal)**, una **tarjeta gráfica dedicada de gama media-alta (NVIDIA GeForce RTX o AMD Radeon RX)** con al menos 6GB de VRAM, y un **SSD de 500 GB o más** para programas y proyectos."
        },
        {
            question: "¿Qué especificaciones debería tener mi PC si estudio Ingeniería en Computación?",
            answer: "Para Ingeniería en Computación, busca un **procesador robusto (Intel Core i5/i7 o AMD Ryzen 5/7)** para compilación y máquinas virtuales, **16 GB de RAM** como mínimo, un **SSD de 500 GB o 1 TB** para un acceso rápido a archivos y entornos de desarrollo. Una tarjeta gráfica dedicada no es indispensable a menos que te enfoques en desarrollo de juegos o IA."
        },
        {
            question: "¿Qué especificaciones debería tener mi PC si estudio Administración de Empresas?",
            answer: "Para Administración de Empresas, una PC con un **procesador Intel Core i3/i5 o AMD Ryzen 3/5**, **8 GB de RAM** y un **SSD de 256 GB o 500 GB** suele ser suficiente. La portabilidad y una buena duración de la batería pueden ser factores importantes si necesitas llevarla a clases o reuniones."
        },
        {
            question: "¿Qué es Arquitectura de Máquinas?",
            answer: "La **Arquitectura de Máquinas** se refiere al diseño conceptual y la estructura operativa de un sistema informático. Describe cómo la CPU, la memoria, los dispositivos de entrada/salida y otros componentes están interconectados y cómo se comunican entre sí para ejecutar programas."
        },
        {
            question: "¿Cuál es la función de la clase de Arquitectura de Máquinas?",
            answer: "La clase de Arquitectura de Máquinas te enseña los **principios fundamentales del hardware de las computadoras**. Aprenderás cómo funciona un procesador, cómo se gestiona la memoria, y cómo los programas interactúan con el hardware a un nivel bajo, lo cual es crucial para optimizar el software y entender los límites de la tecnología."
        },
        {
            question: "¿Cómo podemos ayudar al medio ambiente a través de la tecnología actual?",
            answer: "Podemos ayudar al medio ambiente a través de la tecnología actual de varias maneras: **reciclando nuestros dispositivos electrónicos** correctamente, **reduciendo el consumo de energía** de nuestros equipos, utilizando **servicios en la nube** para disminuir la necesidad de hardware físico, optando por **energías renovables** para alimentar centros de datos, y desarrollando **soluciones tecnológicas verdes** como la optimización de rutas de transporte o la gestión inteligente de residuos."
        }
    ];


    const recursos = [
        {
            title: "WinToUsb",
            description: "Permite instalar y ejecutar Windows desde una unidad USB",
            url: "https://www.majorgeeks.com/files/details/wintousb.html"
        },
        {
            title: "PowerDataRecovery",
            description: "Software para recuperar archivos borrados o perdidos de diversos dispositivos de almacenamiento.",
            url: "https://power-data-recovery.softonic.com/"
        },
        {
            title: "Rufus",
            description: " Crea unidades USB de arranque (booteables) de forma sencilla.",
            url: "https://apps.microsoft.com/detail/9pc3h3v7q9ch?hl=es-ES&gl=ES"
        },
        {
            title: "Ventoy",
            description: "Herramienta para crear USBs de arranque con múltiples archivos ISO.",
            url: "https://ventoy.uptodown.com/windows"
        },
        {
            title: "Acronis",
            description: "Soluciones de backup, recuperación ante desastres y ciberseguridad.",
            url: "https://www.acronis.com/en-us/"
        },
        {
            title: "Hiren's BootCD PE",
            description: " Un disco de arranque con una colección de utilidades para reparar y diagnosticar PCs.",
            url: "https://www.hirensbootcd.org/download/"
        },
        {
            title: "Mplab",
            description: " Entorno de desarrollo integrado (IDE) para microcontroladores de Microchip.",
            url: "https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide"
        },
        {
            title: "Tinkercad",
            description: " Plataforma online gratuita para diseño 3D, electrónica y codificación.",
            url: "https://www.tinkercad.com/"
        }
    ];


    // Datos de ejemplo para los videos
    const videos = [
        {
            title: "MICROPROCESADORES Y MICROCONTROLADORES: Diferencias fundamentales.",
            description: "Te explicamos de forma simple y puntual la diferencia entre estos dos tipos de IC.",
            videoUrl: "https://www.youtube.com/embed/MrYFyYLLL10?si=X2PtTFhBDxPoHwrJ"
        },
        {
            title: "como hacer mantenimiento PREVENTIVO A MI COMPUTADORA.",
            description: "Te mostrare la forma de sencilla y rápida de realizar un mantenimiento preventivo de tu PC o COMPUTADORA, no es necesario que tengas conocimientos en reparación, te explicaremos de forma general sobre el mantenimiento de tu PC    NOTA: usa tambien alcohol isopropílico para la Limpieza.",
            videoUrl: "https://www.youtube.com/embed/QVSqMd3m8Zo?si=TuwBFwOddyjCAtq3"
        },
        {
            title: "🤖DISPOSITIVOS de ENTRADA y SALIDA de una COMPUTADORA | ✔️Ejemplos y EXPLICACIÓN FÁCIL",
            description: "Sabias que los DISPOSITIVOS DE ENTRADA Y SALIDA de una computadora son de los elementos principales para su correcto funcionamiento. Gracias a ellos nosotros podemos interactuar con las computadoras, TOMA NOTA.",
            videoUrl: "https://www.youtube.com/embed/T1abc6Qtzvw?si=cxeNhmDAjAsU9dxy"
        },
        {
            title: "Corriente Directa o Continua y Corriente Alterna AC | Similitudes y diferencias",
            description: "En este video se explica brevemente las similitudes y diferencias que hay entre corriente directa (DC) o corriente continua (CC) y corriente alterna (AC).",
            videoUrl: "https://www.youtube.com/embed/boQ6hMpp7kI?si=B0a6Dv8FeH3AWgXC"
        },
        {
            title: "👉📁📚🔁💾¿Cómo Hacer un Respaldo [Backup] Completo de Archivos y Carpetas? | Rápido y sin Complicaciones",
            description: "En este vídeo encontrarás cómo hacer un respaldo efectivo si vas a reparar y PC o vas a cambiar por un equipo nuevo y de esta manera no pierdas ningún dato de tus archivos y carpetas.",
            videoUrl: "https://www.youtube.com/embed/wk6NtMfrxPo?si=EeTG3uuQlf6rcDbt"
        },
        {
            title: "Cómo crear USB Booteable de Windows 10 🔵 en Simples Pasos",
            description: "En este video te explico paso a paso como crear un USB booteable para instalar #Windows10, te explico además como descargar la ISO de Windows 10 de forma oficial, y como crear una memoria USB Booteable con Rufus última versión.",
            videoUrl: "https://www.youtube.com/embed/FL4OoWWus7c?si=xVXkqjchycZuyprE"
        },
        {
            title: "Instalar Controlador/Driver🖨️Impresora y escáner Epson sin💿CD en🪟Windows 10, 8.1, 8, 7",
            description: "Proceso bien explicado para la instalación del controlador o driver de impresoras multinacionales Epson en sistemas operativos Windows sin utilizar el CD de instalación que viene incluido en la caja de la impresora.",
            videoUrl: "https://www.youtube.com/embed/JqHgE3-7gfQ?si=jZJ9epGDWJ_c1S0u"
        },
        {
            title: "Configurar escritorio remoto en Windows 10 ✅ en 2025",
            description: "En este video te explico un tutorial paso a paso de cómo configurar escritorio remoto en Windows 10 y poder acceder a otra Pc desde la misma red local o a través de una conexión a Internet abriendo el puerto RDP en Router.",
            videoUrl: "https://www.youtube.com/embed/DMFLaF0yM18?si=VTTBY9hqCwFGPYlP"
        },
        {
            title: "💻✅Como HACER Una COPIA De SEGURIDAD En WINDOWS En Un DISCO DURO EXTERNO SIN Usar Otros PROGRAMAS",
            description: "Si necesitas realizar periódicamente copias de seguridad de tus archivos en Windows y no quieres arriesgarte a que se te pase por alto una carpeta en el backup, entonces deberías configurar una copia de seguridad automática en tu dispositivo, utilizando un disco externo o un pendrive, y la herramienta que ya viene de serie en tu Windows 7, 8, 10 y 11.",
            videoUrl: "https://www.youtube.com/embed/DkpbqU29uIA?si=ks0UhgabjM9aCGfj"
        },
        {
            title: "CONFIGURAR ROUTER TPLINK TL-WR720n WR741n - Configurar WIFI",
            description: "Configurar Router  TP-LINK TL-WR720n WR741n en 5 Pasos con los parámetros de configuración de la red Inalambrica (Wireless) seguridad WPA2 personal  y DHCP limitado. ",
            videoUrl: "https://www.youtube.com/embed/esdVJorVpoA?si=EUxKjzl270E9aAJo"
        },
        {
            title: "COMO DIAGNOSTICAR LAS FALLAS MAS COMUNES EN PC /FACIL)",
            description: "Como de diagnosticar(detectar ) mediante un o procedimientos muy sencillos(basicos) , las fallas mas comunes que se puede presentar en los equipos de pc escritorio,algunos métodos que pueden ayudar la falla mucho mas rápido. suscribete y entérate de  nuevos vídeos",
            videoUrl: "https://www.youtube.com/embed/5Oz0Je4FU_0?si=H5z-HEmo_ltrUiHH"
        },
        {
            title: "Cómo Se Hace Un MICROPROCESADOR? [Proceso En Fábrica]",
            description: "Todos los días de tu vida realizas tareas que solo son posibles gracias a la existencia de los microprocesadores. Están presentes en casi todos los aparatos electrónicos de la actualidad, se fabrican de a miles y de millones. Y aquí te contamos como.",
            videoUrl: "https://www.youtube.com/embed/Q3F3UGSNiNY?si=d186oyDuJSsNTzlZ"
        }
    ];


    const videos_guias = [
        {
            title: "Cómo Hacer un Mapa Mental Fácil y Rápido 😱 | (Paso a Paso con Ejemplos)",
            description: "►► ¡Aprende a Crear Mapas Mentales Paso a Paso! Veremos ejemplos prácticos de Cómo Hacer un Mapa Mental desde Cero. ¡Esta es una Lección Extra del Curso de Técnicas de Estudio! 😉",
            videoUrl: "https://www.youtube.com/embed/STAtmg5N_tE?si=-vH7RTESY5uN9JdR"
        },
        {
            title: "Cómo hacer un mapa conceptual | UNIR MÉXICO",
            description: "Tutorial para aprender a crear un mapa conceptual de los contenidos educativos para facilitar el estudio",
            videoUrl: "https://www.youtube.com/embed/n2UfP6dGOaw?si=q2QVrN2DTfh8nUHk"
        },
        {
            title: "📚 ¿CÓMO hacer una INFOGRAFÍA? | ¿QUÉ es una INFOGRAFÍA | PASOS para HACER una INFOGRAFÍA",
            description: "📚 En este vídeo educativo vamos a explicar cómo hacer un infografía, responderemos a qué es una infografía, además de explicar lo pasos para hacer una infografía, con ejemplos gráficos.",
            videoUrl: "https://www.youtube.com/embed/hgTxBYNlbT0?si=T6EdXvHBfZTwSM3c"
        },
        {
            title: "Cómo hacer resúmenes",
            description: "Así es como tienes se hacen los resúmenes más efectivos.",
            videoUrl: "https://www.youtube.com/embed/gzFQ9f5Bdmg?si=Qy-NHvG6qzDlgC3T"
        },

    ];


    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '1rem',
                position: 'relative',
                bottom: '1.4rem',
            }}>
                <button
                    type="button"
                    className={`btn btn-outline-light ${activeTab === 'videos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('videos')}
                >
                    Videos
                </button>
                <button
                    type="button"
                    className={`btn btn-outline-light ${activeTab === 'guias' ? 'active' : ''}`}
                    onClick={() => setActiveTab('guias')}
                >
                    Guias
                </button>
                <button
                    type="button"
                    className={`btn btn-outline-light ${activeTab === 'recursos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('recursos')}
                >
                    Recursos
                </button>
                <button
                    type="button"
                    className={`btn btn-outline-light ${activeTab === 'tips' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tips')}
                >
                    Tips
                </button>
            </div>

            {/* Contenido que cambia según el tab activo */}
            <div style={{ marginTop: '1rem' }}>
                {activeTab === 'videos' && (
                    <div>
                        <h3 style={{ marginBottom: '20px' }}>Contenido Exclusivo de Clases</h3>
                        <p>
                            Los videos que te brindamos en esta plataforma son material de apoyo exclusivo, extraído directamente de las clases impartidas por el profesor. En ellos, encontrarás explicaciones detalladas y ejemplos prácticos sobre los temas que hemos estado cubriendo. ¡Esperamos que te sean de gran ayuda para reforzar tus conocimientos!
                        </p>
                        {videos.map((video, index) => (
                            <VideoCard
                                key={index}
                                title={video.title}
                                description={video.description}
                                videoUrl={video.videoUrl}
                                onClick={() => {
                                    // Aquí puedes agregar lógica para cuando se hace clic en un video
                                    console.log(`Reproduciendo: ${video.title}`);
                                }}
                            />
                        ))}
                    </div>
                )}

                {activeTab === 'guias' && (
                    <div>
                        <h4>Sección de Guías</h4>
                        <p>En esta sección encontrarás guías detalladas para abordar las asignaciones que el profesor ha dejado en clase. Te proporcionaremos estrategias y consejos prácticos para aplicar los conocimientos adquiridos en cada tema. ¡Esta sección te servirá como una herramienta valiosa para reforzar tu aprendizaje y obtener los mejores resultados en tus trabajos!</p>
                        {videos_guias.map((video, index) => (
                            <VideoCard
                                key={index}
                                title={video.title}
                                description={video.description}
                                videoUrl={video.videoUrl}
                                onClick={() => {
                                    // Aquí puedes agregar lógica para cuando se hace clic en un video
                                    console.log(`Reproduciendo: ${video.title}`);
                                }}
                            />
                        ))}
                    </div>
                )}

                {activeTab === 'recursos' && (
                    <div>
                        <h4>Apartado de Recursos</h4>
                        <p>
                            En este apartado, tendrás acceso directo a todos los enlaces de las plataformas y aplicaciones que hemos estado utilizando a lo largo del semestre. Aquí podrás encontrar de manera organizada las herramientas necesarias para elaborar los laboratorios y proyectos que el profesor ha asignado, facilitando así tu trabajo y el acceso a los recursos clave.
                        </p>
                        {activeTab === 'recursos' && (
                            <div>
                                <h3 style={{ marginBottom: '20px' }}>Recursos Recomendados</h3>
                                {recursos.map((recurso, index) => (
                                    <LinkCard
                                        key={index}
                                        title={recurso.title}
                                        description={recurso.description}
                                        url={recurso.url}
                                        onClick={(e) => {
                                            // Opcional: puedes hacer algo antes de navegar
                                            console.log(`Navegando a: ${recurso.title}`);
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'tips' && (
                    <div>
                        <h4>Tips Tecnológicos</h4>
                        <p>
                            ¡Bienvenido a nuestra sección de Tips Tecnológicos! Aquí encontrarás respuestas claras y concisas a preguntas frecuentes sobre la compra, mantenimiento y optimización de tu equipo, además de información relevante sobre el mundo de la informática y cómo la tecnología puede impactar positivamente nuestro entorno.</p>

                        <div style={{ marginTop: '20px' }}>
                            {tips.map((tip, index) => (
                                <QuestionCard
                                    key={index}
                                    question={tip.question}
                                    answer={tip.answer}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

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


export const LinkCard = ({
    title,
    description,
    url,
    onClick
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
        backgroundColor: isHovered ? '#f5f5f5' : 'transparent',
        boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
        textDecoration: 'none',
        color: 'inherit'
    };

    const iconStyle = {
        flexShrink: 0,
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        backgroundColor: '#e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px'
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={cardStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={iconStyle}>
                <span>🔗</span>
            </div>
            <div style={{ flexGrow: 1 }}>
                <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '18px',
                    color: isHovered ? '#0066cc' : 'inherit'
                }}>
                    {title}
                </h3>
                <p style={{
                    margin: 0,
                    color: '#666',
                    fontSize: '14px'
                }}>
                    {description}
                </p>
                <p style={{
                    margin: '4px 0 0 0',
                    color: '#888',
                    fontSize: '12px',
                    wordBreak: 'break-all'
                }}>
                    {url}
                </p>
            </div>
        </a>
    );
};



export const QuestionCard = ({
    question,
    answer
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const cardStyle = {
        width: '70%',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px 0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backgroundColor: 'transparent',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        borderLeft: `4px solid ${isExpanded ? '#fff' : '#e0e0e0'}`
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: isExpanded ? '12px' : '0'
    };

    const questionStyle = {
        margin: '0',
        fontSize: '18px',
        fontWeight: '500',
        color: '#fff'
    };

    const answerStyle = {
        margin: '0',
        color: '#fff',
        fontSize: '15px',
        lineHeight: '1.5',
        maxHeight: isExpanded ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, opacity 0.2s ease',
        opacity: isExpanded ? '1' : '0'
    };

    const arrowStyle = {
        transition: 'transform 0.3s ease',
        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
        fontSize: '20px'
    };

    return (
        <div
            style={cardStyle}
            onClick={() => setIsExpanded(!isExpanded)}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
        >
            <div style={headerStyle}>
                <h3 style={questionStyle}>{question}</h3>
                <span style={arrowStyle}>▼</span>
            </div>
            <div style={answerStyle}>
                <p>{answer}</p>
            </div>
        </div>
    );
};