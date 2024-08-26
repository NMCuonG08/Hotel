package com.example.Project_HotelManagement.User;

import com.example.Project_HotelManagement.Room.Room;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 50,name="email")
    private String email;
    @Column(nullable = false,length = 15,name="password")
   private String password;

    public User(Integer id, String email, String password) {
        this.id = id;

        this.email = email;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public User() {
    }

    @ManyToMany(mappedBy = "users")
    private Set<Room> rooms= new HashSet<>();
}
