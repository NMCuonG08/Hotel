package com.example.UserRole.roles;

import com.example.UserRole.user.User;

import java.util.List;

public interface IRoleService {


    List<Role> getAllRoles();

    Role createRole(Role theRole);

    void deleteRole(Long id);

    Role findByName(String name);

    Role findById(Long id);

    User removeUserFromRole(Long userID, Long roleID);

    User assignUserToRole(Long userID, Long roleID);

    Role removeAllUsers(Long roleID);
}
