package com.example.UserRole.user;

import com.example.UserRole.roles.Role;

import java.util.Set;

public record UserRecord (Long id, String firstName, String lastName, String email, Set<Role> roles){}
