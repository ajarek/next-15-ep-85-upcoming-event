import MotionImage from '@/components/MotionImage'
import Link from 'next/link'
import { auth } from '@/app/api/auth/auth'



export default async function Home() {
  const session = await auth()
  

  return (
    <div className='relative  min-h-screen w-full flex flex-col items-center justify-start    font-[family-name:var(--font-geist-sans)] '>
      <MotionImage
        src='/images/baner.jpg'
        alt='baner'
        width={965}
        height={540}
      />
      <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='mx-auto  px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32'>
          <div className='mx-auto max-w-prose text-center'>
            <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl'>
              Twoje
              <strong className='text-indigo-600'> Wydarzenia </strong>
            </h1>

            <p className='mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed'>
              Zapisuj i przyklejaj swoje karteczki do wydarzeń.
            </p>

            <div className='mt-4 flex justify-center gap-4 sm:mt-6'>
              {!session &&
              <Link
                className='inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-2 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700'
                href='/login'
              >
                Zaloguj się
              </Link>
             }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
