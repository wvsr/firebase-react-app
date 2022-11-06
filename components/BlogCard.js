import Image from 'next/image'
import { FaCalendar, FaClock } from 'react-icons/fa'
export default function ({ i }) {
  return (
    <div className='bg-inherit'>
      <img
        src={`https://source.unsplash.com/1600x900/?${i}`}
        className='rounded-md hover:scale-105 transition-transform duration-150 ease-linear'
      />
      <div className='pt-2 pb-7 px-3'>
        <div>
          <p className='text-gray-500 font-medium'>John Doe • 19 Jan 2022</p>
        </div>
        <p className='text-2xl font-bold leading-8 text-gray-800 my-3 hover:underline decoration-blue-600 underline-offset-2 decoration-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        {/* <p className='mt-6 text-gray-500 leading-7 text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab
          maxime totam, a provident fugit rem commodi animi aspernatur ratione.
        </p> */}
        <p className='mt-5 bg-blue-200 text-blue-800 max-w-fit px-3 py-1 rounded-full'>
          TECNOLOGY
        </p>
      </div>
    </div>
  )
}
