import React, { useRef, useEffect, useState, Suspense, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import shipImg from '../assets/ship.png';
import waveVideo from '../assets/v1.mp4';
import VRVideo from '../assets/v2.mp4';

const HolographicMaterial = ({ color = '#00FFFF', opacity = 0.5, speed = 1 }) => {
  const materialRef = useRef();

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    uniform vec3 color;
    uniform float opacity;
    varying vec2 vUv;

    void main() {
      float scanline = sin(vUv.y * 50.0 + time * 5.0) * 0.1 + 0.9;
      float glow = sin(time * speed) * 0.2 + 0.8;
      gl_FragColor = vec4(color * scanline * glow, opacity * scanline);
      gl_FragColor.rgb += vec3(0.1, 0.1, 0.1) * (1.0 - opacity);
    }
  `;

  const uniforms = {
    time: { value: 0 },
    color: { value: new THREE.Color(color) },
    opacity: { value: opacity },
    speed: { value: speed }
  };

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <shaderMaterial
      ref={materialRef}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      transparent
      blending={THREE.AdditiveBlending}
      depthWrite={false}
    />
  );
};

const Ship = ({ scrollProgress, shipImage }) => {
  const shipRef = useRef();
  const vrPersonRef = useRef();
  const { camera } = useThree();
  const shipTexture = useTexture(shipImage);

  useFrame(() => {
    if (scrollProgress < 0.5) {
      const progress = Math.min(1, scrollProgress * 2);
      shipRef.current.position.z = THREE.MathUtils.lerp(10, -5, progress);
      shipRef.current.scale.setScalar(THREE.MathUtils.lerp(0.1, 1.5, progress));
      shipRef.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI * 0.1, progress);

      vrPersonRef.current.position.y = THREE.MathUtils.lerp(-0.5, -0.8, progress);
      vrPersonRef.current.position.z = THREE.MathUtils.lerp(0, -0.5, progress);
      vrPersonRef.current.scale.setScalar(THREE.MathUtils.lerp(0.1, 0.2, progress));

      camera.fov = THREE.MathUtils.lerp(75, 50, progress);
      camera.position.set(0, 0, THREE.MathUtils.lerp(0, 5, progress));
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();

    } else {
      const progress = Math.min(1, (scrollProgress - 0.5) * 2);
      shipRef.current.scale.setScalar(THREE.MathUtils.lerp(1.5, 0.01, progress));
      shipRef.current.position.z = THREE.MathUtils.lerp(-5, -20, progress);
      vrPersonRef.current.scale.setScalar(THREE.MathUtils.lerp(0.2, 0.01, progress));
    }
  });

  return (
    <group ref={shipRef}>
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[3, 0.5, 8]} />
        <meshStandardMaterial map={shipTexture} roughness={0.5} metalness={0.8} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[3.2, 0.1, 8.2]} />
        <meshStandardMaterial color="#555555" roughness={0.5} metalness={0.8} />
      </mesh>
      <mesh position={[0, 0.5, 2]}>
        <boxGeometry args={[2, 1.5, 3]} />
        <meshStandardMaterial color="#333333" roughness={0.5} metalness={0.8} />
      </mesh>

      <group ref={vrPersonRef} position={[0, -0.8, 1.5]}>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.3, 0.6, 0.2]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0, 0.6, 0.1]}>
          <boxGeometry args={[0.25, 0.1, 0.15]} />
          <meshStandardMaterial color="#1ECBE1" emissive="#1ECBE1" emissiveIntensity={2} />
        </mesh>
      </group>
    </group>
  );
};

const Home1 = () => {
  const heroRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);
  const currentScrollValue = useRef(0);
  const maxScrollValue = 2000;

  const handleWheel = useCallback((event) => {
    event.preventDefault();
    const scrollAmount = event.deltaY * 0.5;
    currentScrollValue.current = Math.max(0, Math.min(maxScrollValue, currentScrollValue.current + scrollAmount));
    const newProgress = currentScrollValue.current / maxScrollValue;
    setScrollProgress(newProgress);
  }, [maxScrollValue]);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);

  return (
    <div ref={heroRef} className="relative w-screen h-screen overflow-hidden font-['Orbitron']">
      <div className="absolute inset-0 z-0">
        <video src={waveVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 pointer-events-none">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide uppercase text-center drop-shadow-lg leading-tight">
          Enter the Virtual Voyage
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center px-4 max-w-3xl">
          Navigating the Future of Marine & Energy with AI Precision
        </p>
      </div>
      <div className="fixed inset-0 z-30 pointer-events-none">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
            <ambientLight intensity={0.5} color="#00FFFF" />
            <pointLight position={[10, 10, 10]} intensity={1} color="#1ECBE1" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00FFFF" />
            <Ship scrollProgress={scrollProgress} shipImage={shipImg} />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Home1;
