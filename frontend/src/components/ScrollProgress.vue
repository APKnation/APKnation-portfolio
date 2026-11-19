<template>
  <div class="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
    <div
      class="h-full origin-left bg-gradient-to-r from-secondary-400 via-cream-100 to-secondary-400
             shadow-[0_0_12px_rgba(161,193,129,0.7)]"
      :style="{ width: `${progress}%`, transition: 'width 120ms linear' }"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)

const update = () => {
  const doc = document.documentElement
  const max = doc.scrollHeight - doc.clientHeight
  progress.value = max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
})

onUnmounted(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})
</script>
