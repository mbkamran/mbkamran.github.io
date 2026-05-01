import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    let observer

    // Small delay lets React finish rendering the new route's DOM
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section')

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
      )

      sections.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
        observer.observe(el)
      })
    }, 80)

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
    }
  }, [pathname])
}
