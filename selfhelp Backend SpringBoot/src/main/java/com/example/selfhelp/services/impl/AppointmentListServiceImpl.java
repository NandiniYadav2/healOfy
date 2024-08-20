package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.Appointment;
import com.example.selfhelp.entity.AppointmentList;
import com.example.selfhelp.entity.Doctor;
import com.example.selfhelp.entity.Patient;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.payload.AppointmentDto;
import com.example.selfhelp.payload.AppointmentListDto;
import com.example.selfhelp.payload.DoctorRegisterDto;
import com.example.selfhelp.repositories.AppointmentListRepository;
import com.example.selfhelp.repositories.AppointmentRepository;
import com.example.selfhelp.repositories.DoctorRepository;
import com.example.selfhelp.repositories.PatientRepository;
import com.example.selfhelp.services.AppointmentListService;
import com.example.selfhelp.services.AppointmentService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentListServiceImpl implements AppointmentListService {
    DoctorRepository doctorRepository;
    AppointmentListRepository appointmentListRepository;
    PatientRepository patientRepository;
    AppointmentRepository appointmentRepository;
    ModelMapper mapper;

    public AppointmentListServiceImpl(DoctorRepository doctorRepository, AppointmentListRepository appointmentListRepository,
                                      PatientRepository patientRepository,
                                      AppointmentRepository appointmentRepository,
                                      ModelMapper mapper) {
        this.doctorRepository = doctorRepository;
        this.appointmentListRepository = appointmentListRepository;
        this.patientRepository=patientRepository;
        this.appointmentRepository=appointmentRepository;
        this.mapper=mapper;
    }

    @Override
    public AppointmentListDto createAppointmentDate(AppointmentListDto appointmentListDto) {

        return null;
    }

//    @Override
//    public AppointmentListDto bookAppointment(AppointmentListDto appointmentListDto, Long doctorId, Long patientId) {
//        Doctor doctor=doctorRepository.findById(doctorId).orElseThrow(()->new ResourceNotFoundException("Doctor","id",doctorId));
//        Patient patient=patientRepository.findById(patientId).orElseThrow(()->new ResourceNotFoundException("Patient","id",patientId));
//        Appointment appointment=new Appointment();
//        appointment.set
//
//    }

    @Override
    public List<AppointmentListDto> getAllAppointmentByDoctorId(Long doctorId) {
        Doctor doctor=doctorRepository.findById(doctorId).orElseThrow(()->new ResourceNotFoundException("Doctor","id",doctorId));
        List<AppointmentList> appointmentlist=appointmentListRepository.findByDoctorId(doctorId);
        return appointmentlist.stream().map(appointment->mapToDto(appointment)).collect(Collectors.toList());
    }

    private AppointmentListDto mapToDto(AppointmentList appointmentList)
    {
        AppointmentListDto appointmentListDto=mapper.map(appointmentList, AppointmentListDto.class);
        /*CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setName(comment.getName());
        commentDto.setEmail(comment.getEmail());
        commentDto.setBody(comment.getBody());
        commentDto.setCreatedAt(LocalDateTime.now());*/
        return appointmentListDto;
    }
}
