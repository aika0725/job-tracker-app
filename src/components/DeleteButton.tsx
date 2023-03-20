import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useJobTrackerService } from '../hooks/useJobTrackerService'

type Props = {
  id: number
}

const DeleteButton = ({ id }: Props) => {
  const { deleteJobListing } = useJobTrackerService()

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    console.log(id)
    deleteJobListing(id)
  }
  return (
    <IconButton
      size="small"
      sx={{ margin: -1, marginRight: 0 }}
      onClick={(e) => handleOnClick(e, id)}
    >
      <DeleteIcon color="error" />
    </IconButton>
  )
}

export default DeleteButton
