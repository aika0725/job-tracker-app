import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { FormControl, MenuItem, Select } from '@mui/material'
import { useJobTrackerService } from '../../hooks/useJobTrackerService'
import {
  ApplicationStatus,
  IJobObject,
  useJobListings,
} from '../../hooks/useJobListings'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const formDataDefault: IJobObject = {
  position_title: '',
  company: '',
  website_link: '',
  location: '',
  application_status: ApplicationStatus.ApplicationSent,
}

type inputFieldProps = {
  id: string
  name: string
}

const InputField = ({ id, name }: inputFieldProps) => {
  return (
    <FormControl variant="standard" size="small" sx={{ mx: 'auto' }}>
      <InputLabel htmlFor={id}>{name}</InputLabel>
      <Input id={id} />
    </FormControl>
  )
}

const styleGrid = {
  display: 'flex',
  justifyContent: 'center',
}

const Form = () => {
  const { addJobListing } = useJobTrackerService()
  const { fetchJobListings } = useJobListings()

  const [formData, setFormData] = useState(formDataDefault)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log('sumbimt')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '88%',
          height: 'auto',
        },
      }}
    >
      <Paper
        elevation={3}
        variant="outlined"
        style={{ padding: '10px', border: '3px solid #272343' }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4} sx={styleGrid}>
              <InputField id="company" name="Company name"></InputField>
            </Grid>
            <Grid item xs={4} sx={styleGrid}>
              <InputField id="position" name="Position"></InputField>
            </Grid>
            <Grid item xs={4} sx={styleGrid}>
              <InputField id="location" name="Location"></InputField>
            </Grid>
            <Grid item xs={4} sx={styleGrid}>
              <div>
                <FormControl sx={{ m: 1, minWidth: 182 }} size="small">
                  <InputLabel id="demo-select-small">Status</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={1}
                    label="status"
                  >
                    <MenuItem value={1}>Applied</MenuItem>
                    <MenuItem value={2}>In progress</MenuItem>
                    <MenuItem value={3}>Offer</MenuItem>
                    <MenuItem value={4}>Rejected</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={4} sx={styleGrid}>
              <InputField id="website" name="Website"></InputField>
            </Grid>
            <Grid item xs={4} sx={styleGrid}>
              <InputField id="note" name="Note"></InputField>
            </Grid>
            <Grid item xs={8.8}></Grid>
            <Grid item xs={1.2}>
              <Button variant="text" size="small" style={{ color: '#272343' }}>
                Reset
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="contained"
                type="submit"
                size="small"
                style={{ background: '#ffd803', color: '#272343' }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  )
}

export default Form
