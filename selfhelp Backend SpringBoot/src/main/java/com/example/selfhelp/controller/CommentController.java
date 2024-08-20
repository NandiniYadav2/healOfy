package com.example.selfhelp.controller;

import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.services.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class CommentController {
    private CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/posts/{postId}/createComment")
    public ResponseEntity<CommentDto> createComment(@PathVariable(value = "postId") long postId, @RequestBody CommentDto commentDto)
    {
        CommentDto newComment= commentService.createComment(postId,commentDto);
        return new ResponseEntity<>(newComment, HttpStatus.CREATED);

    }
    @GetMapping("/posts/{postId}/allComments")
    public List<CommentDto> getCommentByPostId(@PathVariable(value = "postId") long postId)
    {
        return commentService.getCommentsByPostId(postId);

    }
    @GetMapping("/posts/{postId}/comments/{id}")
    public ResponseEntity<CommentDto> getCommentById(@PathVariable(value = "postId") Long postId,@PathVariable(value = "id") Long commentId)
    {
        CommentDto commentDto = commentService.getCommentById(postId,commentId);
        return new ResponseEntity<>(commentDto,HttpStatus.OK);

    }

    @PutMapping("/posts/{postId}/comments/{id}")
    public ResponseEntity<CommentDto> updateCommentById(@PathVariable(value = "postId") Long postId,@PathVariable(value = "id")Long commentId,@RequestBody CommentDto commentRequest)
    {
        CommentDto updatedComment=commentService.updateComment(postId,commentId,commentRequest);
        return new ResponseEntity<>(updatedComment,HttpStatus.OK);

    }

    @DeleteMapping("/posts/{postId}/comments/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable(value = "postId") long postId,@PathVariable(value = "id")long commentId)
    {
        commentService.deleteComment(postId,commentId);
        return new ResponseEntity<>("Comment successfully deleted",HttpStatus.OK);
    }
}
