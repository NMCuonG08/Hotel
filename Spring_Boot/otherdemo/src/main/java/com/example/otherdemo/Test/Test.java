package com.example.otherdemo.Test;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class Test {
    @PostMapping
    public String test(@RequestBody TestRes tes, final HttpServletRequest request){
        return "http://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath();
    };


}
