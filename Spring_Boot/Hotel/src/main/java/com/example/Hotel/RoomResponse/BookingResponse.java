package com.example.Hotel.RoomResponse;


import com.example.Hotel.Model.Room;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookedRoomResponse {

    private  Long BookingID;

    private LocalDate CheckinDate;

    private  LocalDate CheckoutDate;

    private String GusetName;

    private String GuestEmail;

    private Integer NumOfAdults;

    private Integer NumOfChildren;

    private Integer TotalGuest;

    private String BookingConfirmCode;

    private RoomResponse  room;

    public BookedRoomResponse(Long bookingID, LocalDate checkinDate, LocalDate checkoutDate, String bookingConfirmCode) {
        BookingID = bookingID;
        CheckinDate = checkinDate;
        CheckoutDate = checkoutDate;
        BookingConfirmCode = bookingConfirmCode;
    }
}
