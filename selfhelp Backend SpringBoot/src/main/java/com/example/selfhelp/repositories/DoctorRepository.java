package com.example.selfhelp.repositories;

import com.example.selfhelp.entity.Doctor;
import com.example.selfhelp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor,Long> {
    Optional<Doctor> findByEmail(String email);
    Optional<Doctor> findByUsernameOrEmail(String username,String email);
    Optional<Doctor> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);

    Optional<Doctor> findById(Long Id);
}
