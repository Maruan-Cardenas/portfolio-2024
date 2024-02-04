'use client'
import { useChangeColorContext } from '@/context/ColorProvider'
import { useI18nContext } from '@/context/I18nProvider'
import { Card } from './components/card'
import { projects } from './data/data'

export const Projects = () => {
  const { T } = useI18nContext()
  const { color } = useChangeColorContext()
  return (
    <section className='h-full w-[50vw] snap-center p-2 pt-0 grid grid-cols-2 gap-2 dark:text-slate-200'>
      <h1 className='text-slate-800 flex flex-col col-span-2 row-span-1 justify-center p-5 dark:bg-slate-900 rounded-md bg-slate-200 text-xl'>
        <span className={`font-bold text-4xl ${color.text}`}>{T.links.projects}</span>
      </h1>
      <section className='row-span-3 col-span-2 grid grid-cols-2 gap-2'>
        {
          projects.map((project, index) => {
            return (
              <Card
                key={index}
                {...project}
              />
            )
          })
        }
      </section>
    </section>

  )
}
