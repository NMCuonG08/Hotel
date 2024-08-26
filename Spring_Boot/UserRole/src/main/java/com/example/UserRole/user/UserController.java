package com.example.UserRole.user;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user){
        return new ResponseEntity<>(userService.add(user), HttpStatus.CREATED);
    }

}
