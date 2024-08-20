package com.example.selfhelp.security;

import com.example.selfhelp.entity.Doctor;
import com.example.selfhelp.entity.User;
import com.example.selfhelp.repositories.DoctorRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class DoctorUserDetailsService{
//    DoctorRepository doctorRepository;
//
//    public DoctorUserDetailsService(DoctorRepository doctorRepository) {
//        this.doctorRepository = doctorRepository;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
//        Doctor user = doctorRepository.findByUsernameOrEmail(usernameOrEmail,usernameOrEmail)
//                .orElseThrow(()->new UsernameNotFoundException("User not found with username or email:"+usernameOrEmail));
//
//        Set<GrantedAuthority> authorities = user.getRoles()
//                .stream()
//                .map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toSet());
//        return new org.springframework.security.core.userdetails.User(user.getEmail(),
//                user.getPassword(),
//                authorities);
//    }
}
