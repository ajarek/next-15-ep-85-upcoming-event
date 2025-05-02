'use client'

import React from 'react'
import { Button } from './ui/button'
import { useEventsStore } from '@/store/eventsStore'
import { useRouter } from 'next/navigation'

const ButtonRemoveItem = ({id}:{id:number}) => {
  const { removeItemFromEvent } = useEventsStore()
  const router = useRouter()
  return (
    <Button
                size='icon'
                onClick={() => {
                  removeItemFromEvent(id)
                  router.push(`/`)
                }}
                aria-label='Usuń wydarzenie'
                className='text-sm w-6 h-6 bg-white rounded-full border border-red-500 self-end'
              >
                ❌
              </Button>
  )
}

export default ButtonRemoveItem