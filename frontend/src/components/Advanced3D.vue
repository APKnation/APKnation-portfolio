<template>
  <div class="advanced-3d-container">
    <!-- 3D Scene Container -->
    <div class="scene-3d">
      <!-- Rotating 3D Cube Grid -->
      <div class="cube-grid">
        <div
          v-for="(cube, index) in cubes"
          :key="cube.id"
          class="cube-3d"
          :style="{
            left: cube.x + '%',
            top: cube.y + '%',
            animationDelay: cube.delay + 's',
            animationDuration: cube.duration + 's',
            transform: `translateZ(${cube.z}px) rotateX(${cube.rotateX}deg) rotateY(${cube.rotateY}deg) rotateZ(${cube.rotateZ}deg)`
          }"
        >
          <div class="cube-face front"></div>
          <div class="cube-face back"></div>
          <div class="cube-face right"></div>
          <div class="cube-face left"></div>
          <div class="cube-face top"></div>
          <div class="cube-face bottom"></div>
        </div>
      </div>

      <!-- Floating 3D Pyramids -->
      <div class="pyramid-grid">
        <div
          v-for="(pyramid, index) in pyramids"
          :key="pyramid.id"
          class="pyramid-3d"
          :style="{
            left: pyramid.x + '%',
            top: pyramid.y + '%',
            animationDelay: pyramid.delay + 's',
            animationDuration: pyramid.duration + 's',
            transform: `translateZ(${pyramid.z}px) rotateX(${pyramid.rotateX}deg) rotateY(${pyramid.rotateY}deg)`
          }"
        >
          <div class="pyramid-face"></div>
        </div>
      </div>

      <!-- 3D Particles -->
      <div class="particles-3d">
        <div
          v-for="(particle, index) in particles"
          :key="particle.id"
          class="particle-3d"
          :style="{
            left: particle.x + '%',
            top: particle.y + '%',
            width: particle.size + 'px',
            height: particle.size + 'px',
            animationDelay: particle.delay + 's',
            animationDuration: particle.duration + 's',
            transform: `translateZ(${particle.z}px)`
          }"
        >
          <div class="particle-core"></div>
          <div class="particle-glow"></div>
        </div>
      </div>

      <!-- 3D Light Beams -->
      <div class="light-beams">
        <div
          v-for="(beam, index) in lightBeams"
          :key="beam.id"
          class="light-beam"
          :style="{
            left: beam.x + '%',
            top: beam.y + '%',
            width: beam.width + 'px',
            height: beam.height + 'px',
            animationDelay: beam.delay + 's',
            animationDuration: beam.duration + 's',
            transform: `rotate(${beam.rotation}deg) translateZ(${beam.z}px)`
          }"
        >
          <div class="beam-core"></div>
          <div class="beam-glow"></div>
          <div class="beam-particles">
            <div class="particle" v-for="i in 5" :key="i" :style="{ animationDelay: i * 0.2 + 's' }"></div>
          </div>
        </div>
      </div>

      <!-- 3D Code Matrix -->
      <div class="code-matrix">
        <div
          v-for="(code, index) in codeMatrix"
          :key="code.id"
          class="code-3d"
          :style="{
            left: code.x + '%',
            top: code.y + '%',
            animationDelay: code.delay + 's',
            animationDuration: code.duration + 's',
            transform: `translateZ(${code.z}px) rotateX(${code.rotateX}deg)`
          }"
        >
          {{ code.text }}
        </div>
      </div>
    </div>

    <!-- Perspective Controls -->
    <div class="perspective-controls">
      <div class="control-panel">
        <div class="axis-x"></div>
        <div class="axis-y"></div>
        <div class="axis-z"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cubes = ref([])
const pyramids = ref([])
const particles = ref([])
const lightBeams = ref([])
const codeMatrix = ref([])

onMounted(() => {
  generateCubes()
  generatePyramids()
  generateParticles()
  generateLightBeams()
  generateCodeMatrix()
})

const generateCubes = () => {
  const cubeCount = 12
  const generatedCubes = []
  
  for (let i = 0; i < cubeCount; i++) {
    generatedCubes.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 200 - 100,
      size: Math.random() * 40 + 20,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      rotateX: Math.random() * 360,
      rotateY: Math.random() * 360,
      rotateZ: Math.random() * 360,
      color: `hsl(${Math.random() * 60 + 180}, 70%, 50%)`
    })
  }
  
  cubes.value = generatedCubes
}

