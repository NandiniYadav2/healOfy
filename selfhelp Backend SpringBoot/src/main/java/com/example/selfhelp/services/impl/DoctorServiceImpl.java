package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.*;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.exception.UsernameNotFoundException;
import com.example.selfhelp.payload.DoctorByAdminDto;
import com.example.selfhelp.payload.DoctorPatientDto;
import com.example.selfhelp.payload.DoctorRegisterDto;
import com.example.selfhelp.repositories.DoctorRepository;
import com.example.selfhelp.services.DoctorService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DoctorServiceImpl implements DoctorService {

    private DoctorRepository doctorRepository;
    ModelMapper mapper;

    public DoctorServiceImpl(DoctorRepository doctorRepository, ModelMapper mapper) {
        this.doctorRepository = doctorRepository;
        this.mapper = mapper;
    }

    @Override
    public DoctorRegisterDto createDoctor(DoctorRegisterDto doctorRegisterDto)
    {
        Doctor doctor = mapToEntity(doctorRegisterDto);

        Doctor newDoctor = doctorRepository.save(doctor);

        DoctorRegisterDto newDoctorRegisterDto =maptoDto(newDoctor);
        return newDoctorRegisterDto;
    }

    @Override
    public List<DoctorPatientDto> getAllDoctorsByPatient() {
        List<Doctor> doctors = doctorRepository.findAll();
        return doctors.stream().map(doctor -> maptoDtoPatient(doctor)).collect(Collectors.toList());
    }

    @Override
    public List<DoctorByAdminDto> getAllDoctors() {
        List<Doctor> doctors = doctorRepository.findAll();
        return doctors.stream().map(doctor -> maptoDtoAdmin(doctor)).collect(Collectors.toList());
    }

    @Override
    public DoctorRegisterDto getDoctorByUserName(String username) {
        Doctor doctor=doctorRepository.findByUsername(username).orElseThrow(()->new UsernameNotFoundException("Doctor","username",username));
        return maptoDto(doctor);
    }

    @Override
    public DoctorByAdminDto getDoctorAdminUserName(String username) {
        Doctor doctor=doctorRepository.findByUsername(username).orElseThrow(()->new UsernameNotFoundException("Doctor","username",username));

        return maptoDtoAdmin(doctor);
    }

    @Override
    public DoctorRegisterDto getDoctorById(long id) {
        Doctor doctor = doctorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Doctor","id",id));
        return maptoDto(doctor);
    }

    @Override
    public DoctorByAdminDto getDoctorByIdAdmin(long id) {
        Doctor doctor = doctorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Doctor","id",id));

        return maptoDtoAdmin(doctor);
    }

    @Override
    public DoctorByAdminDto updateDoctor(DoctorByAdminDto doctorDto, long id) {
        Doctor doctor = doctorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Doctor","id",id));
        doctor.setFirstName(doctorDto.getFirstName());
        doctor.setLastName(doctorDto.getLastName());
        doctor.setAge(doctorDto.getAge());
        doctor.setExp(doctorDto.getExp());
        doctor.setLicenseId(doctorDto.getLicenseId());

        doctor.setModerator(doctorDto.getModerator());
        doctor.setApproved(doctorDto.getApproved());
        doctor.setFlag(doctorDto.getFlag());
        doctorRepository.save(doctor);
        return maptoDtoAdmin(doctor);
    }


    private DoctorByAdminDto maptoDtoAdmin(Doctor doctor)
    {
        DoctorByAdminDto doctorDto=mapper.map(doctor, DoctorByAdminDto.class);
        /*CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setName(comment.getName());
        commentDto.setEmail(comment.getEmail());
        commentDto.setBody(comment.getBody());
        commentDto.setCreatedAt(LocalDateTime.now());*/
        return doctorDto;
    }
    private DoctorRegisterDto maptoDto(Doctor doctor)
    {
        DoctorRegisterDto doctorRegisterDto =mapper.map(doctor, DoctorRegisterDto.class);
        /*CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setName(comment.getName());
        commentDto.setEmail(comment.getEmail());
        commentDto.setBody(comment.getBody());
        commentDto.setCreatedAt(LocalDateTime.now());*/
        return doctorRegisterDto;
    }
    private DoctorPatientDto maptoDtoPatient(Doctor doctor)
    {
        DoctorPatientDto doctorRegisterDto =mapper.map(doctor, DoctorPatientDto.class);
        /*CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setName(comment.getName());
        commentDto.setEmail(comment.getEmail());
        commentDto.setBody(comment.getBody());
        commentDto.setCreatedAt(LocalDateTime.now());*/
        return doctorRegisterDto;
    }
    private Doctor mapToEntityByAdmin(DoctorByAdminDto doctorAdminDto)
    {
        Doctor doctor = mapper.map(doctorAdminDto,Doctor.class);
        /*Comment comment=new Comment();
        comment.setId(commentDto.getId());
        comment.setName(commentDto.getName());
        comment.setEmail(commentDto.getEmail());
        comment.setBody(commentDto.getBody());
        comment.setCreatedAt(LocalDateTime.now());*/
        return doctor;
    }

    private Doctor mapToEntity(DoctorRegisterDto doctorRegisterDto)
    {
        Doctor doctor = mapper.map(doctorRegisterDto,Doctor.class);
        /*Comment comment=new Comment();
        comment.setId(commentDto.getId());
        comment.setName(commentDto.getName());
        comment.setEmail(commentDto.getEmail());
        comment.setBody(commentDto.getBody());
        comment.setCreatedAt(LocalDateTime.now());*/
        return doctor;
    }
}
