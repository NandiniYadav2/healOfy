package com.example.selfhelp.payload;

import lombok.Data;

import java.util.Set;

@Data
public class QuestionnaireQuesDto {
    private long Id;
    private String question;
    private int weightage;
    private Set<QuestionnaireResponseDto> responses;

}
