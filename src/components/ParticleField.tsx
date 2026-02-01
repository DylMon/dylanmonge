import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  return new THREE.CanvasTexture(canvas);
}

// ============================================================
// PARTICLE SYSTEM CONTROLS
// Modify these values to customize the particle field.
// ============================================================

const PARTICLE_CONFIG = {
  // --- Density & Count ---
  count: 1000,                // Total number of particles

  // --- Spread (how far particles distribute in space) ---
  spreadX: 12,              // Horizontal spread
  spreadY: 12,              // Vertical spread
  spreadZ: 12,              // Depth spread (front-to-back)

  // --- Appearance ---
  color: '#ffffff',          // Particle color (hex)
  size: 0.03,               // Particle size (world units)
  opacity: 0.8,             // Particle opacity (0–1)
  sizeAttenuation: true,    // Particles shrink with distance (depth of field feel)

  // --- Rotation Speed (ambient drift) ---
  rotationSpeedX: 0.005,     // Rotation speed around X axis (rad/s)
  rotationSpeedY: 0.005,     // Rotation speed around Y axis (rad/s)

  // --- Scroll Panning ---
  scrollFactor: 0.001,      // How much camera pans per pixel of scroll
  scrollSmoothing: 2,       // Lerp speed for scroll smoothing (higher = snappier)

  // --- Camera ---
  cameraZ: 1,               // Camera distance from origin
  fov: 100,                  // Camera field of view (degrees, lower = flatter/zoomed)

  // --- Fog (depth fade) ---
  fogColor: '#fffff6',       // Fog color (particles darken to this at distance)
  fogNear: 1,                // Distance where fog begins
  fogFar: 7,                // Distance where fog fully obscures particles

  // --- Spawn-in Effect ---
  spawnDuration: 2,          // Total time (seconds) for all particles to appear
  spawnMaxRadius: 15,        // Max distance from camera that the reveal wave reaches
};

// ============================================================

interface ParticlesProps {
  scrollY: number;
}

function Particles({ scrollY }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  const scrollRef = useRef(scrollY);
  scrollRef.current = scrollY;
  const elapsed = useRef(0);

  const circleTexture = useMemo(() => createCircleTexture(), []);

  const { positions, distances } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_CONFIG.count * 3);
    const dist = new Float32Array(PARTICLE_CONFIG.count);
    const camZ = PARTICLE_CONFIG.cameraZ;
    for (let i = 0; i < PARTICLE_CONFIG.count; i++) {
      const x = (Math.random() - 0.5) * PARTICLE_CONFIG.spreadX;
      const y = (Math.random() - 0.5) * PARTICLE_CONFIG.spreadY;
      const z = (Math.random() - 0.5) * PARTICLE_CONFIG.spreadZ;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      // Distance from camera position (0, 0, cameraZ) along the ray into the scene
      dist[i] = Math.sqrt(x * x + y * y + (z - camZ) * (z - camZ));
    }
    return { positions: pos, distances: dist };
  }, []);

  const scales = useMemo(() => new Float32Array(PARTICLE_CONFIG.count).fill(0), []);

  useFrame(({ camera }, delta) => {
    elapsed.current += delta;

    if (mesh.current) {
      mesh.current.rotation.y += delta * PARTICLE_CONFIG.rotationSpeedY;
      mesh.current.rotation.x += delta * PARTICLE_CONFIG.rotationSpeedX;
    }

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
        uColor: { value: new THREE.Color(PARTICLE_CONFIG.color) },
        uOpacity: { value: PARTICLE_CONFIG.opacity },
        uSize: { value: PARTICLE_CONFIG.size },
        uMap: { value: circleTexture },
        fogColor: { value: new THREE.Color(PARTICLE_CONFIG.fogColor) },
        fogNear: { value: PARTICLE_CONFIG.fogNear },
        fogFar: { value: PARTICLE_CONFIG.fogFar },
      },
      vertexShader: `
        attribute float aScale;
        varying float vScale;
        varying float vFogDepth;
        uniform float uSize;
        void main() {
          vScale = aScale;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vFogDepth = -mvPosition.z;
          gl_PointSize = uSize * aScale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform sampler2D uMap;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        varying float vScale;
        varying float vFogDepth;
        void main() {
          if (vScale <= 0.0) discard;
          vec4 texColor = texture2D(uMap, gl_PointCoord);
          if (texColor.a < 0.1) discard;
          float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
          vec3 finalColor = mix(uColor, fogColor, fogFactor);
          float finalAlpha = uOpacity * vScale;
          gl_FragColor = vec4(finalColor, finalAlpha * texColor.a);
        }
      `,
      transparent: true,
      depthWrite: false,
    });
  }, [circleTexture]);

  return (
    <points ref={mesh} material={shaderMaterial}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aScale"
          args={[scales, 1]}
        />
      </bufferGeometry>
    </points>
  );
}

export default function ParticleField({ scrollY = 0 }: { scrollY?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, PARTICLE_CONFIG.cameraZ], fov: PARTICLE_CONFIG.fov }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true }}
      >
        <Particles scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
