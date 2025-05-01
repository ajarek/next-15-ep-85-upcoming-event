'use client'

import React, { useState } from 'react'
import { UserWithoutId } from '@/lib/models'
import { addUser } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const DEFAULT_IS_ADMIN: boolean = false

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [img] = useState('')
  const [isAdmin] = useState(DEFAULT_IS_ADMIN)

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData: UserWithoutId = {
      username,
      email,
      password,
      img,
      isAdmin,
    }

    try {
      await addUser(formData)
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full max-w-[375px] flex flex-col items-start  gap-4 p-4 '>
      <div className=' flex flex-col items-start gap-2 p-6 '>
        <h1 className='text-2xl '>Create an account</h1>
        <p>Enter your details below</p>
      </div>
      <form
        className='w-[375px]  flex flex-col gap-4 p-6  '
        onSubmit={handleSubmit}
      >
        <Input
          type='text'
          placeholder='Name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='rounded-none border-none border-b-2 border-black bg-transparent focus:outline-none focus:ring-0 focus:border-black'
        />
        <Input
          type='email'
          placeholder='Email or Phone Number'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='rounded-none border-none border-b-2 border-black bg-transparent focus:outline-none focus:ring-0 focus:border-black'
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='rounded-none border-none border-b-2 border-black bg-transparent focus:outline-none focus:ring-0 focus:border-black'
        />

        <Button
          className='w-full bg-[#DB4444] text-white hover:bg-[#E07575]/90 rounded-[2px] transition-all delay-200 cursor-pointer'
          type='submit'
          aria-label='Zarejestruj się'
        >
          Create Account
        </Button>
        <Link
          href='/login'
          className='space-x-2 '
          aria-label='Already have account?'
        >
          Already have account?{' '}
          <b className=' border-b-2 hover:border-blue-500 transition-all delay-200'>
            Log in
          </b>
        </Link>
      </form>
    </div>
  )
}

export default RegisterForm
