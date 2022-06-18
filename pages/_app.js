import React, { useEffect, useState } from 'react'
import '../styles/globals.css'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import database from '../components/libs/firebase'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const Router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth(database);
  const arPath = Router.asPath.split('/')
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (arPath[1] !== 'Dashboard') {
          Router.replace('/Dashboard')
          setIsLoading(false)
        }
        else{
          setIsLoading(false)
        }

      }
      else{
        setIsLoading(false)
      }
    })
  }, [])
  if (isLoading) {
    return (
      <div class="flex items-center justify-center space-x-2 animate-pulse">
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
      </div>
    )
  }
  else{
    return <Component {...pageProps} />
  }
}

export default MyApp
