/**
 * v-reveal — animates an element into view when it enters the viewport.
 *
 * Usage:
 *   <div v-reveal>...</div>
 *   <div v-reveal="150">...</div>          // 150ms delay
 *   <div v-reveal.left>...</div>           // slide from the left
 *   <div v-reveal.right>...</div>
 *   <div v-reveal.zoom>...</div>
 */
const observers = new WeakMap()

export default {
  mounted(el, binding) {
    el.classList.add('reveal')

    const delay = Number(binding.value) || 0
    el.style.setProperty('--reveal-delay', `${delay}ms`)

    if (binding.modifiers.left) el.classList.add('reveal-left')
    if (binding.modifiers.right) el.classList.add('reveal-right')
    if (binding.modifiers.zoom) el.classList.add('reveal-zoom')

    // Respect users who prefer less motion.
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          el.classList.add('is-visible')
          observer.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    observers.set(el, observer)
  },

  unmounted(el) {
    const observer = observers.get(el)
    if (observer) {
      observer.disconnect()
      observers.delete(el)
    }
  },
}
