package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.Comment;
import com.example.selfhelp.entity.Post;
import com.example.selfhelp.exception.PostCommentException;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.repositories.CommentRepository;
import com.example.selfhelp.repositories.PostRepository;
import com.example.selfhelp.services.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    private CommentRepository commentRepository;
    private PostRepository postRepository;

    private ModelMapper mapper;



    public CommentServiceImpl(CommentRepository commentRepository,PostRepository postRepository,ModelMapper mapper)
    {
        this.commentRepository=commentRepository;
        this.postRepository=postRepository;
        this.mapper=mapper;
    }
    @Override
    public CommentDto createComment(long postId, CommentDto commentDto)
    {
        commentDto.setCreatedAt(LocalDateTime.now());
        commentDto.setFlag('0');
        Comment comment = mapToEntity(commentDto);
        Post post = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post","Id",postId));
        //comment.setCreatedAt(LocalDateTime.now());
        comment.setPost(post);
        Comment newComment = commentRepository.save(comment);
        return maptoDto(newComment);

    }

    @Override
    public List<CommentDto> getCommentsByPostId(long postId) {
        List<Comment> comments = commentRepository.findByPostId(postId);
        return comments.stream().map(comment -> maptoDto(comment)).collect(Collectors.toList());

    }

    @Override
    public CommentDto getCommentById(long postId, long commentId) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post","Id",postId));
        Comment comment=commentRepository.findById(commentId).orElseThrow(() -> new ResourceNotFoundException("Comment","Id",commentId));

        if(!comment.getPost().getId().equals(post.getId()))
        {
            throw new PostCommentException(HttpStatus.BAD_REQUEST,"Comment does not belong to post");
        }
        return maptoDto(comment);


    }

    @Override
    public CommentDto updateComment(Long postId, Long commentId, CommentDto commentRequest) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post","Id",postId));
        Comment comment=commentRepository.findById(commentId).orElseThrow(() -> new ResourceNotFoundException("Comment","Id",commentId));
        if(!comment.getPost().getId().equals(post.getId()))
        {
            throw new PostCommentException(HttpStatus.BAD_REQUEST,"Comment does not belong to post");
        }

        comment.setName(commentRequest.getName());
        comment.setEmail(commentRequest.getEmail());
        comment.setBody(commentRequest.getBody());
        comment.setCreatedAt(LocalDateTime.now());
        comment.setPost(post);
        comment.setFlag('0');
        Comment updatedComment=commentRepository.save(comment);
        return maptoDto(updatedComment);
    }

    @Override
    public void deleteComment(Long postId, Long commentId)
    {
        Post post = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post","Id",postId));
        Comment comment=commentRepository.findById(commentId).orElseThrow(() -> new ResourceNotFoundException("Comment","Id",commentId));
        if(!comment.getPost().getId().equals(post.getId()))
        {
            throw new PostCommentException(HttpStatus.BAD_REQUEST,"Comment does not belong to post");
        }
        commentRepository.delete(comment);


    }

    private CommentDto maptoDto(Comment comment)
    {
        CommentDto commentDto=mapper.map(comment, CommentDto.class);
        /*CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setName(comment.getName());
        commentDto.setEmail(comment.getEmail());
        commentDto.setBody(comment.getBody());
        commentDto.setCreatedAt(LocalDateTime.now());*/
        return commentDto;
    }

    private Comment mapToEntity(CommentDto commentDto)
    {
        Comment comment = mapper.map(commentDto,Comment.class);
        /*Comment comment=new Comment();
        comment.setId(commentDto.getId());
        comment.setName(commentDto.getName());
        comment.setEmail(commentDto.getEmail());
        comment.setBody(commentDto.getBody());
        comment.setCreatedAt(LocalDateTime.now());*/
        return comment;
    }
}
