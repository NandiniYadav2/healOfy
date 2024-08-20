package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.Comment;
import com.example.selfhelp.entity.Doctor;
import com.example.selfhelp.entity.Patient;
import com.example.selfhelp.entity.Post;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.exception.UsernameNotFoundException;
import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.payload.PatientDto;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.repositories.PatientRepository;
import com.example.selfhelp.repositories.PostRepository;
import com.example.selfhelp.services.PatientService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientServiceImpl implements PatientService {
    private PatientRepository patientRepository;
    private ModelMapper mapper;
    public PatientServiceImpl(PatientRepository patientRepository,ModelMapper mapper)
    {

        this.patientRepository=patientRepository;
        this.mapper = mapper;
    }
    @Override
    public PatientDto createPatient(PatientDto patientDto) {
        Patient patient = mapToEntity(patientDto);

        Patient newPatient = patientRepository.save(patient);

        PatientDto patientResponse=mapToDTO(newPatient);
        return patientResponse;

    }

    @Override
    public List<PatientDto> getAllPatients() {
        List<Patient> patients = patientRepository.findAll();
        return patients.stream().map(patient -> mapToDTO(patient)).collect(Collectors.toList());
    }

    @Override
    public PatientDto getPatientById(long patientId) {
        Patient patient = patientRepository.findById(patientId).orElseThrow(() -> new ResourceNotFoundException("Post","id",patientId));

        return mapToDTO(patient);
    }

    @Override
    public PatientDto getPatientByEmail(String email) {
        Patient patient=patientRepository.findByEmail(email).orElseThrow(()->new UsernameNotFoundException("Patient","username",email));
        return mapToDTO(patient);
    }

    @Override
    public PatientDto updatePatient(Long patientId, PatientDto patientRequest) {
        Patient patient = patientRepository.findById(patientId).orElseThrow(() -> new ResourceNotFoundException("Post","id",patientId));
        patient.setFirstName(patientRequest.getFirstName());
        patient.setLastName(patientRequest.getLastName());
        patient.setEmail(patientRequest.getEmail());

        Patient updatedpatient = patientRepository.save(patient);
        return mapToDTO(updatedpatient);

    }

    @Override
    public void deletePatient(Long patientId) {

        Patient patient = patientRepository.findById(patientId).orElseThrow(() -> new ResourceNotFoundException("Patient","id",patientId));
        patientRepository.delete(patient);

    }
    private PatientDto mapToDTO(Patient patient)
    {
        PatientDto patientDto=mapper.map(patient,PatientDto.class);
        /*PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setId(post.getId());
        postDto.setTitle(post.getTitle());
        postDto.setDescription(post.getDescription());
        postDto.setCreatedAt(LocalDateTime.now());
        postDto.setContent(post.getContent());*/
        return patientDto;

    }
    private Patient mapToEntity(PatientDto patientDto)
    {
        Patient patient=mapper.map(patientDto,Patient.class);
       /* Post post=new Post();
        post.setTitle(postDto.getTitle());
        post.setDescription(postDto.getDescription());
        post.setContent(postDto.getContent());
        post.setCreatedAt(LocalDateTime.now());*/
        return patient;
    }
}
