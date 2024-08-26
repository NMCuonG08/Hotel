package com.example.UserRole.roles;

import com.example.UserRole.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NaturalId
    private String name;
    @ManyToMany(mappedBy = "roles")
    @JsonBackReference
    private Collection<User> users = new HashSet<>();

    public Role(String name) {
        this.name = name;
    }
    public void removeAllUserFromRole(){
        if(this.getUsers() != null) {
            List<User> userInRole = this.getUsers().stream().toList();
            userInRole.forEach(this::removeUserFromRole);
        }
    }

    public void removeUserFromRole(User user) {
        user.getRoles().remove(this);
        this.getUsers().remove(user);
    }

    public void assignUserToRole(User user){
        user.getRoles().remove(this);
        this.getUsers().add(user);
    }

}
