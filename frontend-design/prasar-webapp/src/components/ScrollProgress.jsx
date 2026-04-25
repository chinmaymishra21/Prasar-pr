import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollContext } from './ui/smooth-scroll'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const { wrapperRef } = useScrollContext()

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const handleScroll = () => {
      const scrollTop = wrapper.scrollTop
      const scrollHeight = wrapper.scrollHeight - wrapper.clientHeight
      const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setProgress(scrollPercent)
    }

    wrapper.addEventListener('scroll', handleScroll, { passive: true })
    return () => wrapper.removeEventListener('scroll', handleScroll)
  }, [wrapperRef])

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-black-primary to-grey-dark z-50"
      style={{ width: `${progress}%` }}
      transition={{ type: 'tween', duration: 0.3 }}
    />
  )
}
