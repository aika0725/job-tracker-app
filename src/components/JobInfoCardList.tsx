import * as React from 'react'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import ListTesting from './JobListDisplay/ListTable'

export interface IJobObject {
  id: number
  position_title: string
  company: string
  application_status: ApplicationStatus
  location: string
}

export enum ApplicationStatus {
  ApplicationSent = 'application sent',
  InProgress = 'in progress',
  Offer = 'offer',
  Rejection = 'rejection',
  Placeholder = 'status',
}
export default function JobInfoCardList() {
  const [jobListings, setJobListing] = useState<[IJobObject]>([
    {
      id: 0,
      position_title: '',
      company: '',
      application_status: ApplicationStatus.Placeholder,
      location: '',
    },
  ])

  useEffect(() => {
    JobTrackerService.getJobList().then((res) => setJobListing(res.data))
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <ListTesting list={jobListings}></ListTesting>
    </Box>
  )
}
