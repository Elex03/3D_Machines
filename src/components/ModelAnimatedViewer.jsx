import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { AnimatedModel } from './AnimatedModel'

export  const  ModelAnimatedViewer = () =>{
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <AnimatedModel url="/robot.glb" />
      <OrbitControls />
    </Canvas>
  )
}
