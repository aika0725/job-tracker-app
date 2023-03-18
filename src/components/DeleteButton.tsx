import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import styled from '@emotion/styled'
import { Button } from '@mui/material'

const ButtonContainer = styled.button(
  {
    borderRadius: '25px',
  },
  (props) => ({
    backgroundColor: props.color,
  }),
)

const DeleteButton = () => (
  <ButtonContainer>
    <DeleteIcon color="error" />
  </ButtonContainer>
)

export default DeleteButton
