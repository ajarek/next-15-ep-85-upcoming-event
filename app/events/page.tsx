import { Timetable } from '@/components/Timetable'
import React from 'react'

const Events = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen p-4 pb-20 gap-16  font-[family-name:var(--font-geist-sans)] ">
    <Timetable/>
  </div>
  )
}

export default Events