package com.example.selfhelp.services;

import com.example.selfhelp.payload.DoctorLoginDto;
import com.example.selfhelp.payload.DoctorRegisterDto;
import com.example.selfhelp.payload.LoginDto;
import com.example.selfhelp.payload.RegisterDto;

public interface AuthService {
    String login(LoginDto loginDto);
    String doctorLogin(DoctorLoginDto loginDto);
    String register(RegisterDto registerDto);

    String doctorRegister(DoctorRegisterDto registerDto);


}
