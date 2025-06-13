import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function AnimatedModel({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const [mixers, setMixers] = useState([]);
  const [currentClip, setCurrentClip] = useState(null);

  useEffect(() => {
    if (!animations || animations.length === 0) return;

    console.log("Animaciones cargadas:", animations.map(a => a.name));

    const skinnedMeshes = [];
    const skeletonMap = new Map();

    scene.traverse((child) => {
      if (child.isSkinnedMesh && !skeletonMap.has(child.skeleton.uuid)) {
        skeletonMap.set(child.skeleton.uuid, true);
        skinnedMeshes.push(child);
        child.frustumCulled = false;
        console.log("SkinnedMesh encontrado:", child.name);
      }
    });

    // Escoger animación base
    let baseClip = animations.find(a => a.name === "Chat1.001");
    if (!baseClip) baseClip = animations.find(a => a.name === "Chat1");
    if (!baseClip) baseClip = animations[0];

    console.log("Animación base seleccionada:", baseClip.name);

    // Crear mixers sin remapear las pistas
    const mixerInfo = skinnedMeshes.map((mesh) => {
      const mixer = new THREE.AnimationMixer(mesh);
      return { mixer, clip: baseClip };
    });

    setMixers(mixerInfo);
    setCurrentClip(baseClip);
  }, [scene, animations]);

  useEffect(() => {
    if (!currentClip || mixers.length === 0) return;

    mixers.forEach(({ mixer, clip }) => {
      mixer.stopAllAction();
      const action = mixer.clipAction(clip);
      action.reset();
      action.fadeIn(0.3);
      action.play();
      console.log("Iniciando acción para clip", clip.name);
    });
  }, [currentClip, mixers]);

  useEffect(() => {
    const clock = new THREE.Clock();
    let mounted = true;

    const animate = () => {
      if (!mounted) return;
      const delta = clock.getDelta();
      mixers.forEach(({ mixer }) => mixer.update(delta));
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      mounted = false;
      mixers.forEach(({ mixer }) => mixer.stopAllAction());
    };
  }, [mixers]);

  return <primitive ref={group} object={scene} scale={3} />;
}
