import React, { useState } from 'react'

const UserBookingHistory = () => {
    const[booking, setBooking] = useState([])
    const[currentPage, setCurrentPage] = useState(1)
    const[roomPerPage] = useState(8)
    const[isLoading, setIsLoading] = useState(false)
    const[successMessage, setSuccessMessage] = useState("")
    


  return (
    <div>UserBookingHistory</div>
  )
}

export default UserBookingHistory