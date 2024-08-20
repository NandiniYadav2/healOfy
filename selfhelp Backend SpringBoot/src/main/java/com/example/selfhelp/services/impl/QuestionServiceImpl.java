package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.Comment;
import com.example.selfhelp.entity.Patient;
import com.example.selfhelp.entity.Post;
import com.example.selfhelp.entity.QuestionnaireQues;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.payload.QuestionnaireQuesDto;
import com.example.selfhelp.repositories.PatientRepository;
import com.example.selfhelp.repositories.QuestionnaireQuesRepository;
import com.example.selfhelp.services.QuestionnaireQuesService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionServiceImpl implements QuestionnaireQuesService {
    private QuestionnaireQuesRepository questionnaireQuesRepository;
    private PatientRepository patientRepository;
    private ModelMapper mapper;

    public QuestionServiceImpl(QuestionnaireQuesRepository questionnaireQuesRepository, ModelMapper mapper) {
        this.questionnaireQuesRepository = questionnaireQuesRepository;
        this.mapper=mapper;
    }

    @Override
    public QuestionnaireQuesDto createQuestion(QuestionnaireQuesDto quesDto) {
        QuestionnaireQues ques = mapToEntity(quesDto);
        //Patient patient = patientRepository.findById(pId).orElseThrow(() -> new ResourceNotFoundException("Patient","Id",pId));
        //comment.setCreatedAt(LocalDateTime.now());

        QuestionnaireQues newQues = questionnaireQuesRepository.save(ques);
        return mapToDTO(newQues);

    }

    @Override
    public List<QuestionnaireQuesDto> getAllQuestions() {
        List<QuestionnaireQues> questionnaireQues = questionnaireQuesRepository.findAll();
        return questionnaireQues.stream().map(question -> mapToDTO(question)).collect(Collectors.toList());

    }

    @Override
    public QuestionnaireQuesDto getQuestionById(long id) {
        QuestionnaireQues ques = questionnaireQuesRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post","id",id));

        return mapToDTO(ques);
    }

    @Override
    public QuestionnaireQuesDto updatePost(QuestionnaireQuesDto quesDto, long id) {
        QuestionnaireQues ques = questionnaireQuesRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post","id",id));
        ques.setQuestion(ques.getQuestion());
        ques.setWeightage(ques.getWeightage());


        QuestionnaireQues updatedques = questionnaireQuesRepository.save(ques);
        return mapToDTO(updatedques);
    }

    private QuestionnaireQuesDto mapToDTO(QuestionnaireQues questionnaireQues)
    {
        QuestionnaireQuesDto questionnaireQuesDto=mapper.map(questionnaireQues,QuestionnaireQuesDto.class);
        /*PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setId(post.getId());
        postDto.setTitle(post.getTitle());
        postDto.setDescription(post.getDescription());
        postDto.setCreatedAt(LocalDateTime.now());
        postDto.setContent(post.getContent());*/
        return questionnaireQuesDto;

    }
    private QuestionnaireQues mapToEntity(QuestionnaireQuesDto questionnaireQuesDto)
    {
        QuestionnaireQues questionnaireQues=mapper.map(questionnaireQuesDto,QuestionnaireQues.class);
       /* Post post=new Post();
        post.setTitle(postDto.getTitle());
        post.setDescription(postDto.getDescription());
        post.setContent(postDto.getContent());
        post.setCreatedAt(LocalDateTime.now());*/
        return questionnaireQues;
    }
}
