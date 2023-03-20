import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Chip from '../Chip'
import DeleteButton from '../DeleteButton'

interface Column {
  id: 'order' | 'position' | 'company' | 'location' | 'website' | 'status'
  label: string
  minWidth?: number
  align?: 'center'
  listItem: string
}

const columns: readonly Column[] = [
  { id: 'order', label: 'No.', minWidth: 50, listItem: 'id' },
  {
    id: 'position',
    label: 'Position title',
    minWidth: 100,
    listItem: 'position_title',
  },
  { id: 'company', label: 'Company', minWidth: 100, listItem: 'company' },
  {
    id: 'location',
    label: 'Location',
    minWidth: 100,
    align: 'center',
    listItem: 'location',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'center',
    listItem: 'application_status',
  },
  {
    id: 'website',
    label: 'Website',
    minWidth: 100,
    align: 'center',
    listItem: 'website_link',
  },
]
enum ApplicationStatus {
  ApplicationSent = 'application sent',
  InProgress = 'in progress',
  Offer = 'offer',
  Rejection = 'rejection',
  Placeholder = 'status',
}
interface IJobObject {
  [key: string]: any
  id: number
  position_title: string
  company: string
  application_status: ApplicationStatus
  location: string
}

type Props = {
  list: [IJobObject]
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
export const ListTable = ({ list }: Props) => {
  console.log(list)

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell align="center" style={{ minWidth: 150 }}>
                Options
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {list.map((listing, i) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                  {columns.map((column) => {
                    let value = listing[column.listItem]
                    if (column.listItem == 'id') {
                      return (
                        <TableCell key={column.listItem} align={column.align}>
                          {i + 1}
                        </TableCell>
                      )
                    } else if (column.listItem == 'application_status') {
                      const isStatusValid =
                        Object.values(ApplicationStatus).includes(value)
                      return (
                        <TableCell key={column.listItem} align={column.align}>
                          <Chip
                            color={
                              isStatusValid
                                ? setChipColor4Application(value)
                                : setChipColor4Application(
                                    ApplicationStatus.Placeholder,
                                  )
                            }
                            content={
                              isStatusValid
                                ? value
                                : ApplicationStatus.Placeholder
                            }
                          />
                        </TableCell>
                      )
                    }
                    return (
                      <TableCell key={column.listItem} align={column.align}>
                        {value}
                      </TableCell>
                    )
                  })}
                  <TableCell align="center">
                    <DeleteButton id={listing.id} /> open
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
