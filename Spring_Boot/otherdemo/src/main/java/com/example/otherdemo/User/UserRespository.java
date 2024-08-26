package com.example.otherdemo.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRespository extends CrudRepository<User, Integer> {

    public Long countById(Integer id);
}
