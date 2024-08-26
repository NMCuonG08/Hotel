package com.example.otherdemo.User;

import jakarta.persistence.*;

@Entity
@Table(name= "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, length = 45 , name = "name")
    private String name;
    @Column(nullable = false, length = 100, name="address" )
    private String address;
    @Column(nullable = false, length = 13 ,name="phoneNumber")
    private String phoneNumber;

    public User(Integer id, String name, String address, String phoneNumber, String email, String password) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public User() {
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

    @Column(nullable = false, length = 45 ,name="email")
    private String email;
    @Column(nullable = false, length = 15 ,name="password")
    private String password;

}
