// components/Crystals.tsx
'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Crystal({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x += delta * speed * 0.35;
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      {/* Material ringan tapi tetap premium */}
      <meshStandardMaterial
        color="#0c0c0c"
        metalness={0.9}
        roughness={0.15}
        emissive="#1a1712"
        emissiveIntensity={0.15}
        flatShading
      />
    </mesh>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 120; // dikurangi dari 240

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#D8C6A4"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function Crystals() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#F4F0E8" />
      <directionalLight position={[-6, -2, -4]} intensity={0.5} color="#D8C6A4" />

      <Crystal position={[4.2, 0.5, -1]} scale={2.6} speed={0.12} />
      <Crystal position={[-4.8, -0.8, -2]} scale={1.9} speed={0.09} />
      <Crystal position={[2, -2.2, -3]} scale={1.1} speed={0.15} />
      <Crystal position={[-2.5, 2.4, -4]} scale={0.8} speed={0.18} />

      <Particles />
      <fog attach="fog" args={['#060606', 6, 20]} />
    </>
  );
}
