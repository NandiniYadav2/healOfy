package com.example.selfhelp.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="quesionnaire")
public class QuestionnaireQues
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "question")
    private String question;
    @Column(name = "weightage")
    private int weightage;

    @OneToMany(mappedBy = "ques",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<QuestionnaireResponse> responses =new HashSet<>();
   /* @ManyToMany(mappedBy = "questionnaireQues")
    Set<Patient> patient=new HashSet<>();
    public void add(Patient patient_)
    {
        patient.add(patient_);
        patient_.getQuestionnaireQues().add(this);
    }*/

}
