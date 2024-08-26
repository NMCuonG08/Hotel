package com.example.otherdemo;

import com.example.otherdemo.User.User;
import com.example.otherdemo.User.UserRespository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class UserRespositoryTest {

    @Autowired private UserRespository repo;

    @Test
    public void testAddNewUser(){

        User user = new User();
        user.setAddress("HN");
        user.setEmail("C11@gmail.com");
        user.setName("Chua");
        user.setPhoneNumber("123456389");
        user.setPassword("1222");

        User saveUser = repo.save(user);

    }

    @Test
    public void testFindALl(){

        Iterable<User> users = repo.findAll();

        for (User user : users){
            System.out.println(user);
        }

    }
    @Test
    public void testUpdate(){
        Integer UserID = 1;

        Optional<User> optionalUser = repo.findById(UserID);

        User user = optionalUser.get();
        user.setPassword("newpassword");
        repo.save(user);
        User UpdateUser = repo.findById(UserID).get();


    }
    @Test
    public void TestGet(){

        Integer UserID = 2;
        Optional<User> opUser = repo.findById(UserID);

        System.out.println(opUser.get());
    }
    @Test
    public void TestDelete(){
        Integer UserID = 2;
        repo.deleteById(UserID);
    }



}
