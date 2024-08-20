package com.example.selfhelp.controller;

import com.example.selfhelp.entity.Chat;
import com.example.selfhelp.payload.ChatDto;
import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.services.ChatService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class ChatController {
    ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }
    @PostMapping("/{appointmentId}/{userId}/createChat")
    public ResponseEntity<ChatDto> createChat(@PathVariable(value = "appointmentId") long appointmentId, @PathVariable(value = "userId")Long userId,@RequestBody ChatDto chatDto)
    {
        ChatDto newChat= chatService.createChat(appointmentId,userId,chatDto);
        return new ResponseEntity<>(newChat, HttpStatus.CREATED);

    }
    @GetMapping("/{appointmentId}/allChats")
    public List<ChatDto> getChatsByAppointmentId(@PathVariable(value = "appointmentId") long appointmentId)
    {
        return chatService.getChatsByAppointmentId(appointmentId);

    }
    @GetMapping("/{appointmentId}/chats/{id}")
    public ResponseEntity<ChatDto> getChatById(@PathVariable(value = "appointmentId") Long appointmentId,@PathVariable(value = "id") Long chatId)
    {
        ChatDto chatDto = chatService.getChatById(appointmentId,chatId);
        return new ResponseEntity<>(chatDto,HttpStatus.OK);

    }

//    @PutMapping("/posts/{postId}/comments/{id}")
//    public ResponseEntity<CommentDto> updateCommentById(@PathVariable(value = "postId") Long postId,@PathVariable(value = "id")Long commentId,@RequestBody CommentDto commentRequest)
//    {
//        CommentDto updatedComment=commentService.updateComment(postId,commentId,commentRequest);
//        return new ResponseEntity<>(updatedComment,HttpStatus.OK);
//
//    }
//
//    @DeleteMapping("/posts/{postId}/comments/{id}")
//    public ResponseEntity<String> deleteComment(@PathVariable(value = "postId") long postId,@PathVariable(value = "id")long commentId)
//    {
//        commentService.deleteComment(postId,commentId);
//        return new ResponseEntity<>("Comment successfully deleted",HttpStatus.OK);
//    }
}
