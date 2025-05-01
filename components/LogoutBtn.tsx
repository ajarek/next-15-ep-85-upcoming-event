import { LogOut } from 'lucide-react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const LogoutBtn = () => {
  return (
    <Link
      href='/signout'
      className='bg-secondary w-8 h-8 rounded-sm flex justify-center items-center secondary-foreground  transition-all delay-200 border border-red-500 hover:bg-red-500 hover:text-white'
      aria-label='Wyloguj'
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {' '}
            <LogOut
              size={24}
              strokeWidth={1}
              aria-label='Wyloguj'
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Wyloguj</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  )
}

export default LogoutBtn
