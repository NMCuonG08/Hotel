package com.example.otherdemo.User;

public class UserNotFoundException extends Throwable {

    public UserNotFoundException(String message) {
        super(message);
    }
}
