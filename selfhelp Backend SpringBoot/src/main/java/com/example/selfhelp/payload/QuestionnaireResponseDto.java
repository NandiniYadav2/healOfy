package com.example.selfhelp.payload;

import lombok.Data;

@Data
public class QuestionnaireResponseDto {
    private Long Id;
    private String content;
    private boolean isChosen;
    private int weightage;

}
