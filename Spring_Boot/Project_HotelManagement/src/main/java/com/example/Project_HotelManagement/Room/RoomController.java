package com.example.Project_HotelManagement.Room;
import com.example.Project_HotelManagement.User.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class RoomController {

    @Autowired private RoomService roomService;

    @GetMapping("")
    public String showRoom(HttpSession session, Model model){
        User user = (User) session.getAttribute("user");
        if (user != null) {
            model.addAttribute("user", user);
        }
        List<Room> listRooms = roomService.ListAll();
        model.addAttribute("listRooms", listRooms);
        return "home";
    }

}
