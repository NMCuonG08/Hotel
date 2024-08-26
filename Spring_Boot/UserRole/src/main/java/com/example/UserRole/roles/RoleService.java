package com.example.UserRole.roles;

import com.example.UserRole.Exception.RoleAlreadyExistException;
import com.example.UserRole.Exception.UserAlreadyExistException;
import com.example.UserRole.Exception.UserNotFoundException;
import com.example.UserRole.user.User;
import com.example.UserRole.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleService implements IRoleService {

    private final IRoleRepository roleRepository;
    private final UserRepository userRepository;

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role createRole(Role theRole) {
        Optional<Role> checkRole = roleRepository.findByName(theRole.getName());
        if(checkRole.isPresent()){
            throw  new RoleAlreadyExistException(checkRole.get() + "Role already exist!");
        }

        return roleRepository.save(theRole);
    }

    @Override
    public void deleteRole(Long id) {
        this.removeAllUsers(id);
        roleRepository.deleteById(id);
    }

    @Override
    public Role findByName(String name) {
        return roleRepository.findByName(name).get();
    }

    @Override
    public Role findById(Long id) {
        return roleRepository.findById(id).get();
    }

    @Override
    public User removeUserFromRole(Long userID, Long roleID) {
        Optional<User> user = userRepository.findById(userID);
        Optional<Role> role = roleRepository.findById(roleID);
        if(role.isPresent() && role.get().getUsers().contains(user.get())){
            role.get().removeUserFromRole(user.get());
            roleRepository.save(role.get());
            return user.get();
        }
        else {
            throw new UserNotFoundException("User not found!");
        }

    }

    @Override
    public User assignUserToRole(Long userID, Long roleID) {
        Optional<User> user = userRepository.findById(userID);
        Optional<Role> role = roleRepository.findById(roleID);
        if(user.isPresent() && user.get().getRoles().contains(role.get())){
            throw new UserAlreadyExistException( user.get().getFirstName() +  " is already assign to the " + role.get().getName());
        }
        role.ifPresent(theRole -> theRole.assignUserToRole(user.get()));
        roleRepository.save(role.get());
        return user.get();

    }

    @Override
    public Role removeAllUsers(Long roleID) {
        Optional<Role> theRole = roleRepository.findById(roleID);
        theRole.ifPresent(Role ::removeAllUserFromRole);
        return roleRepository.save(theRole.get());
    }
}
