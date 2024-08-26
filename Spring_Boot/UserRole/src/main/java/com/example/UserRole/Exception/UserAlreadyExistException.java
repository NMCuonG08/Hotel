package com.example.UserRole.Exception;

public class UserAlreadyExistException extends RuntimeException {
    public UserAlreadyExistException(String s) {
        super(s);
    }
}
