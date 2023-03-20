import axios, { AxiosError } from 'axios'

export const JobTrackerService = () => {
  const JOB_APPLICATION_TRACKER_API_BASE_URL =
    'https://localhost:7165/api/JobTracker'

  const getAllJobApplications = async () => {
    const res = await axios.get(
      JOB_APPLICATION_TRACKER_API_BASE_URL + '/' + 'GetAll',
    )
    return res
  }

  const deleteJobListing = async (JobListingId: number) => {
    try {
      const response = await axios.delete(
        JOB_APPLICATION_TRACKER_API_BASE_URL + '/Delete/' + JobListingId,
      )

      return response.data
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
    }
  }

  return { getAllJobApplications, deleteJobListing }
}

class JobTrackerService1 {
  //TODO
  // createJobListing(formData){
  //     return axios.post(JOB_APPLICATION_TRACKER_API_BASE_URL, formData);
  // }
  // updateJobListing(formData, JobListingId){
  //     return axios.put(JOB_APPLICATION_TRACKER_API_BASE_URL + '/' + formData, JobListingId);
  // }
}
