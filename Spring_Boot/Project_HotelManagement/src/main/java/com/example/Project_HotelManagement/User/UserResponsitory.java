package com.example.Project_HotelManagement.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.query.Param;

public interface UserResponsitory extends JpaRepository<User, Integer> {
    @Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
    User findByUsernameAndPassword(@Param("email") String email, @Param("password") String password);
}
