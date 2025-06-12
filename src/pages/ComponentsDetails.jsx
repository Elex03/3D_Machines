import ModelViewer from "../components/ModelViewer";
import { ModelAnimatedViewer } from "../components/ModelAnimatedViewer";
import InfoPanel from "../components/InfoPanel";
import { Layout } from "../components/layout/Layout";
import Speaker from "../assets/Speaker.svg";
import No_Audio from "../assets/No_Audio.svg";
import useAudioStore from "../utils/audioStore";


export const ComponentsDetails = () => {

  const { isAudioOn, toggleAudio } = useAudioStore();


  return (
    <Layout>
      <div
        style={{
          flex: 1,
          background: "transparent",
          backdropFilter: "blur(10px)",
          padding: "1rem",
        }}
      >
        <button
          onClick={toggleAudio}
          style={{
            background: 'transparent',
            border: 'none',
            padding: 0,
            position: 'relative',
            left: '2rem',
            cursor: 'pointer',
            outline: 'none',

          }}
        >
          <img
            src={isAudioOn ? Speaker : No_Audio}
            style={{ width: '25px', height: '25px', position: 'relative', left: '2rem' }}
            alt={isAudioOn ? 'Audio activado' : 'Audio desactivado'}
          />
        </button>
        <ModelViewer modelName="model.glb" />
      </div>
      <div style={{ flex: 1, display: "flex", width: "900px" }}>
        <InfoPanel />
        <ModelAnimatedViewer modelName="robot.glb" />
      </div>
    </Layout>
  );
};
