import Head from 'next/head'
import AddJobForm from '../components/AddJobForm'
import AppHeader from '../components/AppHeader'

import JobInfoCardList from '../components/JobInfoCardList'
import OptionBar from '../components/OptionBar'
import styles from '../styles/Home.module.scss'
import { JobListingContext } from '../hooks/useJobListings'

import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import ApplicationTable from '../components/Table/ApplicationTable'

export default function HomePage() {
  return (
    // <JobListingContext>
    //   <div className={styles.container}>
    //     <Head>
    //       <title>Job application tracker v1.0</title>
    //       <meta name="description" content="Your job application tracker" />
    //       <link rel="icon" href="/favicon.ico" />
    //     </Head>
    //     <AppHeader></AppHeader>
    //     <OptionBar></OptionBar>
    //     <JobInfoCardList />
    //     <AddJobForm />
    //   </div>
    // </JobListingContext>

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header></Header>
      </Grid>
      <Grid item xs={12}>
        <Form></Form>
      </Grid>
      <Grid item xs={0.72}></Grid>
      <Grid item xs={10.56}>
        <ApplicationTable />
      </Grid>
      <Grid item xs={0.72}></Grid>
      <Grid item xs={12}>
        <Item>last</Item>
      </Grid>
    </Grid>
  )
}
