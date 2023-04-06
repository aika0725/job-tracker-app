import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import { FormControl, MenuItem, Select } from '@mui/material'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#ffd803',
      contrastText: '#fff',
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
  }
}

// Update the Input's color prop options
declare module '@mui/material/Input' {
  interface InputPropsColorOverrides {
    neutral: true
  }
}
declare module '@mui/material/InputLabel' {
  interface InputLabelPropsColorOverrides {
    neutral: true
  }
}

type inputFieldProps = {
  id: string
  name: string
}

export const InputField = ({ id, name }: inputFieldProps) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="standard" size="small" sx={{ mx: 'auto' }}>
        <InputLabel htmlFor={id} color="neutral">
          {name}
        </InputLabel>
        <Input id={id} color="neutral" />
      </FormControl>
    </ThemeProvider>
  )
}

export const SelectField = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField color="neutral">neutral</TextField>
    </ThemeProvider>
  )
}
