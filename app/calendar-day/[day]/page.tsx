import CalendarDayPage from '@/components/CalendarDayPage'
import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const CalendarDay = async({params}:{params:Promise<{ day: string }> }) => {
  const { day } = await params
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  return (
    <CalendarDayPage day={day}/>
  )
}

export default CalendarDay