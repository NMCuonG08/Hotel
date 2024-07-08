package com.example.HotelManagerment.HotelInformation;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.sql.Blob;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class HotelImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;
    @Lob
    @Column(name = "hotelImage")
    private Blob Image;
}