const generatePyramids = () => {
  const pyramidCount = 8
  const generatedPyramids = []
  
  for (let i = 0; i < pyramidCount; i++) {
    generatedPyramids.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 200 - 100,
      size: Math.random() * 30 + 15,
      delay: Math.random() * 6,
      duration: Math.random() * 12 + 18,
      rotateX: Math.random() * 180,
      rotateY: Math.random() * 360,
      color: `hsl(${Math.random() * 60 + 280}, 70%, 50%)`
    })
  }
  
  pyramids.value = generatedPyramids
}

const generateParticles = () => {
  const particleCount = 30
  const generatedParticles = []
  
  for (let i = 0; i < particleCount; i++) {
    generatedParticles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 300 - 150,
      size: Math.random() * 8 + 4,
      delay: Math.random() * 3,
      duration: Math.random() * 8 + 12,
      color: `hsl(${Math.random() * 60 + 160}, 80%, 60%)`
    })
  }
  
  particles.value = generatedParticles
}

const generateLightBeams = () => {
  const beamCount = 6
  const generatedBeams = []
  
  for (let i = 0; i < beamCount; i++) {
    generatedBeams.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100 - 50,
      width: Math.random() * 100 + 50,
      height: Math.random() * 200 + 100,
      delay: Math.random() * 4,
      duration: Math.random() * 10 + 20,
      rotation: Math.random() * 360,
      color: `hsl(${Math.random() * 60 + 200}, 100%, 50%)`
    })
  }
  
  lightBeams.value = generatedBeams
}

const generateCodeMatrix = () => {
  const codeCount = 20
  const symbols = ['</>', '{}', '[]', '()', '//', '/*', '*/', '=>', '&&', '||', '++', '--', '==', '!=', '<=', '>=', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<', '>>']
  const generatedCode = []
  
  for (let i = 0; i < codeCount; i++) {
    generatedCode.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 150 - 75,
      text: symbols[Math.floor(Math.random() * symbols.length)],
      delay: Math.random() * 2,
      duration: Math.random() * 6 + 10,
      rotateX: Math.random() * 90,
      size: Math.random() * 12 + 8
    })
  }
  
  codeMatrix.value = generatedCode
}
</script>

<style scoped>
.advanced-3d-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  perspective: 1200px;
  transform-style: preserve-3d;
}

.scene-3d {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: scene-rotate 30s infinite linear;
}

/* 3D Cubes */
.cube-3d {
  position: absolute;
  width: var(--size);
  height: var(--size);
  transform-style: preserve-3d;
  animation: cube-float var(--animation-duration) infinite ease-in-out;
  opacity: 0.8;
}

.cube-face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(0, 100, 255, 0.2));
  border: 1px solid rgba(0, 255, 255, 0.5);
  backdrop-filter: blur(10px);
}

.cube-face.front { transform: translateZ(calc(var(--size) / 2)); }
.cube-face.back { transform: rotateY(180deg) translateZ(calc(var(--size) / 2)); }
.cube-face.right { transform: rotateY(90deg) translateZ(calc(var(--size) / 2)); }
.cube-face.left { transform: rotateY(-90deg) translateZ(calc(var(--size) / 2)); }
.cube-face.top { transform: rotateX(90deg) translateZ(calc(var(--size) / 2)); }
.cube-face.bottom { transform: rotateX(-90deg) translateZ(calc(var(--size) / 2)); }

/* 3D Pyramids */
.pyramid-3d {
  position: absolute;
  width: 0;
  height: 0;
  border-left: calc(var(--size) / 2) solid transparent;
  border-right: calc(var(--size) / 2) solid transparent;
  border-bottom: var(--size) solid rgba(255, 0, 255, 0.3);
  transform-style: preserve-3d;
  animation: pyramid-float var(--animation-duration) infinite linear;
  opacity: 0.7;
}

.pyramid-face {
  position: absolute;
  width: 0;
  height: 0;
  border-left: calc(var(--size) / 2) solid transparent;
  border-right: calc(var(--size) / 2) solid transparent;
  border-bottom: var(--size) solid rgba(255, 0, 255, 0.5);
  transform: translateZ(calc(var(--size) / 3));
}

/* 3D Particles */
.particle-3d {
  position: absolute;
  transform-style: preserve-3d;
  animation: particle-orbit var(--animation-duration) infinite linear;
}

.particle-core {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--color), transparent);
  border-radius: 50%;
}

.particle-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--color), transparent);
  border-radius: 50%;
  animation: particle-pulse 2s infinite;
}

/* 3D Light Beams */
.light-beam {
  position: absolute;
  background: linear-gradient(90deg, transparent, var(--color), transparent);
  transform-style: preserve-3d;
  animation: beam-sweep var(--animation-duration) infinite linear;
  opacity: 0.3;
  filter: blur(20px);
}

