'use client'
import { useState, useEffect } from 'react'

const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640) // Tailwind 'sm' breakpoint is 640px
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return isSmallScreen
}

export default useIsSmallScreen
