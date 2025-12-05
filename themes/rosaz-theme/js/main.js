// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-nav-toggle]')
  const panel = document.querySelector('[data-nav-panel]')

  if (!toggle || !panel) return

  const openIcon = toggle.querySelector('[data-icon-open]')
  const closeIcon = toggle.querySelector('[data-icon-close]')

  const setOpenState = (isOpen) => {
    // Toggle panel visibility with animation
    if (isOpen) {
      panel.classList.remove(
        'opacity-0',
        '-translate-y-2',
        'pointer-events-none'
      )
      panel.classList.add('opacity-100', 'translate-y-0')
      toggle.setAttribute('aria-expanded', 'true')
    } else {
      panel.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none')
      panel.classList.remove('opacity-100', 'translate-y-0')
      toggle.setAttribute('aria-expanded', 'false')
    }

    // Toggle icons
    if (openIcon && closeIcon) {
      if (isOpen) {
        openIcon.classList.add('hidden')
        closeIcon.classList.remove('hidden')
      } else {
        openIcon.classList.remove('hidden')
        closeIcon.classList.add('hidden')
      }
    }
  }

  let isOpen = false

  toggle.addEventListener('click', () => {
    isOpen = !isOpen
    setOpenState(isOpen)
  })

  // Close menu when clicking a link inside the panel
  panel.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
      isOpen = false
      setOpenState(false)
    }
  })
})
