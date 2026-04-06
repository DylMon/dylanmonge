import type * as THREE from 'three';

// Shared ref so App.tsx can push camera position directly during iOS momentum scroll
// without waiting for R3F's useFrame (which is paused when iOS suspends rAF).
export const particleCameraRef: { current: THREE.Camera | null } = { current: null };

// Must stay in sync with PARTICLE_CONFIG.scrollFactor in ParticleField.tsx
export const SCROLL_FACTOR = 0.003;
