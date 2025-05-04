import type { Session } from 'next-auth'
import Link from 'next/link'
import LogoutBtn from '@/components/LogoutBtn'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { KeyRound } from 'lucide-react'
import 'next-auth'

const Logout = async ({ session }: { session: Session | null }) => {
  return (
    <div className=' flex items-center gap-2 '>
      {session ? (
        <>
          <LogoutBtn />
        </>
      ) : (
        <Link
          href='/login'
          className='bg-secondary w-8 h-8 rounded-sm flex justify-center items-center secondary-foreground  transition-all delay-200 border border-green-500 hover:bg-green-500 hover:text-white'
          aria-label='Login'
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {' '}
                <KeyRound
                  size={24}
                  strokeWidth={1}
                  aria-label='Login'
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Login</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      )}
    </div>
  )
}

export default Logout
