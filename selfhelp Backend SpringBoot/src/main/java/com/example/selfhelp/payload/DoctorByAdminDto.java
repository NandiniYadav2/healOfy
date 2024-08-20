package com.example.selfhelp.payload;

import lombok.Data;

@Data
public class DoctorByAdminDto {
    Long Id;
    private String firstName;
    private String lastName;
    private int age;
    private String exp;
    private String licenseId;
    private int moderator;
    private int approved;
    private int flag;

}
