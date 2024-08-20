package com.example.selfhelp.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorLoginDto {
    private String usernameOrEmail;
    private String password;
}
