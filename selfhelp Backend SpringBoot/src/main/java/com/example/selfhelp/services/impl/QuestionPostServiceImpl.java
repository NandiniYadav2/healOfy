package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.Post;
import com.example.selfhelp.entity.QuestionPost;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.payload.PostResponse;
import com.example.selfhelp.payload.QuestionPostDto;
import com.example.selfhelp.payload.QuestionPostResponse;
import com.example.selfhelp.repositories.QuestionPostRepository;
import com.example.selfhelp.services.QuestionPostService;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionPostServiceImpl implements QuestionPostService {
    QuestionPostRepository questionPostRepository;
    ModelMapper modelMapper;

    public QuestionPostServiceImpl(QuestionPostRepository questionPostRepository, ModelMapper modelMapper) {
        this.questionPostRepository = questionPostRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public QuestionPostDto createQuestionPost(QuestionPostDto questionPostDto) {
        questionPostDto.setCreatedAt(LocalDateTime.now());
        questionPostDto.setFlag('0');
        QuestionPost questionPost= mapToEntity(questionPostDto);

        QuestionPost newPost = questionPostRepository.save(questionPost);

        QuestionPostDto questionPostResponse=mapToDTO(newPost);
        return questionPostResponse;
    }

    @Override
    public QuestionPostResponse getAllQuestionPosts(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort=sortDir.equalsIgnoreCase(Sort.Direction.ASC.name())? Sort.by(sortBy).ascending()
                :Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(pageNo,pageSize, sort);
        Page<QuestionPost> questionPosts = questionPostRepository.findAll(pageable);
        List<QuestionPost> listOfPosts = questionPosts.getContent();
        List<QuestionPostDto> content =  listOfPosts.stream().map(post -> mapToDTO(post)).collect(Collectors.toList());
        QuestionPostResponse postResponse = new QuestionPostResponse();
        postResponse.setContent(content);
        postResponse.setPageNo(questionPosts.getNumber());
        postResponse.setPageSize(questionPosts.getSize());
        postResponse.setTotalElements(questionPosts.getTotalElements());
        postResponse.setTotalPages(questionPosts.getTotalPages());
        postResponse.setLast(questionPosts.isLast());
        return postResponse;
    }

    @Override
    public QuestionPostDto getQuestionPostById(long id) {
        QuestionPost post = questionPostRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("QuestionPost","id",id));

        return mapToDTO(post);
    }

    @Override
    public QuestionPostDto updateQuestionPost(QuestionPostDto questionPostDto, long id) {
        QuestionPost questionPost = questionPostRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("QuestionPost","id",id));
        questionPost.setTitle(questionPostDto.getTitle());
        questionPost.setContent(questionPostDto.getContent());

        questionPost.setCreatedAt(LocalDateTime.now());
        questionPost.setName(questionPostDto.getName());
        questionPost.setFlag(questionPostDto.getFlag());
        QuestionPost updatedQuestionPost = questionPostRepository.save(questionPost);
        return mapToDTO(updatedQuestionPost);
    }

    @Override
    public void deleteQuestionPostById(long id) {

    }
    private QuestionPostDto mapToDTO(QuestionPost post)
    {
        QuestionPostDto postDto=modelMapper.map(post,QuestionPostDto.class);
        /*PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setId(post.getId());
        postDto.setTitle(post.getTitle());
        postDto.setDescription(post.getDescription());
        postDto.setCreatedAt(LocalDateTime.now());
        postDto.setContent(post.getContent());*/
        return postDto;

    }
    private QuestionPost mapToEntity(QuestionPostDto postDto)
    {
        QuestionPost post=modelMapper.map(postDto,QuestionPost.class);
       /* Post post=new Post();
        post.setTitle(postDto.getTitle());
        post.setDescription(postDto.getDescription());
        post.setContent(postDto.getContent());
        post.setCreatedAt(LocalDateTime.now());*/
        return post;
    }
}
