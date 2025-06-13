import React, { useState } from "react";
import { ModelAnimatedViewer } from '../../components/ModelAnimatedViewer'
import peripheralsInfo from '../../data/peripheralsInfo.json';

// tus opciones:
const iconComponentsTwo = [
  { label: 'Monitor', path: "/monitor" },
  { label: 'Ratón', path: "/raton" },
  { label: 'Teclado', path: "/teclado" },
  { label: 'Auricular', path: "/auricular" },
  { label: 'Microfono', path: "/microfono" },
  { label: 'Parlante', path: "/parlante" },
  { label: 'Impresora', path: "/impresora" },
  { label: 'Controles', path: "/controles" },
  { label: 'USB', path: "/usb" }
]

export const Peripherals = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'20px', width:'100%' }}>
      {/* Botones de selección */}
      <div style={{ display:'flex', gap:'10px', alignItems:'center' }}>
        {iconComponentsTwo.map((item) => (
          <button
            key={item.path}
            onClick={() => setSelected(item)}
            style={{ 
              padding:'10px 20px',
              background: selected?.path === item.path ? 'darkgrey' : 'black',
              color:'white',
              border:'none',
              cursor:'pointer'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Contenido de abajo */}
      <div style={{ display:'flex', height:'400px', width:'100%' }}>
        {/* Lado izquierdo (40%) */}
        <div 
        // style={{ flex:'40%', background:'rgba(0,0,0,0.7)', color:'white', padding:'20px' }}
        >
          {selected ? (
            <>
                <ModelAnimatedViewer modelName={'bmo.glb'} dimesions={{width: '100%', height: '100%'}} />
            </>
          ) : (
            <p>Seleccione un periférico</p>
          )}

        </div>

        {/* Lado derecho (60%) */}
        <div 
        style={{ flex:'60%', color:'white', padding:'20px'}}
        >
          {/* Aquí puedes mostrar más información, imágenes, etc. */}
          {selected ? (
            <div style={{maxWidth: '600px', marginTop: "10px"}}>
              <h2>{peripheralsInfo[selected.path]?.name}</h2>
              <p>{peripheralsInfo[selected.path]?.description}</p>
              {peripheralsInfo[selected.path]?.image && (
                <img
                  src={peripheralsInfo[selected.path].image}
                  alt={peripheralsInfo[selected.path].name}
                  style={{ width: "100%", maxWidth: "400px", marginTop: "10px", borderRadius: "10px" }}
                />
              )}
            </div>                             
          ) : (
            <p>Nada elegido aún</p>
          )}

        </div>
      </div>
    </div>
  )
}
