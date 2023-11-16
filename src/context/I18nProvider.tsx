'use client'

import { EN } from '@/i18n/en'
import { ES } from '@/i18n/es'
import { I18nType } from '@/i18n/types'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type I18nContextType = {
    T: I18nType,
    handleI18n: () => void
}

const i18nContext = createContext<I18nContextType | null>(null)

export const useI18nContext = () => {
  const context = useContext(i18nContext)
  if (!context) throw new Error('Utilizar el provider')
  return context
}

interface Props {
    children: ReactNode
}

const I18nProvider = ({ children }: Props) => {
  const [i18n, setI18n] = useState(() => {
    const es = localStorage.getItem('i18n')
    return es === 'es'
  })
  const [T, setT] = useState<I18nType>(ES)

  const handleI18n = () => {
    setI18n(!i18n)
  }

  useEffect(() => {
    if (i18n) {
      setT(ES)
      localStorage.setItem('i18n', 'es')
    } else {
      setT(EN)
      localStorage.setItem('i18n', 'en')
    }
  }, [i18n])

  return (
    <i18nContext.Provider value={{ T, handleI18n }}>
      {children}
    </i18nContext.Provider>
  )
}

export default I18nProvider
