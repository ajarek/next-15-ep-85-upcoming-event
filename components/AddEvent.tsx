'use client'

import React from 'react'
import { CalendarForm } from './CalendarForm'
import { Button } from '@/components/ui/button'
import { useActionStore } from '@/store/actionStore'

const AddEvent = () => {
  const { setIsOpen } = useActionStore()
  return (
    <div className='fixed inset-0 flex items-center  justify-center bg-black z-10 opacity-90 '>
      <div className=' translate-x-[150px] max-sm:translate-x-0 p-4 rounded-sm bg-background shadow-2xl border-2  '>
        <Button
          className='absolute top-1 right-1  p-0 text-xl'
          aria-label='Close add event'
          size={'icon'}
          variant={'ghost'}
          onClick={() => setIsOpen(false)}
        >
          ❌
        </Button>
        
        <CalendarForm />
      </div>
    </div>
  )
}

export default AddEvent