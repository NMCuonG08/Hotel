package com.example.Hotel.Test;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/test")
public class TestController {

    private final TestService testService;
    @PostMapping("/add")
    public void addNew(@RequestBody TestPayLoad payload){
        testService.saveData(payload.getList());
    }



}
