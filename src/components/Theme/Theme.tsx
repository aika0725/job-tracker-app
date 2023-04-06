import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

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

// Update the Button's color prop options
declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    neutral: true
  }
}

export default function CustomColor() {
  return (
    <ThemeProvider theme={theme}>
      <TextField color="neutral">neutral</TextField>
    </ThemeProvider>
  )
}
