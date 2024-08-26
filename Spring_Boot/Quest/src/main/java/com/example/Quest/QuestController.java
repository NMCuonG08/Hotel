package com.example.Quest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class QuestController {
    @GetMapping("")
    public String SHow(){
        return "index.html";
    }
}
