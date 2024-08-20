package com.example.selfhelp.controller;

import com.example.selfhelp.payload.QuestionPostDto;
import com.example.selfhelp.payload.QuestionPostResponse;
import com.example.selfhelp.services.QuestionPostService;
import com.example.selfhelp.utils.AppConstants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class QuestionPostController {
    private QuestionPostService questionPostService;
    public QuestionPostController(QuestionPostService questionPostService) {
        this.questionPostService = questionPostService;
    }

    @PostMapping("/questionPost/createQuestion")
    public ResponseEntity<QuestionPostDto> createQuestionPost(@RequestBody QuestionPostDto postDto)
    {
        return new ResponseEntity<>(questionPostService.createQuestionPost(postDto), HttpStatus.CREATED);
    }

    @GetMapping("/questionPost/allQuestions")
    public QuestionPostResponse getAllPosts(
            @RequestParam(value = "pageNo",defaultValue = AppConstants.DEFAULT_PAGE_NUMBER,required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = AppConstants.DEFAULT_PAGE_SIZE,required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue = AppConstants.DEFAULT_SORT_BY,required=false) String sortBy,
            @RequestParam(value = "sortDir" , defaultValue = "desc",required = false)String sortDir
    )
    {

        return questionPostService.getAllQuestionPosts(pageNo,pageSize,sortBy,sortDir);
    }
    @GetMapping("/questionPost/{id}")
    public ResponseEntity<QuestionPostDto> getPostById(@PathVariable(name = "id") long id)
    {
        return ResponseEntity.ok(questionPostService.getQuestionPostById(id));
    }
    @PutMapping("/questionPost/{id}")
    public ResponseEntity<QuestionPostDto> updatePost(@RequestBody QuestionPostDto postDto, @PathVariable(name = "id") long id)
    {
        return new ResponseEntity<>(questionPostService.updateQuestionPost(postDto,id), HttpStatus.OK);
    }

}
