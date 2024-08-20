package com.example.selfhelp.controller;

import com.example.selfhelp.entity.Appointment;
import com.example.selfhelp.payload.AppointmentDto;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.payload.PostResponse;
import com.example.selfhelp.services.AppointmentService;
import com.example.selfhelp.services.PostService;
import com.example.selfhelp.utils.AppConstants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AppointmentController {
    private AppointmentService appointmentService;
    public AppointmentController(AppointmentService postService)
    {
        this.appointmentService=postService;
    }
    @PostMapping("/createAppointment/{appointList}")
    public ResponseEntity<AppointmentDto> createappointment(@PathVariable(value = "appointList")Long appointList,@RequestBody AppointmentDto AppointmentDto)
    {
        return new ResponseEntity<>(appointmentService.createAppointment(AppointmentDto,appointList), HttpStatus.CREATED);
    }
    @GetMapping("/allAppointments")
    public List<AppointmentDto> getAllAppointments()
    {

        return appointmentService.getAllAppointments();
    }
    @GetMapping("/appointmentId/{id}")
    public ResponseEntity<AppointmentDto> getAppointmentById(@PathVariable(name = "id") long id)
    {
        return ResponseEntity.ok(appointmentService.getAppointmentById(id));
    }
    @GetMapping("/appointment/patient/{patientId}")
    public List<AppointmentDto> getAppointmentsByPatientId(@PathVariable(name="patientId")long patientId)
    {
        return appointmentService.getAppointmentsByPatientId(patientId);

    }
    @GetMapping("/appointment/doctorId/{doctorId}")
    public List<AppointmentDto> getAppointmentsByDoctorId(@PathVariable(name = "doctorId")long doctorId)
    {
        return appointmentService.getAppointmentsByDoctorId(doctorId);
    }
    @PutMapping("/appointment/{appointList}/{id}")
    public ResponseEntity<AppointmentDto> updateAppointment(@RequestBody AppointmentDto appointmentDto,@PathVariable(name = "appointList") long appointList,@PathVariable(name = "id") long id)
    {
        return new ResponseEntity<>(appointmentService.updateAppointment(appointmentDto,id,appointList),HttpStatus.OK);
    }
    @DeleteMapping("/appointment/{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable(name = "id") long id)
    {
        appointmentService.deleteAppointment(id);
        return new ResponseEntity<>("Successfully deleted",HttpStatus.OK);

    }
}
