package com.example.selfhelp.controller;

import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.payload.PostResponse;
import com.example.selfhelp.payload.QuestionnaireQuesDto;
import com.example.selfhelp.services.QuestionnaireQuesService;
import com.example.selfhelp.utils.AppConstants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class QuestionnaireQuesController {
    private QuestionnaireQuesService quesService;
    public QuestionnaireQuesController(QuestionnaireQuesService quesService) {
        this.quesService = quesService;
    }

    @PostMapping("/createQuestion")

    public ResponseEntity<QuestionnaireQuesDto> createQuestion(@RequestBody QuestionnaireQuesDto ques)
    {
        QuestionnaireQuesDto newQues= quesService.createQuestion(ques);
        return new ResponseEntity<>(newQues, HttpStatus.CREATED);

    }

    @GetMapping("/allQuestions")
    public List<QuestionnaireQuesDto> getAllQuestions()
    {

        return quesService.getAllQuestions();
    }
    @GetMapping("/question/{id}")
    public ResponseEntity<QuestionnaireQuesDto> getQuestionById(@PathVariable(name = "id") long id)
    {
        return new ResponseEntity<>(quesService.getQuestionById(id),HttpStatus.OK);

    }
    @PutMapping("/question/{id}")
    public ResponseEntity<QuestionnaireQuesDto> updatePost(@RequestBody QuestionnaireQuesDto quesDto, @PathVariable(name = "id") long id)
    {
        return new ResponseEntity<>(quesService.updatePost(quesDto,id),HttpStatus.OK);
    }
}
