import { Loader2 } from 'lucide-react'

const Loading = () => {
  return (
    <div className='w-full min-h-screen  flex flex-col items-center justify-center '>
      <Loader2
        className='animate-spin'
        size={32}
        aria-label='Loading...'
      />
    </div>
  )
}

export default Loading
