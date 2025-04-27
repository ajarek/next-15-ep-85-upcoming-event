'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { Plus } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CalendarLocal } from './CalendarLocal'
import { ModeToggle } from './ModeToggle'
import AddEvent from './AddEvent'
import { useActionStore } from '@/store/actionStore'
import { Button } from './ui/button'

const AppSidebar = () => {
  const { isOpen, setIsOpen } = useActionStore()
  return (
    <Sidebar>
      <SidebarHeader>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Avatar className='size-12'>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt='@shadcn'
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className='font-semibold'>Jan Nowak</h1>
              <p className='text-sm text-gray-400'>Projektant interfejsu</p>
            </div>
          </div>
          <Button
            size={'icon'}
            onClickCapture={() => setIsOpen(true)}
          >
            <Plus />
          </Button>
          {isOpen && <AddEvent />}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <CalendarLocal />
      </SidebarContent>
      <SidebarFooter className='py-4'>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar
