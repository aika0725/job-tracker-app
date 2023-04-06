import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

//TODO change the application status type
type Props = {
  index: number
  positionTitle?: string
  company?: string
  location?: string
  applicationStatus?: string
  note?: string
}
export const JobInfoDetailDisplay = () => {
  return (
    <>
      <Typography>Website:</Typography>
      <Typography>Application status:</Typography>
      <Typography>Applied date:</Typography>
      <Typography>Days since applying:</Typography>
      <Typography>Intervew 1/assessment date:</Typography>
      <Typography>Days since Interview 1:</Typography>
      <Typography>Interview 2 date:</Typography>
      <Typography>Days since Interview 2:</Typography>
      <Typography>Interview 3 date:</Typography>
      <Typography>Days since Interview 3:</Typography>
    </>
  )
}
