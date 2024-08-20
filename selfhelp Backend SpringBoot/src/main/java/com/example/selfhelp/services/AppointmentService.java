package com.example.selfhelp.services;

import com.example.selfhelp.entity.Appointment;
import com.example.selfhelp.payload.AppointmentDto;
import com.example.selfhelp.payload.PatientDto;

import java.util.List;

public interface AppointmentService {
    AppointmentDto createAppointment(AppointmentDto appointmentDto,Long appointList);

    List<AppointmentDto> getAllAppointments();
    List<AppointmentDto> getAppointmentsByPatientId(Long patientId);
    List<AppointmentDto> getAppointmentsByDoctorId(Long doctorId);

    AppointmentDto getAppointmentById(long appointmentId);

    AppointmentDto updateAppointment(AppointmentDto patientRequest,Long appointmentId,Long appointList);

    void deleteAppointment(Long appointmentId);
}
