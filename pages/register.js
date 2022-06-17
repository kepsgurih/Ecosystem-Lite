import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ButtonLogin from '../components/atom/ButtonLogin'
import AuthLayout from '../components/Layouts/AuthLayout/Index'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import database from '../components/libs/firebase'
import { useRouter } from 'next/router'

export default function Register() {
  const Router = useRouter()
  const [_dataLogin, set_dataLogin] = useState()
  const auth = getAuth(database);
  function setValue(e) {
    let name = e.target.name
    let target = e.target.value
    set_dataLogin({
      ..._dataLogin,
      [name]: target
    })
    console.log(_dataLogin)
  }

  async function register(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, _dataLogin.email, _dataLogin.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }
  return (
    <AuthLayout>
      {/* Toast */}
      <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
  </div>
  <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
  <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
    <span className="sr-only">Close</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
  </button>
</div>

      {/* End Toast */}
      <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 bg-white dark:bg-slate-800">
        <div className="flex-1">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-400">ONL <span className="text-black dark:text-white">Tools</span></h2>
            <p className="mt-3 text-gray-500 dark:text-gray-300 dark:text-slate-400">Register dengan Email</p>
            <p className='mt-3 text-gray-500 dark:text-gray-300 dark:text-slate-400'>Untuk masuk dengan sosial media tidak perlu Mendaftarkan akun anda</p>
          </div>
          <div className="mt-8">
            <form onSubmit={register}>
              {/* <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                <input onChange={setValue} type="text" name="username" id="username" placeholder="Masukan Username" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div> */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">ALamat Email</label>
                <input onChange={setValue} type="email" name="email" id="email" placeholder="Masukan Email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Kata Sandi</label>
                  <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Lupa Kata Sandi ?</a>
                </div>
                <input onChange={setValue} type="password" name="password" id="password" placeholder="Kata Sandi Anda" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div className="mt-6">
                <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Register
                </button>
              </div>
            </form>
            <p className="mt-6 text-sm text-center text-gray-400">Sudah memiliki akun?
              <Link href={'/'}>
                <a className="text-blue-500 focus:outline-none focus:underline hover:underline">&nbsp;Masuk</a>
              </Link>
              .</p>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
