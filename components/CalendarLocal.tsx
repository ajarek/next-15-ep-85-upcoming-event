"use client"

import * as React from "react"
import { useRouter } from 'next/navigation'
import { Calendar } from "@/components/ui/calendar"

export function CalendarLocal() {
  const router = useRouter()
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const handleDateSelect = React.useCallback((date: Date) => {
    setDate(date)
    router.push(`/calendar-day/${date.toLocaleDateString()}`)
  }, [router])
  return (
    <>
    <Calendar
      mode="single"
      selected={date}
      onSelect={(date: Date | undefined) => date && handleDateSelect(date)}
      className="rounded-md border shadow mt-2"
    />
    <span className="p-3">Wybrano: {date?.toLocaleDateString()}</span>
    </>
  )
}
