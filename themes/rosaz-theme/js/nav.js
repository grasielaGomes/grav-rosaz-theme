// Mobile navigation toggle (simple dropdown)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-nav-toggle]')
  const panel = document.querySelector('[data-nav-panel]')

  if (!toggle || !panel) return

  const openIcon = toggle.querySelector('[data-icon-open]')
  const closeIcon = toggle.querySelector('[data-icon-close]')

  const setOpenState = (isOpen) => {
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
    const link = event.target.closest('a')
    if (link) {
      isOpen = false
      setOpenState(false)
    }
  })
})

// Desktop dropdown: highlight path in cascading menu
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav-main')
  if (!nav) return

  const PATH_BG = '#f97316' // Tailwind orange-500
  const PATH_TEXT = '#ffffff' // white

  const clearPath = () => {
    // Clear dropdown links
    const dropdownLinks = nav.querySelectorAll('[data-nav-link="dropdown"]')
    dropdownLinks.forEach((el) => {
      el.style.backgroundColor = ''
      el.style.color = ''
    })

    // Clear root nav links (top-level menu)
    const rootLinks = nav.querySelectorAll('.nav-link')
    rootLinks.forEach((el) => {
      el.style.color = ''
      el.style.borderBottomColor = ''
    })
  }

  const findParentDropdownLink = (link) => {
    // Find the closest dropdown panel that contains this link
    const panel = link.closest('[data-nav-subpanel]')
    if (!panel) return null

    // Parent <li> of the panel, which contains the parent link
    const parentLi = panel.parentElement
    if (!parentLi) return null

    return parentLi.querySelector('[data-nav-link="dropdown"]')
  }

  const updatePath = (leafLink) => {
    clearPath()

    // 1) Highlight dropdown chain (leaf -> parents dentro do dropdown)
    let current = leafLink
    while (current) {
      current.style.backgroundColor = PATH_BG
      current.style.color = PATH_TEXT
      current = findParentDropdownLink(current)
    }

    // 2) Highlight root nav link (item do menu principal)
    const rootLi = leafLink.closest('li.group')
    if (rootLi) {
      const rootLink = rootLi.querySelector('.nav-link')
      if (rootLink) {
        rootLink.style.color = PATH_BG
        rootLink.style.borderBottomColor = PATH_BG
      }
    }
  }

  // When hovering any dropdown link, update the active path
  nav.addEventListener('mouseover', (event) => {
    const link = event.target.closest('[data-nav-link="dropdown"]')
    if (!link) return
    updatePath(link)
  })

  // When leaving the whole nav area, clear the path
  nav.addEventListener('mouseleave', () => {
    clearPath()
  })
})
