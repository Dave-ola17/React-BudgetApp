import React from 'react'

// react router data imports
import { useLoaderData } from 'react-router-dom';

// helperFunctions
import { fetchData } from '../helpers'

// Loader
export function dashboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
    const { userName } = useLoaderData()
  return (
    <div>
        <h1> {userName} </h1>
        This is the Dashboard</div>
  )
}

export default Dashboard