import { Fragment } from 'react'
import Head from 'next/head'
import HomePage from '../components/home/Home'

export default function Home() {
  return (

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
