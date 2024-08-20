package com.example.selfhelp.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "patients")
public class Patient {
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
    int age;
    @Column(name = "address")
    String address;
    String severity;

    @OneToMany(mappedBy = "patient",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Appointment> appointments;
    /*@ManyToMany
    @JoinTable(
            name = "patient_question",
            joinColumns = @JoinColumn(name = "patient_id"),
            inverseJoinColumns = @JoinColumn(name = "q_id"))
    Set<QuestionnaireQues> questionnaireQues=new HashSet<>();
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="appointment_id",nullable = false)
    private Appointment appoint;

    public void add(QuestionnaireQues questionnaireQue)
    {
        questionnaireQues.add(questionnaireQue);
        questionnaireQue.getPatient().add(this);
    }*/






}
