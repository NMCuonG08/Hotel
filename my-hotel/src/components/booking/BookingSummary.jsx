import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

const BookingSummary = ({ booking, payment, isFormValid, onConfirm }) => {
    const checkInDate = moment(booking.checkInDate);
    const checkOutDate = moment(booking.checkOutDate);
    const numberOfDays = checkOutDate.diff(checkInDate, "days");
    const [isConfirmBooking, setIsConfirmBooking] = useState(false);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

   

    const handleConfirmBooking = () => {
        setIsProcessingPayment(true);
        setTimeout(() => {
            setIsConfirmBooking(true);
            setIsProcessingPayment(false);
            onConfirm()
        }, 3000); // Simulates a network request delay
    };


    return (
        <div className="card card-body mt-5">
            <h4>Reservation Summary</h4>
            <p>Full Name: <strong>{booking.guestName}</strong></p>
            <p>Email: <strong>{booking.guestEmail}</strong></p>
            <p>Check-In Date: <strong>{moment(booking.checkInDate).format("MMM Do YYYY")}</strong></p>
            <p>Check-Out Date: <strong>{moment(booking.checkOutDate).format("MMM Do YYYY")}</strong></p>
            <p>Number of Days: <strong>{numberOfDays}</strong></p>
            <h2>Number of Guests</h2>
            <p>Adults: <strong>{booking.numOfAdults}</strong></p>
            <p>Children: <strong>{booking.numOfChildren}</strong></p>

            {payment > 0 ? (
                <>
                    <p>Total Payment: <strong>${payment}</strong></p>
                    {isFormValid && !isConfirmBooking ? (
                        <Button variant="success" onClick={handleConfirmBooking} disabled={isProcessingPayment}>
                            {isProcessingPayment ? (
                                <>
                                    <span className='spinner-border spinner-border-sm mr-2' role='status' aria-hidden="true"></span>
                                    Processing...
                                </>
                            ) : (
                                "Confirm booking and proceed to payment"
                            )}
                        </Button>
                    ) : (
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="spinner-border text-primary" role="status">
                                <span className='sr-only'>Loading...</span>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <p className="text-danger">Check-Out date must be after Check-In date.</p>
            )}
        </div>
    );
}

export default BookingSummary;
