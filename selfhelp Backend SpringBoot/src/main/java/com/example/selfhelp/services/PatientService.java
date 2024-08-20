package com.example.selfhelp.services;

import com.example.selfhelp.payload.DoctorRegisterDto;
import com.example.selfhelp.payload.PatientDto;

import java.util.List;

public interface PatientService {
    PatientDto createPatient(PatientDto patientDto);

    List<PatientDto> getAllPatients();

    PatientDto getPatientById(long patientId);
    PatientDto getPatientByEmail(String email);

    PatientDto updatePatient(Long patientId,PatientDto patientRequest);

    void deletePatient(Long patientId);
}
