import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  // Radial gradient: position (0–1) = distance from center, alpha = brightness
  // 0 = dead center (core), 1 = outer edge. Adjust alpha to control glow falloff.
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0,    'rgba(255,255,255,1)');    // Core center — full brightness
  gradient.addColorStop(0.15, 'rgba(255,255,255,1)');  // Inner core edge — still bright
  gradient.addColorStop(0.2, 'rgba(255,255,255,0.4)');  // Core-to-glow transition
  gradient.addColorStop(0.3,  'rgba(255,255,255,0.12)'); // Inner glow
  gradient.addColorStop(0.5,  'rgba(255,255,255,0.04)'); // Mid glow — very faint
  gradient.addColorStop(0.75, 'rgba(255,255,255,0.01)'); // Outer glow — barely visible
  gradient.addColorStop(1,    'rgba(255,255,255,0)');    // Edge — fully transparent
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

// ============================================================
// PARTICLE SYSTEM CONTROLS
// Modify these values to customize the particle field.
// ============================================================

const PARTICLE_CONFIG = {
  // --- Density & Count ---
  count: 20000,                // Total number of particles

  // --- Spread (how far particles distribute in space) ---
  spreadX: 12,              // Horizontal spread
  spreadY: 12,              // Vertical spread
  spreadZ: 12,              // Depth spread (front-to-back)

  // --- Appearance ---
  size: 0.15,               // Particle size (world units, includes glow radius)
  opacity: 0.8,             // Particle opacity (0–1)
  sizeAttenuation: true,    // Particles shrink with distance

  // --- Star Colors (weight = relative probability) ---
  colors: [
    { color: '#ffffff', weight: 0.98 },   // White
    { color: '#faf2b6', weight: 0.01 },   // Warm yellow
    { color: '#ff0000', weight: 0.01 },   // Red/orange
    { color: '#a1d6ff', weight: 0.01 },   // Bright blue
  ],

  // --- Twinkle ---
  twinkleSpeed: 1.25,        // Base oscillation speed
  twinkleAmount: 0.3,      // How much brightness varies (0 = none, 1 = full)

  // --- Rotation Speed (ambient drift) ---
  rotationSpeedX: 0.005,     // Rotation speed around X axis (rad/s)
  rotationSpeedY: 0.005,     // Rotation speed around Y axis (rad/s)

  // --- Scroll Panning ---
  scrollFactor: 0.001,      // How much camera pans per pixel of scroll
  scrollSmoothing: 2,       // Lerp speed for scroll smoothing (higher = snappier)

  // --- Camera ---
  cameraZ: 1,               // Camera distance from origin
  fov: 100,                  // Camera field of view (degrees)

  // --- Near Fade (hide particles too close to camera) ---
  nearFade: 0.75,               // Particles closer than this distance fully disappear
  nearFadeWidth: 0.5,        // Fade-in range beyond nearFade (smooth transition)

  // --- Fog (depth fade) ---
  fogColor: '#060a14',       // Fog color (particles fade to background at distance)
  fogNear: 1,                // Distance where fog begins
  fogFar: 7,                // Distance where fog fully obscures particles

  // --- Spawn-in Effect ---
  spawnDuration: 2.5,          // Total time (seconds) for all particles to appear
  spawnMaxRadius: 15,        // Max distance from camera that the reveal wave reaches
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

interface ParticlesProps {
  scrollY: number;
}

function Particles({ scrollY }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  const scrollRef = useRef(scrollY);
  scrollRef.current = scrollY;
  const elapsed = useRef(0);

  const circleTexture = useMemo(() => createCircleTexture(), []);

  const { positions, distances, colors, twinkleOffsets } = useMemo(() => {
    const count = PARTICLE_CONFIG.count;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const dist = new Float32Array(count);
    const offsets = new Float32Array(count);
    const camZ = PARTICLE_CONFIG.cameraZ;
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * PARTICLE_CONFIG.spreadX;
      const y = (Math.random() - 0.5) * PARTICLE_CONFIG.spreadY;
      const z = (Math.random() - 0.5) * PARTICLE_CONFIG.spreadZ;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      dist[i] = Math.sqrt(x * x + y * y + (z - camZ) * (z - camZ));

      const c = pickColor();
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      offsets[i] = Math.random() * Math.PI * 2;
    }
    return { positions: pos, distances: dist, colors: col, twinkleOffsets: offsets };
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
          // Twinkle: per-particle sine wave with unique offset
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

  // Update uTime uniform each frame
  useFrame(() => {
    shaderMaterial.uniforms.uTime.value = elapsed.current;
  });

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
        <bufferAttribute
          attach="attributes-aColor"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-aTwinkleOffset"
          args={[twinkleOffsets, 1]}
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
