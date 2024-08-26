package com.example.Project_HotelManagement;


import com.example.Project_HotelManagement.Room.Room;
import com.example.Project_HotelManagement.Room.RoomResponsitory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class RoomRespositoryTest {
    @Autowired private RoomResponsitory repo;
    @Test
    public void TestAddNewRoom(){
        Room room = new Room();
        room.setAddress("Kyoto, Japan");
        room.setBed(1);
        room.setType("Couple");
        room.setPrice(150.0);
        room.setBooked(false);
        room.setHotel_name("Japan hotel");

        Room SaveRoom =repo.save(room);

    }

}
