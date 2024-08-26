package com.example.UserRole.Security.jwt;
import com.example.UserRole.user.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.*;

@Service
@RequiredArgsConstructor
public class JWTService {
    private final UserRepository userRepository;
    private final SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);;
    @Value("${spring.jwt.secret}")
    private String JWT_SECRET;
    @Value("${spring.jwt.jwtExpirationTime}")
    private Integer JWT_EXPIRATION_TIME;


    public String getGeneratedToken(String email) {
        Map<String, Object>  claims = new HashMap<>();
        return generatedTokenForUserName(claims, email);
    }

    private String generatedTokenForUserName(Map<String, Object> claims, String email) {
        return Jwts.builder().
                setClaims(claims).
                setSubject(email).
                setIssuedAt(new Date(System.currentTimeMillis())).
                setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION_TIME)).
                signWith(getSignKey(), SignatureAlgorithm.ES256).compact();
    }

    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(JWT_SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
