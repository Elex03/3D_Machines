import ModelViewer from "../components/ModelViewer";
import { ModelAnimatedViewer } from "../components/ModelAnimatedViewer";
import InfoPanel from "../components/InfoPanel";
import { Layout } from "../components/layout/Layout";
import Speaker from "../assets/Speaker.svg";
import No_Audio from "../assets/No_Audio.svg";
import { useAudioStore } from "../utils/audioStore";
import { useNavigate } from 'react-router-dom';
import React from 'react';


export const ComponentsDetails = () => {
  const { isAudioOn, toggleAudio } = useAudioStore();
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState(false);

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
            border: "none",
            padding: 0,
            position: "relative",
         
            cursor: "pointer",
            outline: "none",
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
        {/*boton de perifericos*/}
        <button
          onClick={() => {
            setIsActive(true);
            navigate('/perifericos');
          }}
          style={{
            padding: '10px 20px',
            border: '2px solid white',
            backgroundColor: isActive ? 'white' : 'transparent',
            color: isActive ? '#000' : '#fff',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginLeft: '50px'
          }}
        >
          Periféricos
        </button>

        <ModelViewer modelName="model.glb" />
      </div>
      <div style={{ flex: 1, display: "flex", width: "900px" }}>
        <InfoPanel />
        <ModelAnimatedViewer modelName="earth_cartoon.glb" dimesions={{width: '200px', height: '800px'}}/>
      </div>
    </Layout>
  );
};
