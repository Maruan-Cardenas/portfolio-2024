import { useEffect, useState } from 'react'

export const useChangeTheme = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const handleChangeTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
      setDarkMode(true)
      localStorage.setItem('theme', 'dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
      setDarkMode(false)
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return { handleChangeTheme, darkMode }
}
