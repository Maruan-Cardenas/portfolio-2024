import { NextJSIcon } from '@/icons/icons'
import Image from 'next/image'

export const Card = (
  { image, nextjs, description, title }:
  { image:string, nextjs?: boolean, description: string, title: string }
) => {
  return (
    <article className='flex flex-col justify-between p-2 dark:bg-slate-900 bg-slate-200'>
      <Image src={`/projects/${image}`} alt='Imagen de la web Plagaland' width={540} height={252} className='w-full object-cover' />
      <h2>{title}</h2>
      <span className='flex'>
        {nextjs && <NextJSIcon />}
      </span>
      <p>{description}</p>
    </article>
  )
}
