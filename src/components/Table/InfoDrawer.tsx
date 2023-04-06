import { useState } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

type DrawerProps = {
  isOpen: boolean
  onClose: () => void
}

const InfoDrawer = ({ isOpen, onClose }: DrawerProps) => {
  const handleDrawerClose = () => {
    onClose()
  }

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleDrawerClose}
      PaperProps={{
        sx: { width: '40%' },
      }}
    >
      <List>
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary="Close Drawer" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Item 2" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default InfoDrawer
