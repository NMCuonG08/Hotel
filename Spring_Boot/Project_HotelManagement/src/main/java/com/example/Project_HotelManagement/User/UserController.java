package com.example.Project_HotelManagement.User;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/signin")
    public String FormSignIn(Model model){
    model.addAttribute("user",new User());
        return "Sign_In";
    }

}
