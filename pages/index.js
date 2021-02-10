import Head from 'next/head'
import Button from '@material-ui/core/Button'
import OfferForm from '../components/layout/Offer/OfferForm'


export default function Home( { }) {
 

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
       <OfferForm /> 

      </main>

      
    </div>
  )
}

