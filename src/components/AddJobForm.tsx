import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { MenuItem } from '@mui/material'

const AddJobForm = () => {
  const [id, setId] = useState(0)
  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState({
    position_title: '',
    company: '',
    website_link: '',
    location: '',
    application_status: 'application sent',
  })
  console.log(JSON.stringify(formData))
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log('submit!')
    try {
      const res = await fetch('https://localhost:7165/api/JobTracker/Create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const resJson = await res.json()
      if (res.status === 200) {
        setFormData({
          position_title: '',
          company: '',
          website_link: '',
          location: '',
          application_status: 'application sent',
        })
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
      <div>Add a new job application here</div>
      <div>
        <label>Position title: </label>
        <TextField
          id="position-title"
          variant="standard"
          onChange={(e) => {
            setFormData({ ...formData, position_title: e.target.value })
          }}
        />
      </div>
      <div>
        <label>Company: </label>
        <TextField
          id="company"
          variant="standard"
          onChange={(e) => {
            setFormData({ ...formData, company: e.target.value })
          }}
        />
      </div>
      <div>
        <label>Location: </label>
        <TextField
          id="location"
          variant="standard"
          onChange={(e) => {
            setFormData({ ...formData, location: e.target.value })
          }}
        />
      </div>
      <div>
        <label>Website: </label>
        <TextField
          id="website"
          variant="standard"
          onChange={(e) => {
            setFormData({ ...formData, website_link: e.target.value })
          }}
        />
      </div>
      <div>
        <label>Application status: </label>
        <TextField
          id="select-application-status"
          select
          defaultValue="application sent"
          variant="standard"
          onChange={(e) => {
            setFormData({ ...formData, application_status: e.target.value })
          }}
        >
          <MenuItem value={'application sent'}>Application sent</MenuItem>
          <MenuItem value={'in progress'}>In progress</MenuItem>
          <MenuItem value={'offer'}>Offer</MenuItem>
          <MenuItem value={'rejection'}>Rejection</MenuItem>
        </TextField>
      </div>
      <Button variant="contained" type="submit">
        Save
      </Button>
    </form>
  )
}

export default AddJobForm
