package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.Comment;
import com.example.selfhelp.entity.Post;
import com.example.selfhelp.entity.QuestionPost;
import com.example.selfhelp.entity.Reply;
import com.example.selfhelp.exception.PostCommentException;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.payload.ReplyDto;
import com.example.selfhelp.repositories.QuestionPostRepository;
import com.example.selfhelp.repositories.ReplyRepository;
import com.example.selfhelp.services.ReplyService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service

public class ReplyServiceImpl implements ReplyService {

    QuestionPostRepository questionPostRepository;
    ReplyRepository replyRepository;
    ModelMapper mapper;

    public ReplyServiceImpl(QuestionPostRepository questionPostRepository, ReplyRepository replyRepository,ModelMapper mapper) {
        this.questionPostRepository = questionPostRepository;
        this.replyRepository = replyRepository;
        this.mapper=mapper;
    }

    @Override
    public ReplyDto createReply(long questionPostId, ReplyDto replyDto) {
        replyDto.setCreatedAt(LocalDateTime.now());
        replyDto.setFlag('0');
        Reply reply = mapToEntity(replyDto);
        QuestionPost post = questionPostRepository.findById(questionPostId).orElseThrow(() -> new ResourceNotFoundException("Post","Id",questionPostId));
        //comment.setCreatedAt(LocalDateTime.now());
        reply.setQuesPost(post);
        Reply newReply = replyRepository.save(reply);
        return mapToDTO(newReply);
    }

    @Override
    public List<ReplyDto> getReplyByQuestionPostId(long questionPostId) {
        List<Reply> replies = replyRepository.findByQuesPost_Id(questionPostId);
        return replies.stream().map(reply -> mapToDTO(reply)).collect(Collectors.toList());
    }

    @Override
    public ReplyDto getReplyById(long questionPostId, long replyId) {
        QuestionPost post = questionPostRepository.findById(questionPostId).orElseThrow(() -> new ResourceNotFoundException("Post","Id",questionPostId));
        Reply reply=replyRepository.findById(replyId).orElseThrow(() -> new ResourceNotFoundException("Reply","Id",replyId));

        if(!reply.getQuesPost().getId().equals(post.getId()))
        {
            throw new PostCommentException(HttpStatus.BAD_REQUEST,"Comment does not belong to post");
        }
        return mapToDTO(reply);
    }

    @Override
    public ReplyDto updateReply(Long questionPostId, Long replyId, ReplyDto replyDto) {
        QuestionPost questionPost = questionPostRepository.findById(questionPostId).orElseThrow(() -> new ResourceNotFoundException("Post","Id",questionPostId));
        Reply reply=replyRepository.findById(replyId).orElseThrow(() -> new ResourceNotFoundException("Reply","Id",replyId));
        if(!reply.getQuesPost().getId().equals(questionPost.getId()))
        {
            throw new PostCommentException(HttpStatus.BAD_REQUEST,"Reply does not belong to post");
        }

        reply.setName(replyDto.getName());
        reply.setEmail(replyDto.getEmail());
        reply.setBody(replyDto.getBody());
        reply.setCreatedAt(LocalDateTime.now());
        reply.setQuesPost(questionPost);
        reply.setFlag('0');
        Reply updatedComment=replyRepository.save(reply);
        return mapToDTO(updatedComment);
    }

    @Override
    public void deleteReply(Long questionPostId, Long replyId) {

    }
    private ReplyDto mapToDTO(Reply reply)
    {
        ReplyDto replyDto=mapper.map(reply,ReplyDto.class);
        /*PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setId(post.getId());
        postDto.setTitle(post.getTitle());
        postDto.setDescription(post.getDescription());
        postDto.setCreatedAt(LocalDateTime.now());
        postDto.setContent(post.getContent());*/
        return replyDto;

    }
    private Reply mapToEntity(ReplyDto replyDto)
    {
        Reply reply=mapper.map(replyDto,Reply.class);
       /* Post post=new Post();
        post.setTitle(postDto.getTitle());
        post.setDescription(postDto.getDescription());
        post.setContent(postDto.getContent());
        post.setCreatedAt(LocalDateTime.now());*/
        return reply;
    }
}
