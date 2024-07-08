package com.example.HotelManagerment.User;


import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    private Long ID;
    private String Name;
    private String Email;
    private String Password;
    private String National;
    private String Genders;
    private String IDCardNumber;
    private String Address;
    private String PhoneNumber;
    private Date BirthDay;
    private String Role;
    private String
}
