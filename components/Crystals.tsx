// components/Crystals.tsx
'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
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
    // subtle float
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <MeshTransmissionMaterial
        transmission={0.2}
        thickness={2}
        roughness={0.25}
        ior={1.4}
        chromaticAberration={0.02}
        color="#0a0a0a"
        attenuationColor="#1a1712"
        attenuationDistance={2}
        metalness={0.4}
        clearcoat={1}
      />
    </mesh>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 240;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 22;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
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
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#F4F0E8" />
      <directionalLight position={[-6, -2, -4]} intensity={0.4} color="#D8C6A4" />
      <spotLight position={[0, 6, 6]} intensity={2} angle={0.5} penumbra={1} color="#fff" />

      <Crystal position={[4.2, 0.5, -1]} scale={2.6} speed={0.12} />
      <Crystal position={[-4.8, -0.8, -2]} scale={1.9} speed={0.09} />
      <Crystal position={[2, -2.2, -3]} scale={1.1} speed={0.15} />
      <Crystal position={[-2.5, 2.4, -4]} scale={0.8} speed={0.18} />

      <Particles />
      <fog attach="fog" args={['#060606', 6, 20]} />
    </>
  );
}