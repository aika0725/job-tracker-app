import * as React from 'react'
import styled from '@emotion/styled'
import { ApplicationStatus } from './JobInfoCard'

type StyledChipProps = {
  status?: boolean
  offer?: boolean
  rejection?: boolean
}
type Props = {
  color: string
  content: ApplicationStatus
}

const ChipContainer = styled.div<StyledChipProps>(
  {
    display: 'inline-block',
    padding: '5px 15px',
    fontSize: '14px',
    borderRadius: '25px',
  },
  (props) => ({
    backgroundColor: props.color,
  }),
)
const Chip = ({ color, content }: Props) => (
  <ChipContainer color={color}>{content}</ChipContainer>
)

export default Chip
