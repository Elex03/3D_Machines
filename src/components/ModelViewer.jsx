import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Line, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useInfoStore } from "../utils/useInfoShow";
import { labels } from "../constants/constants";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function ModelViewer({ modelName = "model.glb", labels = false }) {
  return (
    <Canvas camera={{ position: [10, 3, 4] }} style={{}}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />

      <ModelWithLabels modelName={modelName} isLabels={labels} />
      <OrbitControls />
    </Canvas>
  );
}
function ModelWithLabels({ modelName, isLabels }) {
  const { scene } = useGLTF(`/${modelName}`);
  const modelGroupRef = useRef(); // Este grupo contendrá modelo + etiquetas
  const { camera } = useThree();
  const setLabel = useInfoStore((state) => state.setLabel);

  const handleZoomToTarget = (targetArray, label) => {
    const targetPos = new THREE.Vector3(...targetArray);
    const endPos = targetPos.clone().add(new THREE.Vector3(0, 3, 0));

    gsap.to(camera.position, {
      x: endPos.x,
      y: endPos.y,
      z: endPos.z,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => camera.lookAt(targetPos),
    });

    setLabel(label);
  };

  // 🔁 Rotar el grupo completo
  useFrame(() => {
    if (modelGroupRef.current) {
      modelGroupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={modelGroupRef}>
      <primitive object={scene} scale={1} />
      {isLabels &&
        labels.map(({ id, label, labelPosition, target }) => (
          <group key={id}>
            <Line
              points={[labelPosition, target]}
              color="white"
              lineWidth={2}
            />
            <Html position={labelPosition} center>
              <div
                onClick={() => handleZoomToTarget(target, label)}
                style={{
                  background: "rgba(255,255,255,0.8)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                {label}
              </div>
            </Html>
          </group>
        ))}
    </group>
  );
}
export default ModelViewer;
