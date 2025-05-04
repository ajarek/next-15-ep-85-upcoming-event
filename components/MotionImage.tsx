import * as motion from 'motion/react-client'
import Image from 'next/image'

const MotionImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt: string
  width: number
  height: number
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        scale: { type: 'spring', visualDuration: 2, bounce: 0.5 },
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='rounded-sm shadow-sm shadow-foreground object-cover'
        priority
      />
    </motion.div>
  )
}
export default MotionImage
