import { useEffect } from "react";
import { useInfoStore } from "../utils/useInfoShow";
import { useAudioStore } from "../utils/audioStore";

const paragraph = {
  Procesador: "Hello universe",
};

export default function InfoPanel() {
  const currentLabel = useInfoStore((state) => state.currentLabel);
  const isAudioOn = useAudioStore((state) => state.isAudioOn);

  useEffect(() => {
    speakLabel(currentLabel, isAudioOn);
  }, [currentLabel, isAudioOn]);

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

function speakLabel(currentLabel, ismuted) {
  console.log(currentLabel);

  if (currentLabel) {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utteranceSetting(ismuted));
  }
}

const utteranceSetting = (ismuted) => {
  console.log(ismuted);

  const utterance = new SpeechSynthesisUtterance(paragraph[`${"Procesador"}`]);
  utterance.lang = "es-EN";

  utterance.pitch = 0.5;
  utterance.rate = 1;
  utterance.volume = ismuted ? 1 : 0;

  const voices = window.speechSynthesis.getVoices();
  const robotVoice = voices.find(
    (v) =>
      v.name.toLowerCase().includes("google español") ||
      v.name.toLowerCase().includes("monotone")
  );
  if (robotVoice) {
    utterance.voice = robotVoice;
  }
  return utterance;
};
