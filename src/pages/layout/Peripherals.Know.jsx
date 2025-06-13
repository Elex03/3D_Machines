import React, { useState } from "react";
import { ModelAnimatedViewer } from "../../components/ModelAnimatedViewer";
import ModelViewer from "../../components/ModelViewer";
import peripheralsInfo from '../../data/peripheralsInfo.json';

// tus opciones:
const iconComponentsTwo = [
  { label: "Monitor", path: "monitor" },
  { label: "Ratón", path: "mouse" },
  { label: "Teclado", path: "keyboard1" },
  { label: "Auricular", path: "headset1" },
  { label: "Microfono", path: "microphone" },
  { label: "Parlante", path: "speakers" },
  { label: "Impresora", path: "printer" },
  { label: "Controles", path: "dualsense" },
  { label: "USB", path: "usb" },
];

export const Peripherals = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "80vw",
      }}
    >
      {/* Botones de selección */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" , justifyContent: 'space-evenly'}}>
        {iconComponentsTwo.map((item) => (
          <button
            key={item.path}
            onClick={() => setSelected(item)}
            style={{
              padding: "10px 20px",
              background: selected?.path === item.path ? "darkgrey" : "black",
              color: "white",
              border: "none",
              cursor: "pointer",
              
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Contenido de abajo */}
      <div style={{ display: "flex", height: "400px", width: "100%" }}>
        {/* Lado izquierdo (40%) */}
        <div
        // style={{ flex:'40%', background:'rgba(0,0,0,0.7)', color:'white', padding:'20px' }}
        >
          {selected ? (
            <>
              <ModelViewer modelName={`${selected?.path}.glb`} />
            </>
          ) : (
            <p>Seleccione un periférico</p>
          )}
        </div>

        {/* Lado derecho (60%) */}
        <div style={{ flex: "60%", color: "white", padding: "20px" }}>
          {/* Aquí puedes mostrar más información, imágenes, etc. */}
          {selected ? (
            <div style={{maxWidth: '600px', marginTop: "10px"}}>
              <h2>{peripheralsInfo[selected.path]?.name}</h2>
              <p>{peripheralsInfo[selected.path]?.description}</p>
              {/* {peripheralsInfo[selected.path]?.image && (
                <img
                  src={peripheralsInfo[selected.path].image}
                  alt={peripheralsInfo[selected.path].name}
                  style={{ width: "100%", maxWidth: "400px", marginTop: "10px", borderRadius: "10px" }}
                />
              )} */}
            </div>                             
          ) : (
            <div style={{maxWidth: '700px'}}>
              <p>Los perifericos de entrada y salida o unidades de entrada/salida son los equipos físicos conectados a la computadora. Estos dispositivos permiten comunicar información entre el usuario y la computadora o manejar un soporte de información.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
