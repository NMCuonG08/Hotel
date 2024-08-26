package com.example.Project_HotelManagement.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired private UserResponsitory repo;

    public List<User> ListAll(){return (List<User>) repo.findAll();}
}
