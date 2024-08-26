package com.example.Project_HotelManagement.Hotel;

import com.example.Project_HotelManagement.Room.Room;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="Hotel")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, length = 50, name="name")
    private String name;
    @Column(nullable = false, length = 30, name="country")
    private String country;
    @Column(nullable = false, length = 100, name="address")
    private String address;
    @Column(nullable = false, length = 15, name="phoneNumber")
    private String phoneNumber;
    @Column(nullable = false, length = 45, name="email")
    private String email;
    @Column(nullable = false,length = 25, name="password")
    private String password;

    public Hotel() {
    }

    public Hotel(Integer id, String name, String country, String address, String phoneNumber, String email, String password) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @OneToMany(mappedBy = "hotel")
    private Set<Room> rooms = new HashSet<>();


    @ManyToMany
    @JoinTable(
            name="Manage",
            joinColumns = @JoinColumn(name="hotel_id"),
            inverseJoinColumns = @JoinColumn(name="hotelmanager_id")
    )
    private Set<HotelManager> managers = new HashSet<>();
}
