package com.example.Project_HotelManagement.User;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class AuthController {

    @Autowired UserResponsitory userResponsitory;

    @PostMapping("/signin/save")
    public String signin(@RequestParam("email") String email, @RequestParam("password") String password, RedirectAttributes ra, HttpSession session){
        User user = userResponsitory.findByUsernameAndPassword(email,password);
        if(user != null) {

            ra.addFlashAttribute("message", "Dang nhap thanh cong");
            session.setAttribute("user",user);
            return "redirect:/";
        }
        else {
            ra.addFlashAttribute("error", "Ten dang nhap hoac mat khau khong dung");
            return "redirect:/signin";
        }
    }
}
