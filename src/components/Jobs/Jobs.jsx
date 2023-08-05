import React, { useEffect } from 'react'
import { JOBS } from 'modules/api/endpoints';
import api from 'modules/api/api';


const Jobs = () => {
  useEffect(async () => {
    const response = await api.fetch(JOBS);

    console.log(response)
  }, [])
  return (
    <div>Jobs</div>
  )
}

export default Jobs