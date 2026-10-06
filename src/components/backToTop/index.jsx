import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import styles from './styles.module.css'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 50)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const scrollToTop = () => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    window.scrollTo({ top: 0, behavior: motion })
  }

  if (!visible) return null

  return (
    <button className={styles.backToTop} type="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top">
      <FiArrowUp aria-hidden="true" />
    </button>
  )
}

export default BackToTop
