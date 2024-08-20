package com.example.selfhelp.controller;

import com.example.selfhelp.payload.*;
import com.example.selfhelp.services.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {
    private AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;

    }
    @PostMapping(value = {"/login","/signin"})
    public ResponseEntity<JWTAuthResponse> login(@RequestBody LoginDto loginDto)
    {
        String token = authService.login(loginDto);
        JWTAuthResponse jwtAuthResponse =new JWTAuthResponse();
        jwtAuthResponse.setAccessToken(token);
        return ResponseEntity.ok(jwtAuthResponse);
    }
    @PostMapping(value = {"/register","/signup"})
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto)
    {
        String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping(value = {"/doctor/login","/doctor/signin"})
    public ResponseEntity<JWTAuthResponse> loginDoctor(@RequestBody DoctorLoginDto loginDto)
    {
        String token = authService.doctorLogin(loginDto);
        JWTAuthResponse jwtAuthResponse =new JWTAuthResponse();
        jwtAuthResponse.setAccessToken(token);
        return ResponseEntity.ok(jwtAuthResponse);
    }
    @PostMapping(value = {"/doctor/register","/doctor/signup"})
    public ResponseEntity<String> doctorRegister(@RequestBody DoctorRegisterDto registerDto)
    {
        String response = authService.doctorRegister(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
