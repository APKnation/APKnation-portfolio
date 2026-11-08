<template>
  <div class="simple-animation-container">
    <!-- Random Moving Elements -->
    <div class="random-elements">
      <!-- Floating Light Dots -->
      <div
        v-for="(dot, index) in lightDots"
        :key="dot.id"
        class="light-dot"
        :style="{
          left: dot.x + '%',
          top: dot.y + '%',
          width: dot.size + 'px',
          height: dot.size + 'px',
          animationDelay: dot.delay + 's',
          animationDuration: dot.duration + 's',
          background: dot.color
        }"
      ></div>

      <!-- Moving Lines -->
      <div
        v-for="(line, index) in movingLines"
        :key="line.id"
        class="moving-line"
        :style="{
          left: line.x + '%',
          top: line.y + '%',
          width: line.length + 'px',
          height: '2px',
          animationDelay: line.delay + 's',
          animationDuration: line.duration + 's',
          transform: `rotate(${line.angle}deg)`,
          background: line.color
        }"
      ></div>

      <!-- Floating Circles -->
      <div
        v-for="(circle, index) in floatingCircles"
        :key="circle.id"
        class="floating-circle"
        :style="{
          left: circle.x + '%',
          top: circle.y + '%',
          width: circle.size + 'px',
          height: circle.size + 'px',
          animationDelay: circle.delay + 's',
          animationDuration: circle.duration + 's',
          borderColor: circle.color
        }"
      ></div>

      <!-- Random Particles -->
      <div
        v-for="(particle, index) in randomParticles"
        :key="particle.id"
        class="random-particle"
        :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          width: particle.size + 'px',
          height: particle.size + 'px',
          animationDelay: particle.delay + 's',
          animationDuration: particle.duration + 's',
          background: particle.color
        }"
      ></div>

      <!-- Moving Triangles -->
      <div
        v-for="(triangle, index) in movingTriangles"
        :key="triangle.id"
        class="moving-triangle"
        :style="{
          left: triangle.x + '%',
          top: triangle.y + '%',
          width: triangle.size + 'px',
          height: triangle.size + 'px',
          animationDelay: triangle.delay + 's',
          animationDuration: triangle.duration + 's',
          borderBottomColor: triangle.color
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const lightDots = ref([])
const movingLines = ref([])
const floatingCircles = ref([])
const randomParticles = ref([])
const movingTriangles = ref([])

onMounted(() => {
  generateLightDots()
  generateMovingLines()
  generateFloatingCircles()
  generateRandomParticles()
  generateMovingTriangles()
})

const generateLightDots = () => {
  const dotCount = 8
  const colors = ['#61dafb', '#a855f7', '#06b6d4', '#10b981', '#6366f1']
  const generatedDots = []
  
  for (let i = 0; i < dotCount; i++) {
    generatedDots.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4,
      delay: Math.random() * 3,
      duration: Math.random() * 8 + 10,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }
  
  lightDots.value = generatedDots
}

const generateMovingLines = () => {
  const lineCount = 5
  const colors = ['#61dafb', '#a855f7', '#06b6d4', '#10b981', '#6366f1']
  const generatedLines = []
  
  for (let i = 0; i < lineCount; i++) {
    generatedLines.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      length: Math.random() * 80 + 20,
      angle: Math.random() * 360,
      delay: Math.random() * 2,
      duration: Math.random() * 6 + 8,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }
  
  movingLines.value = generatedLines
}

const generateFloatingCircles = () => {
  const circleCount = 6
  const colors = ['#61dafb', '#a855f7', '#06b6d4', '#10b981', '#6366f1']
  const generatedCircles = []
  
  for (let i = 0; i < circleCount; i++) {
    generatedCircles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      delay: Math.random() * 4,
      duration: Math.random() * 10 + 12,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }
  
  floatingCircles.value = generatedCircles
}

const generateRandomParticles = () => {
  const particleCount = 10
  const colors = ['#61dafb', '#a855f7', '#06b6d4', '#10b981', '#6366f1']
  const generatedParticles = []
  
  for (let i = 0; i < particleCount; i++) {
    generatedParticles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 1,
      duration: Math.random() * 4 + 6,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }
  
  randomParticles.value = generatedParticles
}

