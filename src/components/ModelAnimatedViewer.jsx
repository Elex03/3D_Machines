import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AnimatedModel } from "./AnimatedModel";

export const ModelAnimatedViewer = ({
  modelName,
  dimesions: { height, width },
}) => {
  return (
    <Canvas
      camera={{ position: [-10, 2, 8] }}
      style={{ height: height, width: width }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <AnimatedModel url={`/${modelName}`} />
      <OrbitControls enableRotate={false} />
    </Canvas>
  );
};
