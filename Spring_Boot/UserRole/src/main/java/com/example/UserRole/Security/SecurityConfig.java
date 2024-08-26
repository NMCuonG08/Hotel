package com.example.UserRole.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    private static final String[] SECURED_URL = {"/book/**"};

    private static final String[] UNSECURED_URLS = {
            "/authenticate",
            "/register",
            "/public/**"
    };

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers(UNSECURED_URLS).permitAll()
                .requestMatchers(SECURED_URL).hasAuthority("ADMIN")
                .anyRequest().authenticated()
                .and()
                .httpBasic();
        return http.build();
    }
}
