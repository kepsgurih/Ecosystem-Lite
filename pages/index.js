import React,{useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ButtonLogin from '../components/atom/ButtonLogin'
import AuthLayout from '../components/Layouts/AuthLayout/Index'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import database from '../components/libs/firebase'
import { useRouter } from 'next/router'

export default function Home() {
  const Router = useRouter()
  const auth = getAuth(database);
  return (
    <AuthLayout>
      <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div className="flex-1">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-400">ONL <span className="text-black">Tools</span></h2>
          </div>
          <div className='my-10 text-center'>
            <p className="mt-3 text-gray-500 dark:text-gray-300">Atau gunakan Email</p>
          </div>
          <div className="mt-8">
            <form>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                  <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                </div>
                <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign in
                </button>
              </div>
            </form>
            <p className="mt-3 text-gray-500 dark:text-gray-300">Masuk dengan Email</p>
            <div className='flex flex-col my-5'>
              <ButtonLogin text="Google" icon="google" />
              <ButtonLogin text="Github" icon="github" />
            </div>
            <p className="mt-6 text-sm text-center text-gray-400">Belum memiliki akun? <Link href={'/register'}>
              <a className="text-blue-500 focus:outline-none focus:underline hover:underline">&nbsp;Daftar akun dengan email</a></Link>.</p>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
