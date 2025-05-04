'use client'
import React from 'react'
import AddEvent from './AddEvent'
import { useActionStore } from '@/store/actionStore'
import { Button } from './ui/button'
import Link from 'next/link'

import { Plus } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const HeaderSidebar = ({
  userImage,
  userName,
  session,
}: {
  userImage: string
  userName: string
  session: boolean | null
}) => {
  const { isOpen, setIsOpen } = useActionStore()
  return (
    <div className='flex items-center justify-between'>
      <Link
        href={'/'}
        className='flex items-center gap-2'
      >
        <Avatar className='size-12'>
          <AvatarImage
            src={userImage || 'https://github.com/shadcn.png'}
            alt='User Image'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className='font-semibold capitalize'>
            {userName || <span className='text-gray-400'>Niezalogowany</span>}
          </h1>
          <p className='text-sm text-gray-400'>Projektant </p>
        </div>
      </Link>
      {session === true && (
        <>
          <Button
            size={'icon'}
            onClickCapture={() => setIsOpen(true)}
            className='bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-500 hover:text-white transition-all delay-200'
          >
            <Plus />
          </Button>
          {isOpen && <AddEvent />}
        </>
      )}
    </div>
  )
}

export default HeaderSidebar
