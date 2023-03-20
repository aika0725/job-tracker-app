import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { MenuItem } from '@mui/material'
import { useJobTrackerService } from '../hooks/useJobTrackerService'
import {
  ApplicationStatus,
  IJobObject,
  useJobListings,
} from '../hooks/useJobListings'

export const formDataDefault: IJobObject = {
  position_title: '',
  company: '',
  website_link: '',
  location: '',
  application_status: ApplicationStatus.ApplicationSent,
}

const AddJobForm = () => {
  const { addJobListing } = useJobTrackerService()
  const { fetchJobListings } = useJobListings()
  // const [id, setId] = useState(0)
  // const [message, setMessage] = useState('')

  const [formData, setFormData] = useState(formDataDefault)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await addJobListing(formData)
      .then((res) => {
        setFormData(formDataDefault)
        fetchJobListings()
        console.log('success', res)
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>Add a new job application here</div>
      <div>
        <label>Position title: </label>
        <TextField
          id="position-title"
          variant="standard"
          value={formData.position_title}
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
          value={formData.company}
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
          value={formData.location}
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
          value={formData.website_link}
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
          value={formData.application_status}
          onChange={(e) => {
            setFormData({
              ...formData,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              application_status: e.target.value as any,
            })
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
