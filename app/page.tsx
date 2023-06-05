import Image from 'next/image'
import { Fragment } from 'react'
import Head from 'next/head'
import HomePage from '../components/home/Home'



export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //     </main>
    
    <Fragment>
            <Head>
                <title>Home</title>
                <meta
                    name='description'
                    content='Browse a home page!'
                />
            </Head>
            <main className="min-h-screen items-center ">

            <HomePage />
            </main>
        </Fragment>

  )
}
