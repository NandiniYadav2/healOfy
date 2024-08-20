package com.example.selfhelp.services.impl;

import com.example.selfhelp.config.SecurityConfig;
import com.example.selfhelp.entity.Doctor;
import com.example.selfhelp.entity.Patient;
import com.example.selfhelp.entity.Role;
import com.example.selfhelp.entity.User;
import com.example.selfhelp.exception.PostCommentException;
import com.example.selfhelp.payload.DoctorLoginDto;
import com.example.selfhelp.payload.DoctorRegisterDto;
import com.example.selfhelp.payload.LoginDto;
import com.example.selfhelp.payload.RegisterDto;
import com.example.selfhelp.repositories.DoctorRepository;
import com.example.selfhelp.repositories.PatientRepository;
import com.example.selfhelp.repositories.RoleRepository;
import com.example.selfhelp.repositories.UserRepository;
import com.example.selfhelp.security.JwtTokenProvider;
import com.example.selfhelp.services.AuthService;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthServiceImpl implements AuthService {
    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;

    private DoctorRepository doctorRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;
    private PatientRepository patientRepository;

    public AuthServiceImpl(AuthenticationManager authenticationManager,
                           UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           RoleRepository roleRepository,
                           JwtTokenProvider jwtTokenProvider,
                           DoctorRepository doctorRepository,
                           PatientRepository patientRepository) {
        this.authenticationManager = authenticationManager;
        this.userRepository=userRepository;
        this.passwordEncoder=passwordEncoder;
        this.roleRepository=roleRepository;
        this.jwtTokenProvider=jwtTokenProvider;
        this.doctorRepository=doctorRepository;
        this.patientRepository=patientRepository;
    }

    @Override
    public String login(LoginDto loginDto) {
       Authentication authentication =authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsernameOrEmail(),loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token=jwtTokenProvider.generateToken(authentication);
        return token;
    }
    @Override
    public String doctorLogin(DoctorLoginDto loginDto) {
        Authentication authentication =authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsernameOrEmail(),loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token=jwtTokenProvider.generateToken(authentication);
        return token;
    }

    @Override
    public String register(RegisterDto registerDto) {

//        if(userRepository.existsByUsername(registerDto.getUsername())){
//            throw new PostCommentException(HttpStatus.BAD_REQUEST,"Username already exists");
//        }
//        if(userRepository.existsByEmail(registerDto.getEmail())){
//            throw new PostCommentException(HttpStatus.BAD_REQUEST,"Email already exists");
//        }
        User user = new User();
        user.setFirstName(registerDto.getFirstName());
        user.setLastName(registerDto.getLastName());
        user.setUsername(registerDto.getUsername());
        user.setAge(registerDto.getAge());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("USER").get();
        roles.add(userRole);
        user.setRoles(roles);
        user.setRole("USER");
        userRepository.save(user);
        Patient patient = new Patient();
        patient.setFirstName(registerDto.getFirstName());
        patient.setLastName(registerDto.getLastName());
        patient.setEmail(registerDto.getEmail());
        patient.setAge(registerDto.getAge());
        patientRepository.save(patient);



        return "User registered successfully";








    }
    @Override
    public String doctorRegister(DoctorRegisterDto registerDto) {

//        if(userRepository.existsByUsername(registerDto.getUsername())){
//            throw new PostCommentException(HttpStatus.BAD_REQUEST,"Username already exists");
//            throw new PostCommentException(HttpStatus.BAD_REQUEST,"Email already exists");
//        }
        Doctor user = new Doctor();
        User user1=new User();
        user.setFirstName(registerDto.getFirstName());
        user.setLastName(registerDto.getLastName());
        user.setExp(registerDto.getExp());
        user.setAge(registerDto.getAge());
        user.setLicenseId(registerDto.getLicenseId());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());

        user1.setFirstName(registerDto.getFirstName());
        user1.setLastName(registerDto.getLastName());
        user1.setUsername(registerDto.getUsername());
        user1.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        user1.setEmail(registerDto.getEmail());
        user1.setAge(registerDto.getAge());

        user1.setEmail(registerDto.getEmail());
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("DOCTOR").get();
        roles.add(userRole);

        user.setRoles(roles);
        user1.setRoles(roles);
        user1.setRole("DOCTOR");


//        user.setName(registerDto.getName());
//        user.setUsername(registerDto.getUsername());
//        user.setAge(registerDto.getAge());
//        user.setEmail(registerDto.getEmail());
//        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
//        Set<Role> roles = new HashSet<>();
//        Role userRole = roleRepository.findByName("USER").get();
//        roles.add(userRole);
//        user.setRoles(roles);
        userRepository.save(user1);
        doctorRepository.save(user);
        return "Doctor registered successfully";








    }

}
