import * as React from 'react'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import JobInfoCard from './JobInfoCard'

export default function JobInfoCardList() {
  const [jobListings, setJobListing] = useState([])

  const fetchData = async () => {
    return await fetch('https://localhost:7165/api/JobTracker/GetAll')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setJobListing(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <Stack flex-start="true" spacing={2}>
        {jobListings.map((jobListing, i) => {
          return <JobInfoCard index={i} jobListing={jobListing} key={i} />
        })}
      </Stack>
    </Box>
  )
}
