import { useChangeColorContext } from '@/context/ColorProvider'
import { useI18nContext } from '@/context/I18nProvider'
import enIcon from '@/image/en.svg'
import esIcon from '@/image/es.svg'
import Image from 'next/image'

export const I18nButton = () => {
  const { handleI18n, T } = useI18nContext()
  const { color } = useChangeColorContext()
  return (
    <button onClick={() => handleI18n()} className={`flex ${color.border} border-2 relative gap-4 shadow-sm justify-center items-center rounded-full bg-slate-50 dark:bg-slate-950 h-7 w-12 `}>
      <span className={`w-6 h-6 rounded-full absolute ${T.lang === 'es' ? 'start-0' : 'end-0'}`}>
        {
        T.lang === 'es'
          ? (
            <Image src={esIcon} alt='Icono bandera en es' className='w-6 h-6' />
            )
          : (
            <Image src={enIcon} alt='Icono bandera en en' className='w-6 h-6' />
            )
      }
      </span>
    </button>
  )
}
