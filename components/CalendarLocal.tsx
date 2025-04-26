"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarLocal() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow mt-2"
    />
    <span className="p-3">Wybrano: {date?.toLocaleDateString()}</span>
    </>
  )
}
