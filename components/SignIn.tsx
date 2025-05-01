import { signIn } from '@/app/api/auth/auth'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export function SignIn() {
  return (
    <div className='w-full max-w-[375px] flex flex-col items-start  gap-4 p-4 '>
      <div className=' flex flex-col items-start gap-2 p-6 '>
        <h1 className='text-2xl '>Log in to Exclusive</h1>
        <p>Enter your details below</p>
      </div>
      <form
        action={async (formData) => {
          'use server'
          const username = formData.get('username') as string
          const password = formData.get('password') as string
          try {
            await signIn('credentials', {
              redirect: false,
              username,
              password,
            })
          } catch (error) {
            console.error(error)
          } finally {
            redirect('/')
          }
        }}
        className='w-[375px]  flex flex-col gap-4 p-6'
      >
        Name
        <Input
          name='username'
          type='text'
          placeholder='Name'
          className='rounded-none border-none border-b-2 border-black bg-transparent focus:outline-none focus:ring-0 focus:border-black'
          required
        />
        Password
        <Input
          name='password'
          type='password'
          placeholder='Password'
          className='rounded-none border-none border-b-2 border-black bg-transparent focus:outline-none focus:ring-0 focus:border-black'
          required
        />
        <Button
          type='submit'
          className='w-full bg-[#DB4444] text-white hover:bg-[#E07575]/90 rounded-[2px] transition-all delay-200'
          aria-label='Log in'
        >
          Log in
        </Button>
        <Link
          href='/register'
          className='space-x-2'
          aria-label="You don't have an account?"
        >
          You don&apos;t have an account?{' '}
          <b className=' border-b-2 hover:border-blue-500 transition-all delay-200'>
            Sign up
          </b>
        </Link>
      </form>
    </div>
  )
}
