package com.example.selfhelp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "QusetionnaireResponse")
public class QuestionnaireResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long Id;
    private String content;
    private int weightage;
    private boolean isChosen;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "q_id",nullable = false)
    private QuestionnaireQues ques;

}

