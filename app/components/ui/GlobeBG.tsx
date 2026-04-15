// @ts-nocheck
"use client"

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import * as THREE from 'three';

extend({ UnrealBloomPass });

const ParticleSwarm = () => {
  const meshRef = useRef(null);
  const count = 5000;
  const speedMult = 0.1;

  // Reusable objects to avoid Garbage Collection (GC) thrashing
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const _target = useMemo(() => new THREE.Vector3(), []);
  const _color = useMemo(() => new THREE.Color(), []);
  const _sunDir = useMemo(() => new THREE.Vector3(), []);
  const _vec = useMemo(() => new THREE.Vector3(), []);

  // Pre-calculate initial random positions
  const positions = useMemo(() => {
    return Array.from({ length: count }, () => 
      new THREE.Vector3((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100)
    );
  }, []);

  // Material & Geom
  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vColor;
        void main() {
            vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
            vNormal = normalize(normalMatrix * normal);
            vViewPosition = -mvPosition.xyz;
            vColor = instanceColor;
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vColor;
        void main() {
            float fresnel = dot(vNormal, normalize(vViewPosition));
            fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
            fresnel = pow(fresnel, 2.0);
            vec3 col = vColor * fresnel + vec3(0.1); 
            gl_FragColor = vec4(col, 0.3 + fresnel * 0.7);
        }
    `,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
  }), []);

  const geometry = useMemo(() => new THREE.SphereGeometry(0.3, 8, 8), []); // Optimized segments from 16 to 8

  const PARAMS = useMemo(() => ({ 
    sunAltitude: 45, 
    densityFalloff: 1.8, 
    scatteringStrength: 1, 
    planetRadius: 50, 
    atmosphereThickness: 25 
  }), []);

  // Pre-calculate Fibonacci Sphere constants
  const phi = Math.PI * (Math.sqrt(5) + 1);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speedMult;
    material.uniforms.uTime.value = time;

    // 1. Move Param/Sun calculations OUTSIDE the loop
    const sunAltRad = THREE.MathUtils.degToRad(PARAMS.sunAltitude);
    _sunDir.set(1, Math.sin(sunAltRad), 0).normalize();
    
    // Pre-calculate scattering bases
    const scatterR = Math.pow(650e-9, -4);
    const scatterG = Math.pow(550e-9, -4);
    const scatterB = Math.pow(450e-9, -4);
    const maxScatter = Math.max(scatterR, scatterG, scatterB);
    const rBase = (scatterR / maxScatter) * PARAMS.scatteringStrength;
    const gBase = (scatterG / maxScatter) * PARAMS.scatteringStrength;
    const bBase = (scatterB / maxScatter) * PARAMS.scatteringStrength;

    for (let i = 0; i < count; i++) {
      const iNorm = i / count;
      const y = 1 - iNorm * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const shellRadius = PARAMS.planetRadius + Math.pow(iNorm, PARAMS.densityFalloff) * PARAMS.atmosphereThickness;

      // Calculate target without creating new vectors
      _target.set(
        Math.cos(theta) * radiusAtY * shellRadius,
        y * shellRadius,
        Math.sin(theta) * radiusAtY * shellRadius
      );

      // Use a reusable vector for direction to avoid cloning
      _vec.copy(_target).normalize();
      const cosAngle = _vec.dot(_sunDir);
      const phase = 0.75 * (1.0 + cosAngle * cosAngle);

      const heightNorm = (_target.length() - PARAMS.planetRadius) / PARAMS.atmosphereThickness;
      const density = Math.exp(-heightNorm * 6.0);
      const intensity = phase * density;

      _color.setRGB(rBase * intensity, gBase * intensity, bBase * intensity);

      if (cosAngle > 0.98) _color.addScalar((cosAngle - 0.98) * 50);
      if (cosAngle < -0.3) {
        _color.multiplyScalar(0.1);
        _color.b += 0.15 * density;
      }

      // Smooth transition
      positions[i].lerp(_target, 0.1);
      
      dummy.position.copy(positions[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, _color);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <group position={[0, -50, 0]}>
      <instancedMesh ref={meshRef} args={[geometry, material, count]} />
    </group>
  );
};

export default function GlobeBG({ children }: { children: React.ReactNode}) {
  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 70], fov: 60 }}
          gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <ParticleSwarm />
          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} enableRotate={false} />
          <Effects disableGamma>
            <unrealBloomPass threshold={0} strength={1.8} radius={0.4} />
          </Effects>
        </Canvas>
      </div>
      {children}
    </div>
  );
}