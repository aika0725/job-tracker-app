import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useJobTrackerService } from '../hooks/useJobTrackerService'
import { useJobListings } from '../hooks/useJobListings'

type Props = {
  id: number | undefined
}

const DeleteButton = ({ id }: Props) => {
  const { deleteJobListing } = useJobTrackerService()
  const { jobListings, setJobListings } = useJobListings()

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    const filterJobListings = jobListings.filter(
      (jobListing) => jobListing.id !== id,
    )

    deleteJobListing(id).then(() => {
      setJobListings(filterJobListings)
    })
  }
  return (
    <IconButton
      size="small"
      sx={{ margin: -1, marginRight: 0 }}
      onClick={(e) => (id == undefined ? '' : handleOnClick(e, id))}
    >
      <DeleteIcon color="error" />
    </IconButton>
  )
}

export default DeleteButton
