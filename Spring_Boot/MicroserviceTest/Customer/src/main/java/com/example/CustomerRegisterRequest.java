package com.example;

public record CustomerRegisterRequest(
        String firstName,
        String lastName,
        String email
) {
}
