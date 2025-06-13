import { useEffect } from "react";
import { useInfoStore } from "../utils/useInfoShow";
import componentsData from "../data/componentsData.json";
import "./InfoPanel.css";
import ModelViewer from "../components/ModelViewer";

export default function InfoPanel() {
  const currentLabel = useInfoStore((state) => state.currentLabel);

  const info = componentsData.find((item) => item.id === currentLabel);

  useEffect(() => {
    speakLabel(info?.description || "");
  }, [info]);

  return (
    <div
  className="scroll-delgado info-panel"
  style={{
    maxWidth: "320px",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "1.2rem",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#f0f0f0",
    wordWrap: "break-word",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(8px)",
    maxHeight: "100%",  // para que crezca libre
    overflowY: "visible", // sin scroll
    transition: "all 0.3s ease-in-out", 
  }}
>

  <h2>Información del componente</h2>
  {info ? (
    <>
      <p>
        Estás viendo: <strong>{info.id}</strong>, {info.description}
      </p>
      {info.extra && <p>{info.extra}</p>}
      {info.image && (
        <img
          src={info.image}
          alt={`Imagen de ${info.id}`}
          style={{ width: "50%", borderRadius: "8px", margin: "0.5rem 0" }}
        />
      )}
      {info.link && (
        <p>
          Enlace:{" "}
          <a href={info.link} target="_blank" rel="noopener noreferrer" style={{ color: "#03c4ff" }}>
            Más información...
          </a>
        </p>
      )}
      {info.youtube && (
        <div style={{ marginTop: "1rem" }}>
          <iframe
            width="100%"
            height="200"
            src={info.youtube}
            title={`Video de ${info.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "8px" }}
          ></iframe>
        </div>
      )}
          {info.model && (
            <div style={{ marginTop: "1rem" }}>
              <h4>Modelo 3D</h4>
              <ModelViewer modelName={info.model} width="100%" height="200px" />
            </div>
          )}

    </>
  ) : (    
    <p>Tarjeta Madre: también conocida como placa base o motherboard, 
      es uno de los componentes más cruciales en una computadora. 
      Su función principal radica en servir como el corazón del sistema, 
      unificando y conectando todos los otros componentes críticos del mismo.
      <br/><br/>Haz clic en un componente del modelo para obtener más información.</p>
  )}
</div>
  );
}

function speakLabel(text) {
  if (text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.pitch = 0.5;
    utterance.rate = 1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const robotVoice = voices.find((v) =>
      v.name.toLowerCase().includes("google español") ||
      v.name.toLowerCase().includes("monotone")
    );
    if (robotVoice) {
      utterance.voice = robotVoice;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
}
