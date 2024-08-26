package com.example.UserRole.Security.jwt;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/authenticate")
@RestController
@RequiredArgsConstructor
public class JWTController {

    private final JWTService jwtService;
    @PostMapping("/get-token")
    public String getTokenForAuthenticatedUser(@RequestBody JWTAuthenticationRequest authRequest){
        return jwtService.getGeneratedToken(authRequest.getEmail());
    }
}