.beam-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--color), transparent);
  transform: translate(-50%, -50%);
}

.beam-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--color), transparent);
  filter: blur(10px);
  opacity: 0.6;
}

.beam-particles {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  top: 0;
  width: 2px;
  height: 2px;
  background: var(--color);
  border-radius: 50%;
  animation: particle-flow 2s infinite linear;
}

/* 3D Code Matrix */
.code-3d {
  position: absolute;
  color: var(--color);
  font-family: 'Courier New', monospace;
  font-weight: bold;
  font-size: var(--size);
  text-shadow: 0 0 20px currentColor;
  transform-style: preserve-3d;
  animation: code-float var(--animation-duration) infinite ease-in-out;
  opacity: 0.9;
}

/* Animations */
@keyframes scene-rotate {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

@keyframes cube-float {
  0%, 100% {
    transform: translateZ(var(--z)) translateX(0) translateY(0) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotateZ(var(--rotateZ));
  }
  25% {
    transform: translateZ(calc(var(--z) + 50px)) translateX(30px) translateY(-20px) rotateX(calc(var(--rotateX) + 45deg)) rotateY(calc(var(--rotateY) + 90deg)) rotateZ(calc(var(--rotateZ) + 15deg));
  }
  50% {
    transform: translateZ(calc(var(--z) - 30px)) translateX(-15px) translateY(20px) rotateX(calc(var(--rotateX) + 90deg)) rotateY(calc(var(--rotateY) + 180deg)) rotateZ(calc(var(--rotateZ) + 30deg));
  }
  75% {
    transform: translateZ(calc(var(--z) + 20px)) translateX(10px) translateY(-10px) rotateX(calc(var(--rotateX) + 135deg)) rotateY(calc(var(--rotateY) + 270deg)) rotateZ(calc(var(--rotateZ) + 45deg));
  }
}

@keyframes pyramid-float {
  0% { transform: translateZ(var(--z)) rotateX(var(--rotateX)) rotateY(0deg); }
  25% { transform: translateZ(calc(var(--z) + 40px)) rotateX(calc(var(--rotateX) + 15deg)) rotateY(90deg); }
  50% { transform: translateZ(calc(var(--z) - 20px)) rotateX(calc(var(--rotateX) + 30deg)) rotateY(180deg); }
  75% { transform: translateZ(calc(var(--z) + 30px)) rotateX(calc(var(--rotateX) + 45deg)) rotateY(270deg); }
  100% { transform: translateZ(var(--z)) rotateX(var(--rotateX)) rotateY(360deg); }
}

@keyframes particle-orbit {
  0% { transform: translateZ(var(--z)) rotate(0deg) translateX(50px); }
  100% { transform: translateZ(var(--z)) rotate(360deg) translateX(50px); }
}

@keyframes particle-pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.5); }
}

@keyframes beam-sweep {
  0% { transform: rotate(var(--rotation)) translateZ(var(--z)) scaleX(0); }
  50% { transform: rotate(calc(var(--rotation) + 180deg)) translateZ(var(--z)) scaleX(1); }
  100% { transform: rotate(calc(var(--rotation) + 360deg)) translateZ(var(--z)) scaleX(0); }
}

@keyframes particle-flow {
  0% { left: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { left: 100%; opacity: 0; }
}

@keyframes code-float {
  0%, 100% {
    transform: translateZ(var(--z)) translateY(0) rotateX(var(--rotateX));
    opacity: 0.9;
  }
  25% {
    transform: translateZ(calc(var(--z) + 20px)) translateY(-20px) rotateX(calc(var(--rotateX) + 15deg));
    opacity: 1;
  }
  50% {
    transform: translateZ(calc(var(--z) - 10px)) translateY(10px) rotateX(calc(var(--rotateX) + 30deg));
    opacity: 0.8;
  }
  75% {
    transform: translateZ(calc(var(--z) + 15px)) translateY(-15px) rotateX(calc(var(--rotateX) + 45deg));
    opacity: 0.95;
  }
}

/* Perspective Controls */
.perspective-controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  animation: control-rotate 10s infinite linear;
}

.control-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.axis-x, .axis-y, .axis-z {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
}

.axis-x { transform: rotateY(90deg); }
.axis-y { transform: rotateX(90deg); }
.axis-z { transform: none; }

@keyframes control-rotate {
  0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .advanced-3d-container {
    perspective: 800px;
  }
  
  .cube-3d, .pyramid-3d, .particle-3d, .code-3d {
    opacity: 0.5;
  }
  
  .light-beam {
    opacity: 0.2;
  }
}
</style>
