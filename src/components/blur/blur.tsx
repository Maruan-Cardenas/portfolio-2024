'use client'
import { useChangeColorContext } from '@/context/ColorProvider'

export const Blur = ({ position }: {position: string}) => {
  const { color } = useChangeColorContext()
  return (
    <div className={`absolute ${position} ${color.bg} w-40 h-screen rounded-full opacity-50 blur-xl`} />
  )
}
