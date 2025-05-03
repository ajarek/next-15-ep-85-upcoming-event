

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

import { CalendarLocal } from './CalendarLocal'
import { ModeToggle } from './ModeToggle'
import { auth } from '@/app/api/auth/auth'
import Link from 'next/link'
import HeaderSidebar from './HeaderSidebar'
import Logout from './Logout'

const AppSidebar =async () => {
  const session = await auth()
  return (
    <Sidebar className='px-2'>
      <SidebarHeader>
      <HeaderSidebar userImage={session?.user?.image||''} userName={session?.user?.name  ||''} session={session?true:false}/>
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
      <SidebarFooter >
        <div className='flex items-center gap-4 py-4'>

        <ModeToggle />
      <Logout session={session} />

        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar
