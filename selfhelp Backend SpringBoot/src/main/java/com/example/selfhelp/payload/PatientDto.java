package com.example.selfhelp.payload;

import lombok.Data;

import java.util.Set;

@Data
public class PatientDto {
    Long id;

    String firstName;
    String lastName;
    String email;
    String age;
    String address;
    String severity;
    private Set<QuestionnaireQuesDto> questions;
}
