package com.example.selfhelp.repositories;

import com.example.selfhelp.entity.Doctor;
import com.example.selfhelp.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient,Long> {
    Optional<Patient> findById(Long Id);
    Optional<Patient> findByEmail(String email);
}
