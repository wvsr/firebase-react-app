import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../lib/firebase-config'
import { faker } from '@faker-js/faker'
import Loader from '../components/Loader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function () {
  // states

  const [showLoader, setShowLoader] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  // firebase functions
  const postsCollectionRef = collection(db, 'blogs')
  async function createPost() {
    setShowLoader(true)
    await addDoc(postsCollectionRef, {
      title: title,
      content: content,
      author: faker.name.fullName(),
    })
    setShowLoader(false)
    toast('Post Created!')
  }

  return (
    <div className='flex justify-center w-full'>
      <div className='max-w-2xl w-full bg-slate-100 mt-10 p-3 m-3 rounded-lg'>
        <p className='text-3xl mb-6 font-bold'>Create Post</p>
        <article className='space-y-4'>
          <div>
            <label htmlFor='title' className='text-lg mt-2'>
              Title :
            </label>
            <input
              type='text'
              id='title'
              className='w-full text-lg border-2 border-blue-600 outline-none rounded-md px-2 py-1'
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor='image' className='text-lg mt-2'>
              Title :
            </label>
            <input
              type='text'
              id='image'
              className='w-full text-lg border-2 border-blue-600 outline-none rounded-md px-2 py-1'
              onChange={(e) => setImage(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor='content' className='text-lg mt-2'>
              Content :
            </label>
            <textarea
              id='content'
              cols='30'
              rows='7'
              className='w-full text-lg border-2 border-blue-600 outline-none rounded-md px-2 py-1'
              onChange={(e) => setContent(e.currentTarget.value)}
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-blue-600 w-full py-2 text-lg text-white font-medium rounded-md hover:bg-blue-700 flex gap-3 justify-center items-center'
            onClick={createPost}
          >
            Upload Post {showLoader && <Loader />}
          </button>
        </article>
      </div>
      <ToastContainer
        position='bottom-left'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}
