package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.*;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.payload.AppointmentDto;
import com.example.selfhelp.repositories.*;
import com.example.selfhelp.services.AppointmentService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private AppointmentRepository appointmentRepository;
    private UserRepository userRepository;

    private DoctorRepository doctorRepository;
    private PatientRepository patientRepository;
    private AppointmentListRepository appointmentListRepository;
    private ModelMapper mapper;

    public AppointmentServiceImpl(AppointmentRepository appointmentRepository,
                                  UserRepository userRepository, DoctorRepository doctorRepository,
                                  PatientRepository patientRepository, AppointmentListRepository appointmentListRepository,
                                  ModelMapper mapper) {
        this.appointmentRepository = appointmentRepository;
        this.userRepository = userRepository;
        this.doctorRepository = doctorRepository;
        this.patientRepository = patientRepository;
        this.appointmentListRepository=appointmentListRepository;

        this.mapper = mapper;
    }

    @Override
    public AppointmentDto createAppointment(AppointmentDto appointmentDto,Long appointList) {

//
//        Appointment appointment = mapToEntity(appointmentDto);
//        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User","Id",userId));
//        appointment.set
//
//        Appointment newAppointment = appointmentRepository.save(appointment);
//        return maptoDto(newAppointment);
        Doctor doctor=doctorRepository.findById(appointmentDto.getDoctorId()).orElseThrow(()-> new ResourceNotFoundException("doctor","id",appointmentDto.getDoctorId()));
        Patient patient=patientRepository.findById(appointmentDto.getPatientId()).orElseThrow(()->new ResourceNotFoundException("patient","id",appointmentDto.getPatientId()));
        Appointment appointment=new Appointment();
        appointment.setFirstName(appointmentDto.getFirstName());
        appointment.setLastName(appointmentDto.getLastName());
        appointment.setAge(appointmentDto.getAge());
        appointment.setEmail(appointmentDto.getEmail());
        appointment.setDate(appointmentDto.getDate());
        appointment.setSeverity(appointmentDto.getSeverity());
        appointment.setCreatedAt(LocalDateTime.now());
        appointment.setTime(appointmentDto.getTime());
        appointment.setDoctor(doctor);
        appointment.setPatient(patient);

        //user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
//        Set<Doctor> doctors = new HashSet<>();
//        Doctor userID = doctorRepository.findById(doctorId).get();
//        doctors.add(userID);
//        appointment.setDoctors(doctors);
//        Set<Patient> patients = new HashSet<>();
//        Patient patientID = patientRepository.findById(patientId).get();
//        patients.add(patientID);
//        appointment.setPatients(patients);

        AppointmentList appointmentList=appointmentListRepository.findById(appointList).orElseThrow();
        appointmentList.setFlag('1');

        appointmentListRepository.save(appointmentList);
        appointment.setAppointmentList(appointmentList);

        appointmentRepository.save(appointment);

        AppointmentDto newAppointmentDto= maptoDto(appointment);

        return newAppointmentDto;
    }

    @Override
    public List<AppointmentDto> getAllAppointments() {
        List<Appointment> appointments = appointmentRepository.findAll();
        return appointments.stream().map(appointment -> maptoDto(appointment)).collect(Collectors.toList());
    }

    @Override
    public List<AppointmentDto> getAppointmentsByPatientId(Long patientId) {
        Patient patient=patientRepository.findById(patientId).orElseThrow(()->new ResourceNotFoundException("Patient","Id",patientId));
        List<Appointment> appointments=appointmentRepository.findAllAppointmentsByPatientId(patientId);

        return appointments.stream().map(appointment -> maptoDto(appointment)).collect(Collectors.toList());
    }

    @Override
    public List<AppointmentDto> getAppointmentsByDoctorId(Long doctorId) {
        Doctor doctor=doctorRepository.findById(doctorId).orElseThrow(()->new ResourceNotFoundException("Doctor","Id",doctorId));
        List<Appointment> appointments=appointmentRepository.findAllAppointmentsByDoctorId(doctorId);

        return appointments.stream().map(appointment -> maptoDto(appointment)).collect(Collectors.toList());
    }

    @Override
    public AppointmentDto getAppointmentById(long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow(() -> new ResourceNotFoundException("Appointment","id",appointmentId));

        return maptoDto(appointment);
    }

    @Override
    public AppointmentDto updateAppointment(AppointmentDto appointmentRequest,Long appointmentId,Long appointList) {
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow(() -> new ResourceNotFoundException("Appointment","id",appointmentId));


        Doctor doctor=doctorRepository.findById(appointmentRequest.getDoctorId()).orElseThrow(()->new ResourceNotFoundException
                ("Doctor","id",appointmentRequest.getDoctorId()));
        Patient patient=patientRepository.findById(appointmentRequest.getPatientId()).orElseThrow(()->new ResourceNotFoundException
                ("Patient","id",appointmentRequest.getPatientId()));
        AppointmentList appointmentList=appointmentListRepository.findById(appointList).orElseThrow(()
                ->new ResourceNotFoundException("AppointList","id",appointList));
        AppointmentList prevList=appointmentListRepository.findById(appointment.getAppointmentList().getId()).orElseThrow();
        prevList.setFlag('0');
        appointmentListRepository.save(prevList);

        appointment.setFirstName(appointmentRequest.getFirstName());
        appointment.setLastName(appointmentRequest.getLastName());
        appointment.setEmail(appointmentRequest.getEmail());
        appointment.setAge(appointmentRequest.getAge());
        appointment.setSeverity(appointmentRequest.getSeverity());
        appointment.setDate(appointmentRequest.getDate());
        appointment.setTime(appointmentRequest.getTime());

        appointment.setDoctor(doctor);
        appointment.setPatient(patient);

        appointment.setCreatedAt(LocalDateTime.now());



        appointmentList.setFlag('1');
        appointment.setAppointmentList(appointmentList);
        appointmentListRepository.save(appointmentList);
        Appointment updatedAppointment = appointmentRepository.save(appointment);


        return maptoDto(updatedAppointment);
    }

    @Override
    public void deleteAppointment(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow(() -> new ResourceNotFoundException("Appointment","id",appointmentId));
        Long id=appointment.getAppointmentList().getId();

        AppointmentList appointmentList=appointmentListRepository.findById(appointment.getAppointmentList().getId()).get();
        appointmentList.setFlag('0');
        appointmentListRepository.save(appointmentList);
        appointmentRepository.delete(appointment);


    }
    private AppointmentDto maptoDto(Appointment appointment)
    {
        AppointmentDto appointmentDto=mapper.map(appointment, AppointmentDto.class);
        /*CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setName(comment.getName());
        commentDto.setEmail(comment.getEmail());
        commentDto.setBody(comment.getBody());
        commentDto.setCreatedAt(LocalDateTime.now());*/
        return appointmentDto;
    }
    private Appointment mapToEntity(AppointmentDto appointmentDto)
    {
        Appointment appointment = mapper.map(appointmentDto,Appointment.class);
        /*Comment comment=new Comment();
        comment.setId(commentDto.getId());
        comment.setName(commentDto.getName());
        comment.setEmail(commentDto.getEmail());
        comment.setBody(commentDto.getBody());
        comment.setCreatedAt(LocalDateTime.now());*/
        return appointment;
    }
}
