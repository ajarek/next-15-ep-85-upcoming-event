'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useActionStore } from '@/store/actionStore'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEventsStore } from '@/store/eventsStore'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  dateTime: z.object({
    date: z.date({
      required_error: 'Date is required.',
    }),
    timeOn: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: 'Invalid time format. Use HH:MM.',
    }),
    timeOff: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: 'Invalid time format. Use HH:MM.',
    }),
    event: z.string().min(3, {
      message: 'Minimum 3 characters.',
    }),
    type: z.string().min(3, {
      message: 'Minimum 3 characters.',
    }),
  }),
})

export function CalendarForm() {
  const router = useRouter()
  const { addItemToEvent } = useEventsStore()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const { setIsOpen } = useActionStore()

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const item = {
      id: Date.now(),
      date: data.dateTime.date.toLocaleDateString(),
      timeOn: data.dateTime.timeOn,
      timeOff: data.dateTime.timeOff,
      event: data.dateTime.event,
      type: data.dateTime.type,
    }
    addItemToEvent(item)
    setIsOpen(false)
    router.push(`/events}`)
    
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-4 bg-background p-4 '
      >
        <FormField
          control={form.control}
          name='dateTime'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Wybierz datę</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                      aria-label='Wybierz datę'
                    >
                      {field.value?.date ? (
                        format(field.value.date, 'PPP')
                      ) : (
                        <span>wybierz datę</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className='w-auto p-0'
                  align='start'
                >
                  <Calendar
                    mode='single'
                    selected={field.value?.date}
                    onSelect={(date) =>
                      field.onChange({ ...field.value, date })
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormControl>
                <div className='w-full flex items-center justify-between bg-background rounded-sm'>
                  <FormLabel className='pl-2'>Godzina rozpoczęcia</FormLabel>
                  <Input
                    type='time'
                    value={field.value?.timeOn || ''}
                    onChange={(e) =>
                      field.onChange({ ...field.value, timeOn: e.target.value })
                    }
                    className='w-[95px]'
                  />
                </div>
              </FormControl>
              <FormControl>
                <div className='w-full flex items-center justify-between bg-background rounded-sm '>
                  <FormLabel className='pl-2'>Godzina zakończenia</FormLabel>
                  <Input
                    type='time'
                    value={field.value?.timeOff || ''}
                    onChange={(e) =>
                      field.onChange({
                        ...field.value,
                        timeOff: e.target.value,
                      })
                    }
                    className='w-[95px]'
                  />
                </div>
              </FormControl>
              <FormControl>
                <div className='w-full flex items-center justify-between gap-2 bg-background rounded-sm '>
                  <Input
                    type='text'
                    value={field.value?.event || ''}
                    onChange={(e) =>
                      field.onChange({
                        ...field.value,
                        event: e.target.value,
                      })
                    }
                    className='w-full '
                    placeholder='Wpisz nazwę wydarzenia'
                  />
                </div>
              </FormControl>
              <FormControl>
                <div className='w-full flex items-center justify-between gap-2 '>
                  <FormLabel className='text-sm'>Typ wydarzenia</FormLabel>
                  <Select
                    onValueChange={(e) =>
                      field.onChange({
                        ...field.value,
                        type: e,
                      })
                    }
                    defaultValue={field.value?.type || ''}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select type' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem
                        className='bg-orange-500'
                        value='Projekt'
                      >
                        Projekt
                      </SelectItem>
                      <SelectItem
                        className='bg-blue-500'
                        value='Spotkanie'
                      >
                        Spotkanie
                      </SelectItem>
                      <SelectItem
                        className='bg-red-500'
                        value='Edukacja'
                      >
                        Edukacja
                      </SelectItem>
                      <SelectItem
                        className='bg-yellow-500'
                        value='Wycieczka'
                      >
                        Wycieczka
                      </SelectItem>
                      <SelectItem
                        className='bg-green-500'
                        value='Inny'
                      >
                       Inny
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          aria-label='Send'
          className='w-full text-xl '
        >
          Dodaj Wydarzenie
        </Button>
      </form>
    </Form>
  )
}