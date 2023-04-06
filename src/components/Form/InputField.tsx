import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { MenuItem } from '@mui/material'
import { useState } from 'react'

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
  }
}

const theme = createTheme({
  palette: {
    neutral: {
      main: '#ffd803',
      contrastText: '#272343',
    },
  },
})

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
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
      <TextField
        id={id}
        color="neutral"
        label={name}
        size="small"
        variant="standard"
      />
    </ThemeProvider>
  )
}

export const SelectField = () => {
  const [value, setValue] = useState(1)

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="standard-select-currency"
        select
        label="Status"
        value={value}
        onChange={handleChange}
        variant="standard"
        color="neutral"
        size="small"
        sx={{ minWidth: 182 }}
      >
        <MenuItem value={1}>Applied</MenuItem>
        <MenuItem value={2}>In progress</MenuItem>
        <MenuItem value={3}>Offer</MenuItem>
        <MenuItem value={4}>Rejected</MenuItem>
      </TextField>
    </ThemeProvider>
  )
}
