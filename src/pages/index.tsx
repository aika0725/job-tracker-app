import Head from 'next/head'
import AddJobForm from '../components/AddJobForm'
import AppHeader from '../components/AppHeader'

import JobInfoCardList from '../components/JobInfoCardList'
import OptionBar from '../components/OptionBar'
import styles from '../styles/Home.module.scss'
import { JobListingContext } from '../hooks/useJobListings'

export default function HomePage() {
  return (
    <JobListingContext>
      <div className={styles.container}>
        <Head>
          <title>Job application tracker v1.0</title>
          <meta name="description" content="Your job application tracker" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppHeader></AppHeader>
        <OptionBar></OptionBar>
        <JobInfoCardList />
        <AddJobForm />
      </div>
    </JobListingContext>
  )
}
