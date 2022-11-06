import React, { useState } from 'react'
import Link from 'next/link'
import { TbMenu } from 'react-icons/tb'

export default function () {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <header className='shadow-sm w-full sticky top-0 z-50 bg-slate-100'>
        <nav className='container mx-auto py-2 flex justify-between md:justify-around px-4 items-center'>
          <div className='flex-1'>
            <Link href='/'>
              <p className='px-3 font-serif bg-blue-700 text-3xl text-white cursor-pointer max-w-fit'>
                P
              </p>
            </Link>
          </div>
          <div className='hidden md:block text-xl'>
            <ul className='flex gap-4 capitalize'>
              <li>
                <Link href='/catagories/programming'>programming</Link>
              </li>
              <li>
                <Link href='/catagories/marketing'>marketing</Link>
              </li>
              <li>
                <Link href='/catagories/design'>design</Link>
              </li>
            </ul>
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setShowNav(!showNav)}
              className='text-2xl px-3 py-2'
            >
              <TbMenu />
            </button>
          </div>
        </nav>
      </header>
      {showNav && (
        <div className='block md:hidden text-xl'>
          <ul className='space-y-6 px-7 py-3 capitalize'>
            <li>
              <Link href='/catagories/programming'>programming</Link>
            </li>
            <li>
              <Link href='/catagories/marketing'>marketing</Link>
            </li>
            <li>
              <Link href='/catagories/design'>design</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
