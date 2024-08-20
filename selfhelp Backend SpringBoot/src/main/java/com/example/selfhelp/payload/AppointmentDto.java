package com.example.selfhelp.payload;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class AppointmentDto
{
    private long id;
    String firstName;
    String lastName;
    String email;

    String age;
    String severity;
    Date date;
    String time;
    LocalDateTime createdAt;
    private Long doctorId;
    private Long patientId;


}
