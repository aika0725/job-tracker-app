import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react'
import { useJobTrackerService } from './useJobTrackerService'

export const JobListingCtx = createContext({} as JobListingContextData)

type Props = {
  children: ReactNode
}

export enum ApplicationStatus {
  ApplicationSent = 'application sent',
  InProgress = 'in progress',
  Offer = 'offer',
  Rejection = 'rejection',
  Placeholder = 'status',
}

export interface IJobObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  id?: number
  position_title: string
  company: string
  application_status: ApplicationStatus
  location: string
}

type JobListingContextData = {
  jobListings: IJobObject[]
  setJobListings: React.Dispatch<React.SetStateAction<IJobObject[]>>
  fetchJobListings: () => Promise<void>
}

// Component
export const JobListingContext = ({ children }: Props) => {
  const { getAllJobListings } = useJobTrackerService()

  const [jobListings, setJobListings] = useState<IJobObject[]>([])

  const fetchJobListings = async () => {
    await getAllJobListings()
      .then((res) => {
        if (res.status === 204) {
          setJobListings([])
        } else {
          setJobListings(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchJobListings()
  }, [])

  return (
    <JobListingCtx.Provider
      value={{ jobListings, setJobListings, fetchJobListings }}
    >
      {children}
    </JobListingCtx.Provider>
  )
}

// Hook
export const useJobListings = () => {
  const context = useContext(JobListingCtx)

  if (!context) {
    throw new Error('useJobListings must be used within a JobListingProvider')
  }

  return context
}
