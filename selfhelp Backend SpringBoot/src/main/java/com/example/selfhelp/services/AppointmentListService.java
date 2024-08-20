package com.example.selfhelp.services;

import com.example.selfhelp.payload.AppointmentDto;
import com.example.selfhelp.payload.AppointmentListDto;

import java.util.List;

public interface AppointmentListService {

    AppointmentListDto createAppointmentDate(AppointmentListDto appointmentListDto);
//    AppointmentListDto bookAppointment(AppointmentListDto appointmentListDto,Long doctorId,Long patientId);

    List<AppointmentListDto> getAllAppointmentByDoctorId(Long doctorId);
}
