package com.example.selfhelp.repositories;

import com.example.selfhelp.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment,Long> {
    List<Appointment> findAllAppointmentsByPatientId(Long patientId);
    List<Appointment> findAllAppointmentsByDoctorId(Long doctorId);
}
