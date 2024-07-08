import React from 'react'
import { useState } from 'react'
import { bookRoom, getRoomByID } from '../utils/APIFunction'
import { useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'
import { FormControl,Form} from 'react-bootstrap'
import BookingSummary from './BookingSummary'
const BookingForm = () => {
    const[isValidated, setIsvalidated] = useState(false)
    const[isSubmitted, setIsSubmited] = useState(false)
    const[errorMessage, setErrorMessage] = useState("")
    const[roomPrice, setRoomPrice] = useState(0)
    const[booking, setBooking] = useState({guestName: "", guestEmail: "", checkInDate: "", checkOutDate: "",numOfAdults: "", numOfChildren: "", })
    const{roomID} = useParams()
    const navigate = useNavigate()


    const handleInputChange = (e) => {
        const{name, value} = e.target
        setBooking({...booking, [name]: value})
        setErrorMessage("")     
    }

    const[roomInfo, setRoomInfo] = useState({photo: "", roomType: "", price: ""})

    const getRoomPriceByID = async(roomID) => {
        try {
            const response = await getRoomByID(roomID)
            setRoomPrice(response.price)

         }
        catch(error) {
            setErrorMessage(error.message)
        }
    }
    
    useEffect(() => {
        getRoomPriceByID(roomID)
    }, [roomID])


    const CalculatePayment = () => {
        const checkInDate = moment(booking.checkInDate)
        const checkOutDate = moment(booking.checkOutDate)
        const diffInDays = checkOutDate.diff(checkInDate, 'days')
        const paymentPerDay = roomPrice ? roomPrice : 0
        return paymentPerDay * diffInDays
    }   
    

    const isGuestValid = () => {
        const adultCount = parseInt(booking.numOfAdults)
        const childCount = parseInt(booking.numOfChildren)
        const totalCount = adultCount + childCount
        return totalCount >= 1 && adultCount >= 1
    }

    const isCheckOutDate = () => {
        if(!moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))){
            setErrorMessage("Check out date must come before check in date")
            return false
        }
        else {
            setErrorMessage("")
            return true;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity() === false || !isGuestValid() || !isCheckOutDate()) {
            e.stopPropagation()
        }
        else {
            setIsSubmited(true)
        }
        setIsvalidated(true)
    }

    const handleBooking = async () => {
        try {
            const confirmCode = await bookRoom(roomID, booking)
            setIsSubmited(true)
            navigate("/booking-success", {state:{message: confirmCode}})
        }
        catch(err) {
            setErrorMessage(err)
            navigate("/booking-success", {state:{error: errorMessage}})
        }
    }

// == != === ## </> ++ -- 
  return (
    <>
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-md-6' >
                    <div className='card card-body mt-5'>
                        <h4 className='card card-title'> Reserve Room</h4>
                        <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="guestName">Full Name:</Form.Label>
                            <FormControl
                                required
                                type="text"
                                id="guestName"
                                name="guestName"
                                value={booking.guestName}
                                placeholder="Enter your full name"
                                onChange={handleInputChange}
                                isInvalid={!booking.guestName}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your full name
                            </Form.Control.Feedback>
                        </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="guestEmail"> Email: </Form.Label>
                                <FormControl required type="email" 
                                id = "guestEmail" 
                                name="guestEmail" 
                                value={booking.guestEmail} 
                                placeholder="Enter your email" 
                                onChange={handleInputChange}/>

                                <Form.Control.Feedback type="invalid">Please enter your email</Form.Control.Feedback>
                            </Form.Group>
                                
                            <fieldset style={{border: "2px"}}>
                                
                                <div className="row">
                                    <div className="col-6">                                 
                                        <Form.Label htmlFor="checkInDate"> Check-In Date: </Form.Label>
                                        <FormControl required type="date" 
                                        id="checkInDate" 
                                        name="checkInDate" 
                                        value={booking.checkInDate} 
                                        placeholder="Enter your Check-In Date" 
                                        onChange={handleInputChange}/>
                                        <Form.Control.Feedback type="invalid">Please select a Check-In Date</Form.Control.Feedback>                                
                                    </div>
                                    <div className="col-6">                                 
                                        <Form.Label htmlFor="checkOutDate"> Check-Out Date: </Form.Label> 
                                        <FormControl required type="date" 
                                        id="checkOutDate" 
                                        name="checkOutDate" 
                                        value={booking.checkOutDate} 
                                        placeholder="Enter your Check-Out Date" 
                                        onChange={handleInputChange}/>
                                        <Form.Control.Feedback type="invalid">Please select a Check-Out Date</Form.Control.Feedback>                                
                                    </div>
                                    {errorMessage &&  <p className='error-message text-danger'>{errorMessage}</p>}
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend> Number of Guest</legend>
                                <div className="row">
                                    <div className="col-6">                                 
                                        <Form.Label htmlFor="numOfAdults"> Adults: </Form.Label>
                                        <FormControl required type="number" 
                                        id = "numOfAdults" 
                                        name="numOfAdults" 
                                        value={booking.numOfAdults} 
                                        placeholder="0" 
                                        min={1}
                                        onChange={handleInputChange}/>
                                        <Form.Control.Feedback type="invalid">Please select at least one adult</Form.Control.Feedback>                                
                                    </div>
                                    <div className="col-6">                                 
                                        <Form.Label htmlFor="numOfChildren"> Children: </Form.Label>
                                        <FormControl required type="number" 
                                        id = "numOfChildren" 
                                        name="numOfChildren" 
                                        value={booking.numOfChildren} 
                                        min={0}
                                        placeholder={0} 
                                        onChange={handleInputChange}/>
                                                             
                                    </div>
                                </div>
                            </fieldset>
                                <div className="form-group mt-2 mb-2">
                                    <button type="submit" className="btn btn-hotel">Continue</button>
                                </div>
                        </Form>

                    </div>
                </div>
                <div className="col-md-6">
                    {isSubmitted && (
                        <BookingSummary 
                        booking={booking}
                        payment={CalculatePayment()}
                        isFormValid={isValidated}
                        onConfirm={handleBooking}
                      />
                    )}
                </div>      
            </div>
        </div>
    </>
  )
}

export default BookingForm