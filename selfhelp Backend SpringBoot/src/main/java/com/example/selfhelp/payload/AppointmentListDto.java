package com.example.selfhelp.payload;

import lombok.Data;

import java.util.Date;

@Data
public class AppointmentListDto {
    Long id;
    Date date;
    String time;
    char flag;
    Long doctorId;

}
