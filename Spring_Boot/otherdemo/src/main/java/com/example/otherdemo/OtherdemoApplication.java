package com.example.otherdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
public class OtherdemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(OtherdemoApplication.class, args);
	}
		@GetMapping
		public String show(){
			return "index";
		}

}
