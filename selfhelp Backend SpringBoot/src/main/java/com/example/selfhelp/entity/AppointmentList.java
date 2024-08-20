package com.example.selfhelp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "appointmentDates")
public class AppointmentList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long Id;
    @Column(name = "date",nullable = false)
    Date date;
    @Column(name = "timeSlot",nullable = false)
    String time;
    char flag=0;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id")
    Doctor doctor;
    @OneToOne(mappedBy = "appointmentList",cascade = CascadeType.ALL,orphanRemoval = true)
    Appointment appointment;


}
