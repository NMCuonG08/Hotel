package com.example.Project_HotelManagement.Room;

import com.example.Project_HotelManagement.Hotel.Hotel;
import com.example.Project_HotelManagement.User.User;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="Room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, length = 45, name = "type")
    private String type;
    @Column(nullable = false, name = "beb")
    private Integer bed;
    @Column(nullable = false, name = "price")
    private Double price;
    @Column(nullable = false, name = "booked")
    private boolean booked;
    @Column(nullable = false, length = 45, name = "hotel_name")
    private String hotel_name;
    @Column(nullable = false, length = 100, name = "address")
    private String address;
    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;


    @ManyToMany
    @JoinTable(
            name="Rent",
            joinColumns = @JoinColumn(name="Hotel_id"),
            inverseJoinColumns = @JoinColumn(name="User_id")
    )
    private Set<User> users= new HashSet<>();

    public Room() {
    }

    public Room(Integer id, String type, Integer bed, Double price, boolean booked, String hotel_name, String address) {
        this.id = id;
        this.type = type;
        this.bed = bed;
        this.price = price;
        this.booked = booked;
        this.hotel_name = hotel_name;
        this.address = address;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getBed() {
        return bed;
    }

    public void setBed(Integer bed) {
        this.bed = bed;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public boolean isBooked() {
        return booked;
    }

    public void setBooked(boolean booked) {
        this.booked = booked;
    }

    public String getHotel_name() {
        return hotel_name;
    }

    public void setHotel_name(String hotel_name) {
        this.hotel_name = hotel_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}

