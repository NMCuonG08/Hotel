package com.example.Project_HotelManagement.Hotel;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HotelController {

    @GetMapping("/create-your-hotel")
    public String showSignUp(Model model){
        model.addAttribute("hotel_manager", new HotelManager());
        return "sign-up-hotel";
    }

    @GetMapping("/your-hotel")
    public String HotelManagement(Model model){
        model.addAttribute("hotel_manager", new HotelManager());
        return "hotel-management";
    }

}
