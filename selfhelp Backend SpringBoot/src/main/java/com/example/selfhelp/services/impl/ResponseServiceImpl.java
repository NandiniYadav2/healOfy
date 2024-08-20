package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.Comment;
import com.example.selfhelp.entity.Post;
import com.example.selfhelp.entity.QuestionnaireQues;
import com.example.selfhelp.entity.QuestionnaireResponse;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.payload.QuestionnaireQuesDto;
import com.example.selfhelp.payload.QuestionnaireResponseDto;
import com.example.selfhelp.repositories.QuestionnaireQuesRepository;
import com.example.selfhelp.repositories.QuestionnaireResponseRepository;
import com.example.selfhelp.services.QuestionnaireQuesService;
import com.example.selfhelp.services.QuestionnaireResponseService;
import org.apache.catalina.mapper.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ResponseServiceImpl implements QuestionnaireResponseService {

    QuestionnaireResponseRepository responseRepository;
    QuestionnaireQuesRepository questionnaireQuesRepository;
    private ModelMapper mapper;

    public ResponseServiceImpl(QuestionnaireResponseRepository responseRepository, QuestionnaireQuesRepository questionnaireQuesRepository,ModelMapper mapper) {
        this.responseRepository = responseRepository;
        this.questionnaireQuesRepository=questionnaireQuesRepository;
        this.mapper = mapper;
    }


    @Override
    public QuestionnaireResponseDto createResponseById(long quesId, QuestionnaireResponseDto responseDto) {

        QuestionnaireResponse response = mapToEntity(responseDto);
        QuestionnaireQues ques = questionnaireQuesRepository.findById(quesId).orElseThrow(() -> new ResourceNotFoundException("Question","Id",quesId));
        //comment.setCreatedAt(LocalDateTime.now());
        response.setQues(ques);
        //comment.setPost(post);
        QuestionnaireResponse newResponse = responseRepository.save(response);
        return maptoDto(newResponse);
    }

    @Override
    public List<QuestionnaireResponseDto> getResponsesByQuestId(long qId) {
        List<QuestionnaireResponse> responses = responseRepository.findByQuesId(qId);
        return responses.stream().map(response -> mapToDtO(response)).collect(Collectors.toList());

    }

    @Override
    public QuestionnaireResponseDto getResponseById(long qId, long resId) {
        return null;
    }
    private QuestionnaireResponseDto mapToDtO(QuestionnaireResponse questionnaireRes)
    {
        QuestionnaireResponseDto questionnaireResDto=mapper.map(questionnaireRes,QuestionnaireResponseDto.class);

        return questionnaireResDto;

    }
    private QuestionnaireResponseDto maptoDto(QuestionnaireResponse response)
    {
        QuestionnaireResponseDto responseDto=mapper.map(response, QuestionnaireResponseDto.class);
        /*CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setName(comment.getName());
        commentDto.setEmail(comment.getEmail());
        commentDto.setBody(comment.getBody());
        commentDto.setCreatedAt(LocalDateTime.now());*/
        return responseDto;

    }
    private QuestionnaireResponse mapToEntity(QuestionnaireResponseDto questionnaireResDto)
    {
        QuestionnaireResponse questionnaireRes=mapper.map(questionnaireResDto,QuestionnaireResponse.class);
       /* Post post=new Post();
        post.setTitle(postDto.getTitle());
        post.setDescription(postDto.getDescription());
        post.setContent(postDto.getContent());
        post.setCreatedAt(LocalDateTime.now());*/
        return questionnaireRes;
    }
}
