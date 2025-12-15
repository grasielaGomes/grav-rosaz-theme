// Hero carousel (fade between slides)
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('[data-hero-carousel]')
  if (!carousels.length) return

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll('[data-hero-slide]')
    if (!slides.length) return

    const dotsContainer =
      carousel.parentElement.querySelector('[data-hero-dots]')
    const dots = dotsContainer
      ? dotsContainer.querySelectorAll('[data-hero-dot]')
      : []

    let currentIndex = 0
    let timerId = null
    const INTERVAL_MS = 8000

    const setActiveSlide = (index) => {
      slides.forEach((slide, i) => {
        const isActive = i === index
        slide.style.opacity = isActive ? '1' : '0'
        slide.style.pointerEvents = isActive ? 'auto' : 'none'
      })

      if (dots.length) {
        dots.forEach((dot, i) => {
          if (i === index) {
            dot.classList.remove('bg-neutral-300')
            dot.classList.add('bg-orange-500')
          } else {
            dot.classList.remove('bg-orange-500')
            dot.classList.add('bg-neutral-300')
          }
        })
      }

      currentIndex = index
    }

    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % slides.length
      setActiveSlide(nextIndex)
    }

    const startAutoPlay = () => {
      if (timerId) window.clearInterval(timerId)
      timerId = window.setInterval(nextSlide, INTERVAL_MS)
    }

    const stopAutoPlay = () => {
      if (timerId) window.clearInterval(timerId)
      timerId = null
    }

    // Init
    setActiveSlide(0)
    startAutoPlay()

    // Dots click
    if (dots.length) {
      dots.forEach((dot) => {
        dot.addEventListener('click', () => {
          const index = Number(dot.dataset.heroDot || '0')
          setActiveSlide(index)
          startAutoPlay()
        })
      })
    }

    // Optional: pause on hover (desktop)
    carousel.addEventListener('mouseenter', stopAutoPlay)
    carousel.addEventListener('mouseleave', startAutoPlay)
  })
})
