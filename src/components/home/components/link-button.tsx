import { useChangeColorContext } from '@/context/ColorProvider'
import Link from 'next/link'
import React from 'react'

export const LinkButton = ({ children }: {children: React.ReactNode}) => {
  const { color } = useChangeColorContext()
  return (
    <Link target='_blank' href='./Curriculum-vitae.pdf' download passHref className={`flex duration-100 justify-center dark:bg-slate-900 dark:text-slate-50 items-center font-bold gap-5 p-3 h-full w-full bg-slate-200 ${color.border} md:border-2 border-[1px] rounded-md hover:scale-95 duration-100`}>
      {children}
    </Link>
  )
}
