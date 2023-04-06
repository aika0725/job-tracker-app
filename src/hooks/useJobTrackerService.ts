import axios, { AxiosError } from 'axios'
import { useEffect } from 'react'
import { IJobObject } from './useJobListings'

export const useJobTrackerService = () => {
  const JOB_APPLICATION_TRACKER_API_BASE_URL =
    'https://localhost:7165/api/JobTracker'

  const baseConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const getAllJobListings = async () => {
    const response = await axios.get(
      JOB_APPLICATION_TRACKER_API_BASE_URL + '/' + 'GetAll',
    )

    return response
  }

  const addJobListing = async (formData: IJobObject) => {
    const response = await axios.post(
      JOB_APPLICATION_TRACKER_API_BASE_URL + '/create',
      formData,
      baseConfig,
    )

    return response
  }

  const deleteJobListing = async (JobListingId: number) => {
    const response = await axios
      .delete(JOB_APPLICATION_TRACKER_API_BASE_URL + '/Delete/' + JobListingId)
      .catch((error: AxiosError) => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log('Unknown error: ', error.config)
      })
    console.log({ response })
    return response
  }

  // useEffect(() => {
  //   console.log('from tracker service')
  // }, [addJobListing])

  return {
    getAllJobListings,
    deleteJobListing,
    addJobListing,
  }
}
