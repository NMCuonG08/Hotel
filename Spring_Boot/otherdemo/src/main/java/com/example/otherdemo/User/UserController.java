package com.example.otherdemo.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model; //
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public String showModel(Model model){
        List<User> listUsers = userService.ListAll();
        model.addAttribute("listUsers", listUsers);
        return "user";
    }

    @GetMapping("/user/new")
    public String showNewForm(Model model){
        model.addAttribute("user", new User());
        model.addAttribute("pageTitle", "Add New User");

        return "user_form";
    }
    @PostMapping("/user/save")
    public String saveUser(User user, RedirectAttributes ra){
        userService.save(user);
        ra.addFlashAttribute("message", "The user has been saved successfully");
        return "redirect:/user";
    }

    @GetMapping("/user/edit/{id}")
    public String showEditForm(@PathVariable("id") Integer id, Model model,RedirectAttributes ra){
        try {
            User user = userService.get(id);

            model.addAttribute("user", user);
            model.addAttribute("pageTitle", "Edit User ( ID : " + id + " )");
            return "user_form";
        } catch (UserNotFoundException e) {
            ra.addFlashAttribute("message", e.getMessage());

           return "redirect:/user";
        }
    }
    @GetMapping("/user/delete/{id}")
    public String DeleteUser(@PathVariable("id") Integer id,RedirectAttributes ra){
        try {
            userService.delete(id);
            ra.addFlashAttribute("message", "The user ID " + id + "has been deleted.");

        } catch (UserNotFoundException e) {
            ra.addFlashAttribute("message", e.getMessage());

        }
        return "redirect:/user";
    }

}
