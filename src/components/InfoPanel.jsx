import { useEffect } from "react";
import { useInfoStore } from "../utils/useInfoShow";
import componentsData from "../data/componentsData.json";
import "./InfoPanel.css";

export default function InfoPanel() {
  const currentLabel = useInfoStore((state) => state.currentLabel);

  const info = componentsData.find((item) => item.id === currentLabel);

  useEffect(() => {
    speakLabel(info?.description || "");
  }, [info]);

  return (
    <div
  className="scroll-delgado"
  style={{
    maxWidth: "300px",
    maxHeight: "525px",
    background: "rgba(0, 0, 0, 0.1)",
    padding: "1rem",
    borderRadius: "10px",
    border: "1px solid #fff",
    color: "white",
    wordWrap: "break-word",
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
          Más información:{" "}
          <a href={info.link} target="_blank" rel="noopener noreferrer" style={{ color: "#03c4ff" }}>
            Wikipedia
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
    </>
  ) : (
    <p>Haz clic en un componente del modelo para obtener más información.</p>
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
