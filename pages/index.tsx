import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppSelector } from '../hooks/useApp'

const Home: NextPage = () => {

  const router = useRouter()

  useEffect(() => {
    router.push('/auth')
  }, [])


  return (
    <div>
      {/* Все для SEO */}
      <Head>
        
      </Head>
    </div>
  )
}




export default Home
