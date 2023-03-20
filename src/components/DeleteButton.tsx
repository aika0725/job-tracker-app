import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import JobTrackerService from '../hooks/JobTrackerService'
import { IJobObject } from './JobInfoCardList'
import { useState } from 'react'

type Props = {
  id: number
}

const DeleteButton = ({ id }: Props) => {
  const [showAlert, setShowAlert] = useState(false)

  const handleDeleteOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    setShowAlert(true)
    console.log(id)
    // JobTrackerService.deleteJobListing(id).then(data => setJobListing(data))
    JobTrackerService.deleteJobListing(id)
  }

  const handleConfirmClick = () => {
    setShowAlert(false)
    JobTrackerService.deleteJobListing(id)
  }

  const handleCancelClick = () => {
    setShowAlert(false)
  }
  return (
    <IconButton
      size="small"
      sx={{ margin: -1, marginRight: 0 }}
      onClick={(e) => handleDeleteOnClick(e, id)}
    >
      <DeleteIcon color="error" />
    </IconButton>
  )
}

export default DeleteButton
