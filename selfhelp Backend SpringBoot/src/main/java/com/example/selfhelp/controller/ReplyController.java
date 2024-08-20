package com.example.selfhelp.controller;

import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.payload.ReplyDto;
import com.example.selfhelp.services.CommentService;
import com.example.selfhelp.services.ReplyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ReplyController {
    private ReplyService replyService;

    public ReplyController(ReplyService replyService) {
        this.replyService = replyService;
    }
    @PreAuthorize("hasAuthority('DOCTOR')")
    @PostMapping("/questionPost/{postId}/createReply")
    public ResponseEntity<ReplyDto> createComment(@PathVariable(value = "postId") long questionPostId, @RequestBody ReplyDto replyDto)
    {
        ReplyDto newReply= replyService.createReply(questionPostId,replyDto);
        return new ResponseEntity<>(newReply, HttpStatus.CREATED);

    }
    @GetMapping("/questionPost/{postId}/allReplies")
    public List<ReplyDto> getReplyByQuestionPostId(@PathVariable(value = "postId") long postId)
    {
        return replyService.getReplyByQuestionPostId(postId);

    }
    @GetMapping("/questionPost/{postId}/replies/{id}")
    public ResponseEntity<ReplyDto> getReplyById(@PathVariable(value = "postId") Long postId,@PathVariable(value = "id") Long replyId)
    {
        ReplyDto replyDto = replyService.getReplyById(postId,replyId);
        return new ResponseEntity<>(replyDto,HttpStatus.OK);

    }

    @PutMapping("/questionPost/{postId}/replies/{id}")
    public ResponseEntity<ReplyDto> updateCommentById(@PathVariable(value = "postId") Long postId,@PathVariable(value = "id")Long replyId,@RequestBody ReplyDto replyDto)
    {
        ReplyDto updatedReply=replyService.updateReply(postId,replyId,replyDto);
        return new ResponseEntity<>(updatedReply,HttpStatus.OK);

    }

//    @DeleteMapping("/posts/{postId}/comments/{id}")
//    public ResponseEntity<String> deleteComment(@PathVariable(value = "postId") long postId,@PathVariable(value = "id")long commentId)
//    {
//        commentService.deleteComment(postId,commentId);
//        return new ResponseEntity<>("Comment successfully deleted",HttpStatus.OK);
//    }
}
