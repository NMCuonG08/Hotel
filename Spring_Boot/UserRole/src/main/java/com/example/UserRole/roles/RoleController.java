package com.example.UserRole.roles;

import com.example.UserRole.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequiredArgsConstructor
@RequestMapping("/roles")
public class RoleController {
    private final IRoleService roleService;
    @GetMapping("/all")
    public ResponseEntity<List<Role>> getAllRoles(){
        return new ResponseEntity<>(roleService.getAllRoles(), CREATED);
    }

    @PostMapping("/create")
    public ResponseEntity<Role> createRole(@RequestBody Role role){
        return new ResponseEntity<>(roleService.createRole(role),CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteRole(@PathVariable Long id){
        roleService.deleteRole(id);
    }
    @PostMapping("/remove-all-user-from-role/{id}")
    public Role removeAllRoleFromUser(@PathVariable Long id){
        return roleService.removeAllUsers(id);
    }
    @PostMapping("remove-user-from-role")
    public User removeUserFromRole(@RequestParam Long userID, @RequestParam Long roleID){
        return roleService.removeUserFromRole(userID,roleID);
    }

    @PostMapping("assign-user-to-role")
    public User assignUserToRole(@RequestParam Long userID, @RequestParam Long roleID){
        return roleService.assignUserToRole(userID,roleID);
    }

}
