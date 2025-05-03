import Signout from '@/components/Signout'
import React from 'react'

const SignoutUser = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center  p-4 gap-4 '>
      <h1 className='text-2xl font-bold'>Wyloguj</h1>
      <Signout />
    </div>
  )
}

export default SignoutUser
