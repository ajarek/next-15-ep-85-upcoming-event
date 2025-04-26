import {  Plus} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CalendarLocal } from './CalendarLocal'



const AppSidebar = () => {
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
          <Button size={'icon'}>
            <Plus />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
      <CalendarLocal />
      </SidebarContent>
    </Sidebar>
  )
}
export default AppSidebar
