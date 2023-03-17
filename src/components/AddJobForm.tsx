import * as React from 'react'
import styled from '@emotion/styled'
import { ApplicationStatus } from './JobInfoCard'
import Button from '@mui/material/Button'
import NativeSelect from '@mui/material/NativeSelect'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { MenuItem } from '@mui/material'
import { IJobObject } from './JobInfoCard'

// export interface IJobObject {
//     id: number
//     position_title: string
//     company: string
//     application_status: ApplicationStatus
//     location: string
//   }

const AddJobForm = () => {
  const [id, setId] = useState(0)
  const [positionTitle, setPositionTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState({
    position_title: '',
    company: '',
    location: '',
    application_status: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log('submit!')
    try {
      const res = await fetch('https://localhost:7165/api/JobTracker/Create', {
        method: 'POST',
        body: JSON.stringify({
          position_title: positionTitle,
          company: company,
          location: location,
          application_status: status,
        }),
      })
      const resJson = await res.json()
      if (res.status === 200) {
        setPositionTitle('')
        setCompany('')
        setLocation('')
        setStatus('')
        setMessage('Added successfully')
      } else {
        setMessage('Some error occured, please check your inputs')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>Add a new job listing here</div>
      <div>
        <label>Position title: </label>
        <TextField
          id="position-title"
          variant="standard"
          onChange={(e) => {
            setPositionTitle(e.target.value)
          }}
        />
      </div>
      <div>
        <label>Company: </label>
        <TextField
          id="company"
          variant="standard"
          onChange={(e) => {
            setCompany(e.target.value)
          }}
        />
      </div>
      <div>
        <label>Location: </label>
        <TextField id="location" variant="standard" />
      </div>
      <div>
        <label>Application status: </label>
        <TextField
          id="select-application-status"
          select
          defaultValue="0"
          variant="standard"
          onChange={(e) => {
            setStatus(e.target.value)
          }}
        >
          <MenuItem value={0}>Application sent</MenuItem>
          <MenuItem value={1}>In progress</MenuItem>
          <MenuItem value={2}>Offer</MenuItem>
          <MenuItem value={3}>Rejection</MenuItem>
        </TextField>
      </div>
      <Button variant="contained" type="submit">
        Save
      </Button>
    </form>
  )
}

export default AddJobForm
