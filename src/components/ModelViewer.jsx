import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Html, Line, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { useInfoStore } from '../utils/useInfoShow'
import { labels } from '../constants/constants'

function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 10, 0] }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <ModelWithLabels />
      <OrbitControls />
    </Canvas>
  )
}
function ModelWithLabels() {
    const { scene } = useGLTF('/model.glb')
    const { camera } = useThree()
    const setLabel = useInfoStore((state) => state.setLabel)
  
    const handleZoomToTarget = (targetArray, label) => {
      const targetPos = new THREE.Vector3(...targetArray)
      const endPos = targetPos.clone().add(new THREE.Vector3(0, 3, 0))
  
      gsap.to(camera.position, {
        x: endPos.x,
        y: endPos.y,
        z: endPos.z,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => camera.lookAt(targetPos),
      })
  
      setLabel(label) // actualiza el estado global
    }
  
    return (
      <>
        <primitive object={scene} scale={1} />
  
        {labels.map(({ id, label, labelPosition, target }) => (
          <group key={id}>
            <Line points={[labelPosition, target]} color="white" lineWidth={2} />
            <Html position={labelPosition} center>
              <div
                onClick={() => handleZoomToTarget(target, label)}
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  color: '#000',
                  cursor: 'pointer',
                }}
              >
                {label}
              </div>
            </Html>
          </group>
        ))}
      </>
    )
  }
export default ModelViewer
