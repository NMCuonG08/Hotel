package com.example.otherdemo.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired private UserRespository repo;

    public List<User> ListAll(){
      return (List<User>) repo.findAll();
    }

    public void save(User user) {
        repo.save(user);

    }

    public User get(Integer id) throws UserNotFoundException {
        Optional<User> result=repo.findById(id);
        if(result.isPresent()){
            return result.get();
        }
        throw new UserNotFoundException("Could not find any user with id" + id);
    }
    public void delete(Integer id) throws UserNotFoundException {
        Long count = repo.countById(id);

        if (count == null || count == 0) {
            throw  new UserNotFoundException("Cound not find any user with id " + id);
        }
        repo.deleteById(id);

    }

}
