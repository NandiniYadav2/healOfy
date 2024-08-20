package com.example.selfhelp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="appointments")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "firstname",nullable = false)
    String firstName;
    @Column(name = "lastname",nullable = false)
    String lastName;
    @Column(name = "email",nullable = false)//iss email ko jorna hai
    String email;
    @Column(name = "age",nullable = false)
    String age;
    @Column(name = "severity",nullable = false)
    String severity;
    Date date;
    String time;
    private LocalDateTime createdAt;
    @OneToMany(mappedBy = "appointment",cascade = CascadeType.ALL,orphanRemoval = true)
    Set<Chat> chats =new HashSet<>();

   /* @OneToOne(mappedBy = "appoint",cascade = CascadeType.ALL)
    private Patient patient;*/
//   @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//   @JoinTable(name = "appointment_doctors",joinColumns = @JoinColumn(name = "appointment_id",referencedColumnName = "id"),
//           inverseJoinColumns = @JoinColumn(name= "doctor_id",referencedColumnName = "id"))
//   private Set<Doctor> doctors=new HashSet<>();
//    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//    @JoinTable(name = "appointment_patients",joinColumns = @JoinColumn(name = "appointment_id",referencedColumnName = "id"),
//            inverseJoinColumns = @JoinColumn(name= "patient_id",referencedColumnName = "id"))
//    private Set<Patient> patients=new HashSet<>();
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;
    @ManyToOne(fetch =FetchType.LAZY)
    @JoinColumn(name= "patient_id")
    private Patient patient;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "app_list")
    private AppointmentList appointmentList;






}
