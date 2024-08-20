package com.example.selfhelp.services;

import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.payload.QuestionnaireResponseDto;

import java.util.List;

public interface QuestionnaireResponseService {

    public QuestionnaireResponseDto createResponseById(long qId, QuestionnaireResponseDto responseDto);

    List<QuestionnaireResponseDto> getResponsesByQuestId(long qId);

    QuestionnaireResponseDto getResponseById(long qId,long resId);




}
