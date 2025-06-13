import React, { useState } from "react";
import { ModelAnimatedViewer } from "../../components/ModelAnimatedViewer";
import ModelViewer from "../../components/ModelViewer";
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
            <p>Aquí puedes cargar más información de {selected?.label}.</p>
          ) : (
            <p>Nada elegido aún</p>
          )}
        </div>
      </div>
    </div>
  );
};
