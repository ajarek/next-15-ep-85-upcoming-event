'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className='w-full min-h-[calc(100vh-32px)] flex flex-col items-center justify-center gap-4 p-2'>
     
      <h1 className='text-center text-3xl font-semibold tracking-widest '>
        404 Nie znaleziono strony
      </h1>
      <p className='text-center'>
      Twoja odwiedzona strona nie została znaleziona. Możesz przejść na stronę główną.
      </p>
      <div className=''>
        <Button
          onClick={() => {
            router.push('/')
          }}
          aria-label='Back to home page'
          className='w-full bg-[#DB4444] text-white hover:bg-[#E07575]/90 rounded-[2px]'
        >
          Powrót do strony głównej
        </Button>
      </div>
    </div>
  )
}
export default NotFoundPage
