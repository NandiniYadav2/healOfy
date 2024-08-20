package com.example.selfhelp.controller;

import com.example.selfhelp.payload.DoctorRegisterDto;
import com.example.selfhelp.payload.PatientDto;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.payload.PostResponse;
import com.example.selfhelp.services.PatientService;
import com.example.selfhelp.services.PostService;
import com.example.selfhelp.utils.AppConstants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class PatientController {
    private PatientService patientService;
    public PatientController(PatientService patientService)
    {
        this.patientService=patientService;
    }
    @PostMapping("/createPatient")
    public ResponseEntity<PatientDto> createPatient(@RequestBody PatientDto patientDto)
    {
        return new ResponseEntity<>(patientService.createPatient(patientDto), HttpStatus.CREATED);
    }

    @GetMapping("/allPatients")
    public List<PatientDto> getAllPatients()
    {

        return patientService.getAllPatients();
    }
    @GetMapping("/user/patient/{email}")
    public ResponseEntity<PatientDto> getPatientByEmail(@PathVariable(value = "email")String email)
    {

        PatientDto userDto=patientService.getPatientByEmail(email);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
    @GetMapping("/patient/{id}")
    public ResponseEntity<PatientDto> getPatientById(@PathVariable(name = "id") long id)
    {
        return ResponseEntity.ok(patientService.getPatientById(id));
    }
    @PutMapping("/patient/{id}")
    public ResponseEntity<PatientDto> updatePatient(@RequestBody PatientDto patientDto,@PathVariable(name = "id") long id)
    {
        return new ResponseEntity<>(patientService.updatePatient(id,patientDto),HttpStatus.OK);
    }
    @DeleteMapping("/patient/{id}")
    public ResponseEntity<String> deletePatient(@PathVariable(name = "id") long id)
    {
        patientService.deletePatient(id);
        return new ResponseEntity<>("Successfully deleted",HttpStatus.OK);

    }

}
