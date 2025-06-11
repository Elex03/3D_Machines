import { useEffect } from "react";
import { useInfoStore } from "../utils/useInfoShow";

const paragraph = {
  Procesador : "Hello universe",
}


export default function InfoPanel() {
  const currentLabel = useInfoStore((state) => state.currentLabel);


  useEffect(() => {
    speakLabel(currentLabel);
  }, [currentLabel]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Información del componente</h2>
      {currentLabel ? (
        <p>
          Estás viendo: <strong>{currentLabel}</strong>
        </p>
      ) : (
        <p>
          Haz clic en un componente del modelo para obtener más información.
        </p>
      )}
    </div>
  );
}

function speakLabel(currentLabel) {
  console.log(currentLabel)

  if (currentLabel) {
    
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utteranceSetting())
  }
}

const utteranceSetting = () => {

 const utterance = new SpeechSynthesisUtterance(paragraph[`${'Procesador'}`])
    utterance.lang = 'es-EN'

    utterance.pitch = 0.5
    utterance.rate = 1   
    utterance.volume = 1  

    const voices = window.speechSynthesis.getVoices()
    const robotVoice = voices.find(v =>
      v.name.toLowerCase().includes('google español') || v.name.toLowerCase().includes('monotone')
    )
    if (robotVoice) {
      utterance.voice = robotVoice
    }
  return utterance;
}