const generateMovingTriangles = () => {
  const triangleCount = 4
  const colors = ['#61dafb', '#a855f7', '#06b6d4', '#10b981', '#6366f1']
  const generatedTriangles = []
  
  for (let i = 0; i < triangleCount; i++) {
    generatedTriangles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 3,
      duration: Math.random() * 8 + 10,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }
  
  movingTriangles.value = generatedTriangles
}
</script>

<style scoped>
.simple-animation-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.random-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Light Dots */
.light-dot {
  position: absolute;
  border-radius: 50%;
  animation: random-move var(--animation-duration) infinite ease-in-out;
  opacity: 0.6;
  box-shadow: 0 0 10px currentColor;
}

/* Moving Lines */
.moving-line {
  position: absolute;
  animation: random-move var(--animation-duration) infinite ease-in-out;
  opacity: 0.4;
  transform-origin: center;
}

/* Floating Circles */
.floating-circle {
  position: absolute;
  border: 2px solid;
  border-radius: 50%;
  animation: random-float var(--animation-duration) infinite ease-in-out;
  opacity: 0.3;
}

/* Random Particles */
.random-particle {
  position: absolute;
  border-radius: 50%;
  animation: random-drift var(--animation-duration) infinite linear;
  opacity: 0.7;
  box-shadow: 0 0 5px currentColor;
}

/* Moving Triangles */
.moving-triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-left: calc(var(--size) / 2) solid transparent;
  border-right: calc(var(--size) / 2) solid transparent;
  border-top: var(--size) solid;
  border-bottom: none;
  animation: random-rotate var(--animation-duration) infinite linear;
  opacity: 0.5;
}

/* Random Movement Animations */
@keyframes random-move {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  20% {
    transform: translate(50px, -30px) scale(1.2);
    opacity: 0.8;
  }
  40% {
    transform: translate(-40px, 40px) scale(0.8);
    opacity: 0.7;
  }
  60% {
    transform: translate(60px, 20px) scale(1.1);
    opacity: 0.9;
  }
  80% {
    transform: translate(-20px, -50px) scale(0.9);
    opacity: 0.6;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
}

@keyframes random-float {
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 0.3;
  }
  20% {
    transform: translate(-60px, 30px) scale(1.3) rotate(90deg);
    opacity: 0.5;
  }
  40% {
    transform: translate(40px, -60px) scale(0.7) rotate(180deg);
    opacity: 0.4;
  }
  60% {
    transform: translate(-30px, 50px) scale(1.2) rotate(270deg);
    opacity: 0.6;
  }
  80% {
    transform: translate(70px, -20px) scale(0.8) rotate(360deg);
    opacity: 0.3;
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 0.3;
  }
}

@keyframes random-drift {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.7;
  }
  15% {
    transform: translate(80px, -40px) rotate(45deg);
    opacity: 1;
  }
  30% {
    transform: translate(-60px, 60px) rotate(90deg);
    opacity: 0.8;
  }
  45% {
    transform: translate(40px, -80px) rotate(135deg);
    opacity: 0.9;
  }
  60% {
    transform: translate(-80px, 40px) rotate(180deg);
    opacity: 0.6;
  }
  75% {
    transform: translate(60px, 80px) rotate(225deg);
    opacity: 1;
  }
  90% {
    transform: translate(-40px, -60px) rotate(270deg);
    opacity: 0.8;
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
    opacity: 0.7;
  }
}

@keyframes random-rotate {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 0.5;
  }
  20% {
    transform: translate(40px, -30px) rotate(72deg) scale(1.2);
    opacity: 0.7;
  }
  40% {
    transform: translate(-50px, 40px) rotate(144deg) scale(0.8);
    opacity: 0.6;
  }
  60% {
    transform: translate(60px, -20px) rotate(216deg) scale(1.1);
    opacity: 0.8;
  }
  80% {
    transform: translate(-30px, 50px) rotate(288deg) scale(0.9);
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0) rotate(360deg) scale(1);
    opacity: 0.5;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .light-dot, .moving-line, .floating-circle, .random-particle, .moving-triangle {
    opacity: 0.4;
  }
}
</style>
