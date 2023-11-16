'use client'
import { useI18nContext } from '@/context/I18nProvider'
import Link from 'next/link'
import { ColorsButtons } from './components/ColorsButton'
import { DarkModeButton } from './components/DarkModeButton'
import { I18nButton } from './components/I18nButton'

export const Header = () => {
  const { T } = useI18nContext()
  return (
    <header
      className='md:w-[50vw] w-full row-start-1 row-end-2 col-start-1 col-end-5 p-2'
    >
      <div className='bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex flex-col md:flex-row justify-between items-center rounded-md p-5'>
        <div className='flex justify-center items-center gap-5 pb-5 md:pb-0'>
          <DarkModeButton />
          <ColorsButtons />
          <I18nButton />
        </div>
        <ul className='flex justify-center items-center gap-5'>
          <li>
            <Link href={T.links.projects.toLowerCase()}>{T.links.projects}</Link>
          </li>
          <li>
            <Link href={T.links.skills.toLowerCase()}>{T.links.skills}</Link>
          </li>
          <li>
            <Link href={T.links.contact.toLowerCase()}>{T.links.contact}</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
