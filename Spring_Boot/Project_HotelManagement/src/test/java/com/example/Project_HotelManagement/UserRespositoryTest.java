package com.example.Project_HotelManagement;

import com.example.Project_HotelManagement.User.User;
import com.example.Project_HotelManagement.User.UserResponsitory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class UserRespositoryTest {
    @Autowired UserResponsitory userResponsitory;
    @Test
    public void testAddNewUser(){
        User user= new User();
        user.setEmail("ngcuong1182004@gmail.com");
        user.setPassword("12345");
        User saveUser = userResponsitory.save(user);

    }

}
