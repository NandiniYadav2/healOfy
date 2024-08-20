package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.*;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.exception.UsernameNotFoundException;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.payload.UserDto;
import com.example.selfhelp.repositories.DoctorRepository;
import com.example.selfhelp.repositories.PatientRepository;
import com.example.selfhelp.repositories.RoleRepository;
import com.example.selfhelp.repositories.UserRepository;
import com.example.selfhelp.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service

public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private DoctorRepository doctorRepository;
    private PatientRepository patientRepository;
    private PasswordEncoder passwordEncoder;
    private RoleRepository roleRepository;
    ModelMapper mapper;

    public UserServiceImpl(UserRepository userRepository, DoctorRepository doctorRepository,
                           PatientRepository patientRepository,
                           PasswordEncoder passwordEncoder,
                           RoleRepository roleRepository,
                           ModelMapper mapper) {
        this.userRepository = userRepository;
        this.doctorRepository = doctorRepository;
        this.patientRepository = patientRepository;
        this.passwordEncoder=passwordEncoder;
        this.roleRepository=roleRepository;
        this.mapper=mapper;
    }

    @Override
    public UserDto createUser(UserDto user) {

        return null;
    }

    @Override
    public UserDto getUserByUserName(String username) {
        User user= userRepository.findByUsername(username).orElseThrow(()->new UsernameNotFoundException("User","username",username));



        return mapToDTO(user);
    }

    @Override
    public String updateUserDoctor(Long Id,UserDto userDto) {
        User u=userRepository.findById(Id).orElseThrow(()->new ResourceNotFoundException("User","id",Id));

        u.setFirstName(userDto.getFirstName());
        u.setLastName(userDto.getLastName());
        u.setUsername(userDto.getUsername());
        u.setEmail(userDto.getEmail());
        u.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(u);
        Doctor doctor = new Doctor();
        doctor.setFirstName(userDto.getFirstName());
        doctor.setLastName(userDto.getLastName());
        doctor.setUsername(userDto.getUsername());
        doctor.setEmail(userDto.getEmail());
        doctor.setPassword(passwordEncoder.encode(userDto.getPassword()));
        doctorRepository.save(doctor);
        return "User updated successfully";

    }

    @Override
    public String updateUserPatient(Long Id,UserDto userDto) {
        User user=userRepository.findById(Id).orElseThrow(()->new ResourceNotFoundException("User","id",Id));

        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(user);
        Patient patient = new Patient();
        patient.setFirstName(userDto.getFirstName());
        patient.setLastName(userDto.getLastName());

        patient.setEmail(userDto.getEmail());

        patientRepository.save(patient);

        return "User updated successfully";
    }



    @Override
    public UserDto getUserById(Long userId) {
        User user=userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));


        return mapToDTO(user);
    }

    @Override
    public List<Role> getRoleById(Long userId) {
        User user=userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));
        Set<Role> roles=user.getRoles();
        return roles.stream().collect(Collectors.toList());
    }


    @Override
    public List<UserDto> getALlUsers() {
        return null;
    }

    @Override
    public void deleteUser(Long  userId) {
        User user=userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));
        Doctor doctor=doctorRepository.findByUsername(user.getUsername()).orElseThrow(()->new UsernameNotFoundException("Doctor","username",user.getUsername()));

        doctorRepository.delete(doctor);
        userRepository.delete(user);



    }
    private UserDto mapToDTO(User user)
    {
        UserDto userDto=mapper.map(user,UserDto.class);
        /*PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setId(post.getId());
        postDto.setTitle(post.getTitle());
        postDto.setDescription(post.getDescription());
        postDto.setCreatedAt(LocalDateTime.now());
        postDto.setContent(post.getContent());*/
        return userDto;

    }

}
