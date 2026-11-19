<template>
  <div
    v-if="enabled"
    ref="glow"
    class="pointer-events-none fixed top-0 left-0 z-[45] w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2
           rounded-full opacity-0 transition-opacity duration-500 mix-blend-screen"
    style="background: radial-gradient(circle, rgba(161,193,129,0.14) 0%, rgba(250,240,202,0.08) 35%, transparent 70%);"
  ></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const glow = ref(null)
const enabled = ref(false)

let raf = 0
let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0

const onMove = (event) => {
  targetX = event.clientX
  targetY = event.clientY
  if (glow.value) glow.value.style.opacity = '1'
}

const tick = () => {
  currentX += (targetX - currentX) * 0.12
  currentY += (targetY - currentY) * 0.12
  if (glow.value) {
    glow.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
  }
  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  if (typeof window === 'undefined') return
  enabled.value = window.matchMedia?.('(pointer: fine)').matches && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (!enabled.value) return
  window.addEventListener('mousemove', onMove, { passive: true })
  raf = requestAnimationFrame(tick)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  cancelAnimationFrame(raf)
})
</script>
