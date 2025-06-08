import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function AnimatedModel({ url }) {
  const group = useRef()
  const { scene, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, group)
  const { mouse } = useThree()

  useEffect(() => {
    if (actions && actions['Animation']) {
      actions['Animation'].reset().fadeIn(0.5).play()
    } else {
      const first = Object.values(actions)[0]
      if (first) first.reset().fadeIn(0.5).play()
    }
  }, [actions])

  useFrame(() => {
    if (!group.current) return

    // Limita el movimiento como una cabeza humana
    const maxX = THREE.MathUtils.degToRad(20) // arriba/abajo
    const maxY = THREE.MathUtils.degToRad(30) // izquierda/derecha

    // Aplica límites y suaviza el movimiento
    const targetX = THREE.MathUtils.clamp(-mouse.y * maxX, -maxX, maxX)
    const targetY = THREE.MathUtils.clamp(mouse.x * maxY, -maxY, maxY)

    // Interpolación suave hacia la rotación deseada
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.1)
  })

  return <primitive ref={group} object={scene} scale={3} />
}
