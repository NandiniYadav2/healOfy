package com.example.selfhelp.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="doctors")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long Id;
    private String firstName;
    private String lastName;
    private int age;
    private String licenseId;
    private String exp;
    private int moderator;
    private int approved;
    private String password;
    private String username;
    private String email;
    private int flag=0;
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name = "doctor_roles",joinColumns = @JoinColumn(name = "doctor_id",referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name= "role_id",referencedColumnName = "id"))
    private Set<Role> roles;
    @OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Appointment> appointments;
    @OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<AppointmentList> allAppointments;




    /*@OneToMany(mappedBy = "doctors",cascade = CascadeType.ALL)
    private Set<Patient> patients = new HashSet<>();*/
    /*@OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<Appointment> appoint =new HashSet<>();*/
}
