package com.example.selfhelp.controller;

import com.example.selfhelp.entity.Appointment;
import com.example.selfhelp.payload.AppointmentListDto;
import com.example.selfhelp.repositories.AppointmentRepository;
import com.example.selfhelp.services.AppointmentListService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class AppointmentListController {
    AppointmentListService appointmentListService;

    public AppointmentListController(AppointmentListService appointmentListService) {
        this.appointmentListService = appointmentListService;
    }
    @GetMapping("/appointment/doctor/{id}")
    public List<AppointmentListDto> getAllAppointmentsByDoctor(@PathVariable(value = "id") Long doctorId)
    {
        List<AppointmentListDto> appointment=appointmentListService.getAllAppointmentByDoctorId(doctorId);
        return appointment;
    }




}
