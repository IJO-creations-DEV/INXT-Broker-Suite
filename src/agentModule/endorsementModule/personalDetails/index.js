import React from 'react'
import { useLocation } from 'react-router-dom'

const PersonalDetails = () => {
  const location = useLocation();
  console.log(location, "asd")
  return (
    <div>
      PersonalDetails
    </div>
  )
}

export default PersonalDetails
