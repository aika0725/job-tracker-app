import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { IconButton } from '@mui/material'
import Link from 'next/link'
import TextField from '@mui/material/TextField'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MyDrawer from './InfoDrawer'

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#bae8e8',
    color: '#2d334a',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#e3f6f5',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const ApplicationTable = () => {
  const [rowIndex, setRowIndex] = useState(-1)
  const [columnIndex, setColumnIndex] = useState(-1)

  const [rows, setRows] = useState([
    {
      company: 'company1',
      position: 'position1',
      location: 'location1',
      status: 1,
      website: 'www.google.com',
      note: 'note1',
      date: '',
    },
    {
      company: 'company2',
      position: 'position2',
      location: 'location2',
      status: 2,
      website: 'www.2.com',
      note: 'note2',
      date: '',
    },
    {
      company: 'company2',
      position: 'position2',
      location: 'location2',
      status: 2,
      website: 'www.2.com',
      note: 'note2',
      date: '',
    },
  ])

  const handleTableTextFieldChange = (
    rowIndex: number,
    colName: 'company',
    value: string,
  ) => {
    rows[rowIndex][colName] = value
  }

  const handleExit = () => {
    setRowIndex(-1)
    setColumnIndex(-1)
  }

  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <TableContainer component={Paper}>
      <MyDrawer isOpen={drawerOpen} onClose={handleDrawerClose}></MyDrawer>
      <Table sx={{ minWidth: 700 }} aria-label="application-table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell>Position</StyledTableCell>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Link</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="center">Operation</StyledTableCell>
          </TableRow>
        </TableHead>
        <ClickAwayListener onClickAway={() => handleExit()}>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index)
                    setColumnIndex(1)
                  }}
                >
                  {rowIndex === index && columnIndex === 1 ? (
                    <TextField
                      size="small"
                      sx={{ padding: '0px' }}
                      defaultValue={rows[index]['company']}
                      onChange={(e) => {
                        handleTableTextFieldChange(
                          index,
                          'company',
                          e.target.value,
                        )
                      }}
                    />
                  ) : (
                    row.company
                  )}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index)
                    setColumnIndex(2)
                  }}
                >
                  {row.position}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index)
                    setColumnIndex(3)
                  }}
                >
                  {row.location}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index)
                    setColumnIndex(4)
                  }}
                >
                  {row.status}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index)
                    setColumnIndex(5)
                  }}
                >
                  {/* <Link href={data.website} passHref={true}> */}
                  <IconButton
                    size="small"
                    component="a"
                    href={row.website}
                    target="_blank"
                  >
                    <OpenInNewIcon fontSize="small" />
                  </IconButton>
                  {/* </Link> */}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  onClick={() => {
                    setRowIndex(index)
                    setColumnIndex(7)
                  }}
                >
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    aria-label="MoreHorizIcon"
                    size="small"
                    onClick={handleDrawerOpen}
                  >
                    <MoreHorizIcon fontSize="small" color="action" />
                  </IconButton>

                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => {
                      rows.splice(index, 1)
                      setRows([...rows])
                    }}
                  >
                    <DeleteIcon fontSize="small" color="error" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </ClickAwayListener>
      </Table>
    </TableContainer>
  )
}

export default ApplicationTable
