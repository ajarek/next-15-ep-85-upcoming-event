'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { Plus } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CalendarLocal } from './CalendarLocal'
import { ModeToggle } from './ModeToggle'
import AddEvent from './AddEvent'
import { useActionStore } from '@/store/actionStore'
import { Button } from './ui/button'
import Link from 'next/link'

const AppSidebar = () => {
  const { isOpen, setIsOpen } = useActionStore()
  return (
    <Sidebar className='px-2'>
      <SidebarHeader>
        <div className='flex items-center justify-between'>
          <Link href={'/'} className='flex items-center gap-2'>
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
          </Link>
          <Button
            size={'icon'}
            onClickCapture={() => setIsOpen(true)}
            className='bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-500 hover:text-white transition-all delay-200'
          >
            <Plus />
          </Button>
          {isOpen && <AddEvent />}
        </div>
      </SidebarHeader>

      <SidebarMenu>
        <SidebarMenuButton asChild className='bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-500 hover:text-white transition-all delay-200'>
          <Link href={'/events'}>
            <span>Wydarzenia</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenu>

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
