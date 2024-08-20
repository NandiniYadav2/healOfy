package com.example.selfhelp.payload;

import lombok.Data;

@Data
public class DoctorPatientDto {
    Long Id;
    private String firstName;
    private String lastName;
    private int age;
    private String exp;
    private String licenseId;
    private String username;
    private String email;
}
