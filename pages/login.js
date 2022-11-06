import React, { useState } from 'react'
import validator from 'validator'
import Loader from '../components/Loader'
import { auth } from '../lib/firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function () {
  const [showLoader, setShowLoader] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setShowLoader(true)
        const user = userCredential.user
        console.log(user)
        toast.success('You are login')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        toast.error(errorMessage)
      })
    setShowLoader(false)
  }
  return (
    <>
      <div className='flex justify-center items-center'>
        <section className='max-w-xl w-full px-6 py-3 rounded-md bg-blue-100 m-4 space-y-6 mt-14'>
          <div>
            <label htmlFor='email' className='text-lg'>
              Email :
            </label>
            <input
              type='text'
              id='email'
              className='w-full text-lg border-2 border-blue-600 outline-none rounded-md px-2 py-1 mt-2'
              placeholder='Email'
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor='password' className='text-lg'>
              Password :
            </label>
            <input
              type='password'
              id='password'
              className='w-full text-lg border-2 border-blue-600 outline-none rounded-md px-2 py-1 mt-2'
              placeholder='Password'
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password}
            />
          </div>
          <button
            type='submit'
            className='bg-blue-600 w-full py-2 text-lg text-white font-medium rounded-md hover:bg-blue-700 flex gap-3 justify-center items-center'
            onClick={userLogin}
          >
            Login {showLoader && <Loader />}
          </button>
        </section>
      </div>
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  )
}
