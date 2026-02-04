import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0,    'rgba(255,255,255,1)');
  gradient.addColorStop(0.15, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.2,  'rgba(255,255,255,0.4)');
  gradient.addColorStop(0.3,  'rgba(255,255,255,0.12)');
  gradient.addColorStop(0.5,  'rgba(255,255,255,0.04)');
  gradient.addColorStop(0.75, 'rgba(255,255,255,0.01)');
  gradient.addColorStop(1,    'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

// ============================================================
// PARTICLE SYSTEM CONTROLS
// ============================================================

const PARTICLE_CONFIG = {
  // --- Density & Count ---
  count: 150000,                // Total particles (split evenly across clusters)

  // --- Cluster Spread (per hero region) ---
  // Camera looks straight along Z. X = screen width, Z = depth.
  // Y spread is calculated per-cluster to fill one viewport height.
  clusterSpreadX: 30,         // Horizontal spread per cluster
  clusterSpreadZ: 10,          // Depth spread per cluster

  // --- Appearance ---
  size: 0.275,
  opacity: 1,
  sizeAttenuation: true,

  // --- Star Colors (weight = relative probability) ---
  colors: [
    { color: '#ffffff', weight: 0.98 },
    { color: '#faf2b6', weight: 0.01 },
    { color: '#ff0000', weight: 0.01 },
    { color: '#a1d6ff', weight: 0.01 },
  ],

  // --- Twinkle ---
  twinkleSpeed: 1,
  twinkleAmount: 0.35,

  // --- Scroll Panning ---
  scrollFactor: 0.003,
  scrollSmoothing: 7.5,

  // --- Camera ---
  cameraZ: 8,
  fov: 50,

  // --- Near Fade ---
  nearFade: 2,
  nearFadeWidth: 1,

  // --- Fog ---
  // #060a14
  fogColor: '#060a14',
  fogNear: 1,
  fogFar: 30,

  // --- Spawn-in Effect ---
  spawnDuration: 1.5,
  spawnMaxRadius: 30,
};

// ============================================================

function pickColor(): THREE.Color {
  const { colors } = PARTICLE_CONFIG;
  const totalWeight = colors.reduce((sum, c) => sum + c.weight, 0);
  let r = Math.random() * totalWeight;
  for (const entry of colors) {
    r -= entry.weight;
    if (r <= 0) return new THREE.Color(entry.color);
  }
  return new THREE.Color(colors[0].color);
}

// Calculate visible height at Z=0 for the given camera config
function getVisibleHeight(): number {
  const halfFovRad = (PARTICLE_CONFIG.fov / 2) * (Math.PI / 180);
  return 2 * PARTICLE_CONFIG.cameraZ * Math.tan(halfFovRad);
}

interface ParticlesProps {
  scrollY: number;
  sectionOffsets: number[];
}

function Particles({ scrollY, sectionOffsets }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  const scrollRef = useRef(scrollY);
  scrollRef.current = scrollY;
  const elapsed = useRef(0);

  const circleTexture = useMemo(() => createCircleTexture(), []);

  // Generate clustered particle positions based on section offsets
  const { positions, distances, colors, twinkleOffsets, scales } = useMemo(() => {
    const count = PARTICLE_CONFIG.count;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const dist = new Float32Array(count);
    const offsets = new Float32Array(count);
    const scl = new Float32Array(count).fill(0);
    const camZ = PARTICLE_CONFIG.cameraZ;

    const numClusters = sectionOffsets.length || 1;
    const perCluster = Math.floor(count / numClusters);
    const clusterHeight = getVisibleHeight() * 1.3; // slightly taller than viewport for overlap

    // Pre-compute cluster world-Y centers
    const clusterCenters = sectionOffsets.map(
      (offset) => -(offset ?? 0) * PARTICLE_CONFIG.scrollFactor
    );

    for (let i = 0; i < count; i++) {
      // Determine which cluster this particle belongs to
      const clusterIndex = Math.min(Math.floor(i / perCluster), numClusters - 1);
      const clusterWorldY = clusterCenters[clusterIndex];

      const x = (Math.random() - 0.5) * PARTICLE_CONFIG.clusterSpreadX;
      const y = clusterWorldY + (Math.random() - 0.5) * clusterHeight;
      const z = (Math.random() - 0.5) * PARTICLE_CONFIG.clusterSpreadZ;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Distance from camera position when viewing THIS cluster's section
      // Camera will be at (0, clusterWorldY, cameraZ) when this hero is in view
      const dy = y - clusterWorldY;
      dist[i] = Math.sqrt(x * x + dy * dy + (z - camZ) * (z - camZ));

      const c = pickColor();
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      offsets[i] = Math.random() * Math.PI * 2;
    }
    return { positions: pos, distances: dist, colors: col, twinkleOffsets: offsets, scales: scl };
  }, [sectionOffsets]);

  // Stable key derived from offsets — forces full geometry recreation when layout changes
  const offsetsKey = sectionOffsets.join(',');

  useFrame(({ camera }, delta) => {
    elapsed.current += delta;

    const target = -(scrollRef.current * PARTICLE_CONFIG.scrollFactor);
    camera.position.y += (target - camera.position.y) * Math.min(delta * PARTICLE_CONFIG.scrollSmoothing, 1);

    // Spawn-in: expand reveal radius over time
    const progress = Math.min(elapsed.current / PARTICLE_CONFIG.spawnDuration, 1);
    const revealRadius = progress * PARTICLE_CONFIG.spawnMaxRadius;

    const geom = mesh.current?.geometry;
    if (geom) {
      let needsUpdate = false;
      for (let i = 0; i < PARTICLE_CONFIG.count; i++) {
        if (scales[i] < 1) {
          const t = distances[i] <= revealRadius
            ? Math.min((revealRadius - distances[i]) / 2, 1)
            : 0;
          scales[i] = t;
          needsUpdate = true;
        }
      }
      const scaleAttr = geom.getAttribute('aScale');
      if (scaleAttr && needsUpdate) {
        (scaleAttr as THREE.BufferAttribute).needsUpdate = true;
      }
    }
  });

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uOpacity: { value: PARTICLE_CONFIG.opacity },
        uSize: { value: PARTICLE_CONFIG.size },
        uMap: { value: circleTexture },
        uTime: { value: 0 },
        uTwinkleSpeed: { value: PARTICLE_CONFIG.twinkleSpeed },
        uTwinkleAmount: { value: PARTICLE_CONFIG.twinkleAmount },
        fogColor: { value: new THREE.Color(PARTICLE_CONFIG.fogColor) },
        fogNear: { value: PARTICLE_CONFIG.fogNear },
        fogFar: { value: PARTICLE_CONFIG.fogFar },
        uNearFade: { value: PARTICLE_CONFIG.nearFade },
        uNearFadeWidth: { value: PARTICLE_CONFIG.nearFadeWidth },
      },
      vertexShader: `
        attribute float aScale;
        attribute vec3 aColor;
        attribute float aTwinkleOffset;
        varying float vScale;
        varying float vFogDepth;
        varying vec3 vColor;
        varying float vTwinkle;
        uniform float uSize;
        uniform float uTime;
        uniform float uTwinkleSpeed;
        uniform float uTwinkleAmount;
        void main() {
          vScale = aScale;
          vColor = aColor;
          float twinkle = 1.0 - uTwinkleAmount * 0.5 + uTwinkleAmount * 0.5 * sin(uTime * uTwinkleSpeed * 6.2832 + aTwinkleOffset);
          vTwinkle = twinkle;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vFogDepth = -mvPosition.z;
          gl_PointSize = uSize * aScale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        uniform sampler2D uMap;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        uniform float uNearFade;
        uniform float uNearFadeWidth;
        varying float vScale;
        varying float vFogDepth;
        varying vec3 vColor;
        varying float vTwinkle;
        void main() {
          if (vScale <= 0.0) discard;
          vec4 texColor = texture2D(uMap, gl_PointCoord);
          if (texColor.a < 0.1) discard;
          float nearFactor = smoothstep(uNearFade, uNearFade + uNearFadeWidth, vFogDepth);
          float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
          vec3 finalColor = mix(vColor * vTwinkle, fogColor, fogFactor);
          float finalAlpha = uOpacity * vScale * nearFactor;
          if (finalAlpha <= 0.0) discard;
          gl_FragColor = vec4(finalColor, finalAlpha * texColor.a);
        }
      `,
      transparent: true,
      depthWrite: false,
    });
  }, [circleTexture]);

  useFrame(() => {
    shaderMaterial.uniforms.uTime.value = elapsed.current;
  });

  return (
    <points ref={mesh} material={shaderMaterial} key={offsetsKey}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
        <bufferAttribute attach="attributes-aTwinkleOffset" args={[twinkleOffsets, 1]} />
      </bufferGeometry>
    </points>
  );
}

interface ParticleFieldProps {
  scrollY?: number;
  sectionOffsets?: number[];
}

export default function ParticleField({ scrollY = 0, sectionOffsets = [0] }: ParticleFieldProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, PARTICLE_CONFIG.cameraZ], fov: PARTICLE_CONFIG.fov }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true }}
      >
        <Particles scrollY={scrollY} sectionOffsets={sectionOffsets} />
      </Canvas>
    </div>
  );
}
