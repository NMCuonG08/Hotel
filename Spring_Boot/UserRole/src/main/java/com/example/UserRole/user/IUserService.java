package com.example.UserRole.user;

import java.util.List;

public interface IUserService {

    public User add(User user);

    public List<UserRecord> getAllUser();

    public void delete(String email);

    public User update(User user);

    public User getUser(String email);
}
