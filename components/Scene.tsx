// components/Scene.tsx
'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import Crystals from './Crystals';

function ParallaxGroup() {
  const group = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.15 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-pointer.y * 0.1 - group.current.rotation.x) * 0.04;
  });

  return (
    <group ref={group}>
      <Crystals />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}            // batasi resolusi (dari 2 jadi 1.5)
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 9], fov: 42 }}
      >
        <ParallaxGroup />
      </Canvas>
    </div>
  );
}
