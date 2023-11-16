'use client'

import { COLOR1 } from '@/components/Header/domain/consts'
import { ReactNode, createContext, useContext, useState } from 'react'

type ColorType = {
  bg: string,
  text: string,
  shadow: string,
  border: string
}

type ColorContextType = {
    color: ColorType,
    handleColor: (nameColor: ColorType) => void
}

const changeColorContext = createContext<ColorContextType | null>(null)

export const useChangeColorContext = () => {
  const context = useContext(changeColorContext)
  if (!context) throw new Error('Utilizar Provider')
  return context
}

interface Props {
    children: ReactNode
}

const ChangeColorProvider = ({ children }: Props) => {
  const [color, setColor] = useState<ColorType>(() => {
    const color = localStorage.getItem('color')

    return color
      ? JSON.parse(color)
      : COLOR1
  })

  const handleColor = (nameColor: ColorType) => {
    localStorage.setItem('color', JSON.stringify(nameColor))
    setColor(prev => prev === nameColor ? prev : nameColor)
  }

  return (
    <changeColorContext.Provider value={{ color, handleColor }}>
      {children}
    </changeColorContext.Provider>
  )
}

export default ChangeColorProvider
