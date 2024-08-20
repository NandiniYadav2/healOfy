package com.example.selfhelp.payload;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DoctorRegisterDto {
    Long Id;
    private String firstName;
    private String lastName;
    private int age;
    private String exp;
    private String licenseId;
    private String username;
    private String password;
    private String email;

}
