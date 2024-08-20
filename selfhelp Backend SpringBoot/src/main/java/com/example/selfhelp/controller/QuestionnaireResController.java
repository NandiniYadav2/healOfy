package com.example.selfhelp.controller;

import com.example.selfhelp.entity.QuestionnaireResponse;
import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.payload.QuestionnaireResponseDto;
import com.example.selfhelp.services.QuestionnaireQuesService;
import com.example.selfhelp.services.QuestionnaireResponseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class QuestionnaireResController
{
    QuestionnaireResponseService responseService;

    public QuestionnaireResController(QuestionnaireResponseService responseService) {
        this.responseService = responseService;
    }
    @PostMapping("/{qid}/createResponse")
    public ResponseEntity<QuestionnaireResponseDto> createResponse(@PathVariable(value = "qid") Long id,@RequestBody QuestionnaireResponseDto responseDto)
    {
        QuestionnaireResponseDto newResponse= responseService.createResponseById(id,responseDto);
        return new ResponseEntity<>(newResponse, HttpStatus.CREATED);
    }

    @GetMapping("/posts/{qId}/allResponses")
    public List<QuestionnaireResponseDto> getResponseByQuesId(@PathVariable(value = "postId") long Id)
    {
        return responseService.getResponsesByQuestId(Id);

    }
    @GetMapping("/{qId}/responses/{id}")
    public ResponseEntity<QuestionnaireResponseDto> getResponseById(@PathVariable(value = "qId") Long qId, @PathVariable(value = "id") Long responseId)
    {
        QuestionnaireResponseDto responseDto = responseService.getResponseById(qId,responseId);
        return new ResponseEntity<>(responseDto, HttpStatus.OK);

    }

}
