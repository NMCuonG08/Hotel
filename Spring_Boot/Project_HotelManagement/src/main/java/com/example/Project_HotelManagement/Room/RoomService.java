package com.example.Project_HotelManagement.Room;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    @Autowired private RoomResponsitory repo;

    public List<Room>ListAll(){return (List<Room>) repo.findAll();}

}
