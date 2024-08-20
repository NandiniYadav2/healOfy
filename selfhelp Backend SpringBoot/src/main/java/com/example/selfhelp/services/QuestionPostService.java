package com.example.selfhelp.services;

import com.example.selfhelp.entity.QuestionPost;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.payload.PostResponse;
import com.example.selfhelp.payload.QuestionPostDto;
import com.example.selfhelp.payload.QuestionPostResponse;

public interface QuestionPostService {
    QuestionPostDto createQuestionPost(QuestionPostDto questionPostDto);
    QuestionPostResponse getAllQuestionPosts(int pageNo, int pageSize, String sortBy, String sortDir);

    QuestionPostDto getQuestionPostById(long id);
    QuestionPostDto updateQuestionPost(QuestionPostDto questionPostDto,long id);

    void deleteQuestionPostById(long id);
}
