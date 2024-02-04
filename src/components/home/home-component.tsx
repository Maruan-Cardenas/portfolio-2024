'use client'
import { useChangeColorContext } from '@/context/ColorProvider'
import { useI18nContext } from '@/context/I18nProvider'
import { DownloadIcon, GithubIcon, LinkedInIcon } from '@/icons/icons'
import Image from 'next/image'
import { LinkButton } from './components/link-button'

export const HomeComponent = () => {
  const { T } = useI18nContext()
  const { color } = useChangeColorContext()
  return (
    <section className='grid grid-cols-3 gap-2 w-full md:w-[50vw] h-full p-2 pt-0 snap-center'>
      <h1 className='text-slate-800 flex flex-col col-span-2 row-span-4 justify-center p-5 dark:bg-slate-900 rounded-md bg-slate-200 dark:text-slate-200 text-xl'>
        {T.home.title}
        <span className={`font-bold text-4xl ${color.text}`}>Maruan Vicente Cardenas</span>
      </h1>
      <p className='text-slate-700 bg-slate-200 rounded-md dark:text-slate-300 dark:bg-slate-900 flex items-center p-5 text-lg col-span-3'>
        {T.home.description}
      </p>
      <ul className='flex col-span-3 gap-2 md:gap-5'>
        <LinkButton>
          <span className='hidden md:visible'>
            GitHub
          </span>
          <GithubIcon />
        </LinkButton>
        <LinkButton>
          <span className='hidden md:visible'>
            LinkedIn
          </span>
          <LinkedInIcon />
        </LinkButton>
        <LinkButton>
          CV
          <DownloadIcon />
        </LinkButton>
      </ul>
      <Image className={`col-start-3 row-start-1 row-span-4 ${color.bg} object-cover h-full rounded-md`} src='/image.webp' alt='Fotografía de Maruan Vicente Cardenas' width={585} height={596} />
    </section>
  )
}
