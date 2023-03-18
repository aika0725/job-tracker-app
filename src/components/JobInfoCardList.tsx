import * as React from 'react'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import JobInfoCard from './JobInfoCard'
import ListTesting from './ListTesting'

export default function JobInfoCardList() {
  const [jobListings, setJobListing] = useState<[]>([])

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
      <ListTesting list={jobListings}></ListTesting>
    </Box>
  )
}
