"use client";

import * as React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function PanoramaSphere() {
  const texture = useLoader(
    THREE.TextureLoader,
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80",
  );
  const mappedTexture = React.useMemo(() => {
    const clone = texture.clone();
    clone.wrapS = THREE.RepeatWrapping;
    clone.repeat.x = -1;
    clone.center.set(0.5, 0.5);
    return clone;
  }, [texture]);

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={mappedTexture} side={THREE.BackSide} />
    </mesh>
  );
}

export function VirtualTourCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 0.1] }} className="rounded-3xl">
      <React.Suspense fallback={null}>
        <PanoramaSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </React.Suspense>
    </Canvas>
  );
}

