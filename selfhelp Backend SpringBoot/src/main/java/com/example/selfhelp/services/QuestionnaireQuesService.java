package com.example.selfhelp.services;

import com.example.selfhelp.entity.QuestionnaireQues;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.payload.PostResponse;
import com.example.selfhelp.payload.QuestionnaireQuesDto;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface QuestionnaireQuesService {

    QuestionnaireQuesDto createQuestion(QuestionnaireQuesDto quesDto);

    List<QuestionnaireQuesDto> getAllQuestions();

    QuestionnaireQuesDto getQuestionById(long id);
    QuestionnaireQuesDto updatePost(QuestionnaireQuesDto quesDto,long id);



}
