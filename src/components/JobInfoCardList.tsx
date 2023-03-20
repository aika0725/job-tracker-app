import * as React from 'react'
import Box from '@mui/material/Box'
import ListTesting from './ListTable'
import { useJobListings } from '../hooks/useJobListings'

export default function JobInfoCardList() {
  const { jobListings } = useJobListings()

  return (
    <Box sx={{ width: '100%' }}>
      <ListTesting list={jobListings}></ListTesting>
    </Box>
  )
}
