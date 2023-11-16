import { useChangeColorContext } from '@/context/ColorProvider'
import { COLOR1, COLOR2, COLOR3, COLOR4, COLOR5 } from '../domain/consts'

export const ColorsButtons = () => {
  const { handleColor } = useChangeColorContext()
  return (
    <div className='flex gap-2 md:gap-5'>
      <button
        className='bg-custom1 rounded-full w-7 h-7'
        onClick={() => handleColor(COLOR1)}
      />
      <button
        className='bg-custom2 rounded-full w-7 h-7'
        onClick={() => handleColor(COLOR2)}
      />
      <button
        className='bg-custom3 rounded-full w-7 h-7'
        onClick={() => handleColor(COLOR3)}
      />
      <button
        className='bg-custom4 rounded-full w-7 h-7'
        onClick={() => handleColor(COLOR4)}
      />
      <button
        className='bg-custom5 rounded-full w-7 h-7'
        onClick={() => handleColor(COLOR5)}
      />
    </div>
  )
}
