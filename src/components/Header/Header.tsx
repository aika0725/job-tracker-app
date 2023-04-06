import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'

const Header = () => {
  const [auth, setAuth] = React.useState(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} style={{ background: '#272343' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JAT
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Your job application tracker
          </Typography>
          {auth ? (
            <div>
              <IconButton
                size="large"
                onClick={() => console.log('click icon button')}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <Typography>Login</Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
