package com.example.Hotel.Test;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TestService {

    private final TestRepository testRepository;


    public void saveData( List<String> yourArray) {
        Test entity = new Test();
        entity.setCon(yourArray);
        testRepository.save(entity);
    }

}
