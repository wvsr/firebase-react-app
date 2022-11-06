import Image from 'next/image'
export default function () {
  return (
    <div className='flex justify-center items-center h-[75vh] flex-col'>
      <Image
        src='/404.svg'
        className='h-auto w-full'
        width={300}
        height={300}
      />
      <p className='text-4xl font-bold'>Page Not Found</p>
    </div>
  )
}
