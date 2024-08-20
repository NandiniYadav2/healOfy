package com.example.selfhelp.services;

import com.example.selfhelp.payload.DoctorByAdminDto;
import com.example.selfhelp.payload.DoctorPatientDto;
import com.example.selfhelp.payload.DoctorRegisterDto;

import java.util.List;

public interface DoctorService {
    DoctorRegisterDto createDoctor(DoctorRegisterDto doctorRegisterDto);

    List<DoctorPatientDto> getAllDoctorsByPatient();
    List<DoctorByAdminDto> getAllDoctors();
    DoctorRegisterDto getDoctorByUserName(String username);
    DoctorByAdminDto getDoctorAdminUserName(String username);

    DoctorRegisterDto getDoctorById(long id);
    DoctorByAdminDto getDoctorByIdAdmin(long id);
    DoctorByAdminDto updateDoctor(DoctorByAdminDto doctorDto,long id);


}
