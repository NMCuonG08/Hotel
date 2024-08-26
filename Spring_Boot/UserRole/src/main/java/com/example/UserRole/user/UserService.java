package com.example.UserRole.user;

import com.example.UserRole.Exception.UserAlreadyExistException;
import com.example.UserRole.Exception.UserNotFoundException;
import com.example.UserRole.roles.IRoleRepository;
import com.example.UserRole.roles.Role;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService implements  IUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final IRoleRepository roleRepository;

    @Override
    public User add(User user) {
        Optional<User> theUser = userRepository.findByEmail(user.getEmail());
        if(theUser.isPresent()){
            throw new UserAlreadyExistException("A user with " + user.getEmail() + " already exist!");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role role = roleRepository.findByName("ROLE_USER").orElseThrow(() -> new RuntimeException("Role not found"));
        user.setRoles(Collections.singletonList(role));
        return userRepository.save(user);
    }

    @Override
    public List<UserRecord> getAllUser() {
        return userRepository.findAll()
                .stream()
                .map(user -> new UserRecord(
                        user.getId(),
                        user.getFirstName(),
                        user.getLastName(),
                        user.getEmail(),
                        new HashSet<>(user.getRoles()))).collect(Collectors.toList());

    }

    @Override
    @Transactional
    public void delete(String email) {
        userRepository.deleteByEmail(email);
    }

    @Override
    public User update(User user) {
        return null;
    }

    @Override
    public User getUser(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
    }


}
