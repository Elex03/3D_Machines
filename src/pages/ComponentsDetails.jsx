import ModelViewer from "../components/ModelViewer";
import { ModelAnimatedViewer } from "../components/ModelAnimatedViewer";
import InfoPanel from "../components/InfoPanel";
import { Layout } from "../components/layout/Layout";
import BotonAtras from '../components/botonAtras';
import Speaker from "../assets/Speaker.svg";
import No_Audio from "../assets/No_Audio.svg";
import { useAudioStore } from "../utils/audioStore";

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
          width: '500px'
        }}
      >
        <button
          onClick={toggleAudio}
          style={{
            background: 'transparent',
            border: "none",
            padding: 0,
            position: "relative",
            cursor: "pointer",
            outline: "none",
            left: 0, 
            display: 'flex'
          }}
        >
          <img
            src={isAudioOn ? Speaker : No_Audio}
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
             
              
            }}
            alt={isAudioOn ? "Audio activado" : "Audio desactivado"}
          />
        </button>

        <ModelViewer modelName="model.glb" labels={true} />
      </div>
      <div style={{ display: "flex", width: "800px", height: '500px'}}>
        <InfoPanel />
        <ModelAnimatedViewer modelName="cat1.glb" dimesions={{width: '500px'}}/>
      </div>
    </Layout>
  );
};
