package com.example.selfhelp.controller;

import com.example.selfhelp.payload.DoctorByAdminDto;
import com.example.selfhelp.payload.DoctorPatientDto;
import com.example.selfhelp.payload.DoctorRegisterDto;
import com.example.selfhelp.payload.UserDto;
import com.example.selfhelp.services.DoctorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/")
public class DoctorController {
    private DoctorService doctorService;

    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }
    @PostMapping("/createDoctor")
    public ResponseEntity<DoctorRegisterDto> createDoctor(@RequestBody DoctorRegisterDto doctorRegisterDto)
    {
        return new ResponseEntity<>(doctorService.createDoctor(doctorRegisterDto), HttpStatus.CREATED);
    }
    @GetMapping("/allDoctors")
    public List<DoctorPatientDto> getAllDoctorsByPatient()
    {

        return doctorService.getAllDoctorsByPatient();
    }
    @GetMapping("/moderator/allDoctors")
    public List<DoctorByAdminDto> getAllDoctorsByAdmin()
    {

        return doctorService.getAllDoctors();
    }
    @GetMapping("/doctor/{id}")
    public ResponseEntity<DoctorRegisterDto> getDoctorById(@PathVariable(name = "id") long id)
    {
        return ResponseEntity.ok(doctorService.getDoctorById(id));
    }
    @GetMapping("/admin/doctor/{id}")
    public ResponseEntity<DoctorByAdminDto> getDoctorByAdminId(@PathVariable(name = "id") long id)
    {
        return ResponseEntity.ok(doctorService.getDoctorByIdAdmin(id));
    }
    @GetMapping("/user/doctor/{username}")
    public ResponseEntity<DoctorRegisterDto> getUserByUserName(@PathVariable(value = "username")String username)
    {

        DoctorRegisterDto userDto=doctorService.getDoctorByUserName(username);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
    @GetMapping("/admins/doctor/{username}")
    public ResponseEntity<DoctorByAdminDto> getUserByUserNameAdmin(@PathVariable(value = "username")String username)
    {

        DoctorByAdminDto userDto=doctorService.getDoctorAdminUserName(username);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
    @PutMapping("/doctor/{id}")
    public ResponseEntity<DoctorByAdminDto> updateDoctor(@RequestBody DoctorByAdminDto doctorDto,@PathVariable(name = "id") long id)
    {
        return new ResponseEntity<>(doctorService.updateDoctor(doctorDto,id),HttpStatus.OK);
    }
//    @DeleteMapping("/doctor/{id}")
//    public ResponseEntity<String> deleteDoctor(@PathVariable(name = "id") long id)
//    {
//        doctorService.deleteDoctorById(id);
//        return new ResponseEntity<>("Successfully deleted",HttpStatus.OK);
//
//    }
}
