'use client'

import React from 'react'
import { Item, useEventsStore } from '@/store/eventsStore'
import ButtonRemoveItem from '@/components/ButtonRemoveItem'


const CalendarDayPage = ({ day }: { day:string }) => {
 
  
  const { items } = useEventsStore()
  const lengthEvents = items.filter((item) => item.date === day).length
  if (lengthEvents === 0)
    return (
      <div className='w-full text-center text-2xl py-12 text-red-500'>
        <h1 className='text-2xl font-bold'>Data: {day}</h1>
        <p> Brak wydarzeń na ten dzień.</p>
      </div>
    )
  return (
    <div className='flex flex-col  items-start justify-top h-screen p-16 gap-16'>
      <h1 className='text-2xl font-bold'>Data: {day}</h1>
      <div className='flex flex-wrap gap-4'>
        {items
          .filter((item) => item.date === day)
          .sort((a: Item, b: Item) => a.timeOn.localeCompare(b.timeOn))
          .map((item) => (
            <div
              key={item.id}
              className={`min-w-[200px] flex flex-col p-2 gap-4  rounded text-xl ${
                item.type === 'Spotkanie'
                  ? 'bg-blue-500'
                  : item.type === 'Wycieczka'
                  ? 'bg-yellow-500 text-black'
                  : item.type === 'Inne'
                  ? 'bg-green-500'
                  : item.type === 'Edukacja'
                  ? 'bg-red-500'
                  : 'bg-orange-500 '
              }`}
            >
              <p>
                <span className='text-gray-100 text-sm'>data:</span> {item.date}
              </p>
              <p>
                <span className='text-gray-100 text-sm'>wydarzenie:</span>{' '}
                {item.event}
              </p>
              <p>
                <span className='text-gray-100 text-sm'>start:</span>{' '}
                {item.timeOn}
              </p>
              <p>
                <span className='text-gray-100 text-sm'>koniec:</span>{' '}
                {item.timeOff}
              </p>
              <p>
                <span className='text-gray-100 text-sm'>typ:</span> {item.type}
              </p>
              <ButtonRemoveItem id={item.id} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default CalendarDayPage
