<template>
  <span ref="el">{{ display }}</span>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  value: { type: [String, Number], default: 0 },
  duration: { type: Number, default: 1300 },
})

const el = ref(null)
const display = ref(String(props.value ?? ''))

let observer = null
let raf = 0
let started = false

const parseValue = () => {
  const raw = String(props.value ?? '')
  const match = raw.match(/-?\d+/)
  if (!match) return null
  return {
    target: Number(match[0]),
    prefix: raw.slice(0, match.index),
    suffix: raw.slice(match.index + match[0].length),
  }
}

const animate = () => {
  started = true
  const parsed = parseValue()
  if (!parsed) {
    display.value = String(props.value)
    return
  }
  const { target, prefix, suffix } = parsed
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    display.value = `${prefix}${target}${suffix}`
    return
  }

  const start = performance.now()
  const step = (now) => {
    const t = Math.min(1, (now - start) / props.duration)
    // easeOutExpo
    const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    display.value = `${prefix}${Math.round(target * eased)}${suffix}`
    if (t < 1) raf = requestAnimationFrame(step)
  }
  raf = requestAnimationFrame(step)
}

onMounted(() => {
  if (!el.value || typeof IntersectionObserver === 'undefined') {
    animate()
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        animate()
        observer.disconnect()
      }
    },
    { threshold: 0.4 },
  )
  observer.observe(el.value)
})

watch(
  () => props.value,
  () => {
    if (started) animate()
    else display.value = String(props.value ?? '')
  },
)

onUnmounted(() => {
  observer?.disconnect()
  cancelAnimationFrame(raf)
})
</script>
