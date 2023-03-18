import * as React from 'react'
import { SyntheticEvent, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button, Divider, Stack } from '@mui/material'
//import Chip from '@mui/material/Chip'
import Chip from './Chip'
import { JobInfoDetailDisplay } from './JobInfoDetailDisplay'
import DeleteButton from './DeleteButton'

type Props = {
  index: number
  positionTitle?: string
  company?: string
  location?: string
  applicationStatus?: ApplicationStatus
  note?: string
  jobListing: IJobObject
}

export interface IJobObject {
  id: number
  position_title: string
  company: string
  application_status: ApplicationStatus
  location: string
}

export enum ApplicationStatus {
  ApplicationSent = 'application sent',
  InProgress = 'in progress',
  Offer = 'offer',
  Rejection = 'rejection',
  Placeholder = 'status',
}

export default function JobInfoCard({ index, jobListing }: Props) {
  const [expanded, setExpanded] = useState<string | false>(false)

  const {
    application_status: applicationStatus,
    company: companyName,
    id,
    location,
    position_title: positionTitle,
  } = jobListing

  const panelId = `panel-${index}`

  const isStatusValid =
    Object.values(ApplicationStatus).includes(applicationStatus)

  const handleChange =
    (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  const setChipColor4Application = (status: ApplicationStatus) => {
    let color = '#f1f1f1'
    switch (status) {
      case ApplicationStatus.ApplicationSent || ApplicationStatus.Placeholder:
        color = '#f1f1f1'
        break
      case ApplicationStatus.InProgress:
        color = '#FFD700'
        break
      case ApplicationStatus.Offer:
        color = '#B4EEB4'
        break
      case ApplicationStatus.Rejection:
        color = '#FA8072'
    }
    return color
  }

  return (
    <div>
      <Accordion
        expanded={expanded === panelId}
        onChange={handleChange(panelId)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${panelId}-content`}
          id={`${panelId}-header`}
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{ width: '60%', flexShrink: 0 }}
          >
            <Typography>{index + 1}</Typography>
            <Typography>{positionTitle}</Typography>
            <Typography>{companyName}</Typography>
            <Typography>{location}</Typography>
          </Stack>
          <Chip
            color={
              isStatusValid
                ? setChipColor4Application(applicationStatus)
                : setChipColor4Application(ApplicationStatus.Placeholder)
            }
            content={
              isStatusValid ? applicationStatus : ApplicationStatus.Placeholder
            }
          />
        </AccordionSummary>
        <AccordionDetails>
          <JobInfoDetailDisplay></JobInfoDetailDisplay>
          <div>
            <Button>Edit</Button>
            <Button>Save</Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
