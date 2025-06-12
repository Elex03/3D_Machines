import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function AnimatedModel({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);
  // const { mouse } = useThree();

  const [currentAction, setCurrentAction] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      console.log("Animaciones disponibles:", Object.keys(actions));
      setIsReady(true);
      const preferred = actions["Chat3.001"] ? "Chat3.001" : "Chat3";
      setCurrentAction(preferred);
    }
  }, [actions]);

  useEffect(() => {
    if (!isReady || !actions || !currentAction) return;

    // Detener todas las animaciones actuales
    Object.values(actions).forEach((action) => action.fadeOut(0.2));

    const next = actions[currentAction];
    if (next) next.reset().fadeIn(0.2).play();
    else console.warn(`No se encontró la animación ${currentAction}`);
  }, [actions, currentAction, isReady]);

  // Movimiento cabeza con mouse
  // useFrame(() => {
  //   if (!group.current) return;

  //   const maxX = THREE.MathUtils.degToRad(20);
  //   const maxY = THREE.MathUtils.degToRad(30);
  //   const targetX = THREE.MathUtils.clamp(-mouse.y * maxX, -maxX, maxX);
  //   const targetY = THREE.MathUtils.clamp(mouse.x * maxY, -maxY, maxY);

  //   group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.1);
  //   group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.1);
  // });

  return (
    <>
      <primitive ref={group} object={scene} scale={3} />

      {/* Prueba para cambiar entre varias animaciones
      <div style={{ position: "absolute", top: 20, left: 20 }}>
        {["Walk", "Idle", "Hide", "Chat1"].map((name) => (
          <button key={name} onClick={() => setCurrentAction(name)}>
            {name}
          </button>
        ))}
      </div> */}
    </>
  );
}
